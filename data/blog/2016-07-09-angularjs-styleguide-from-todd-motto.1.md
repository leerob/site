---
title: "Create components at runtime with Angular"
summary: "Dynamically rendering angular components using the runtime compiler."
image: "/assets/images/posts/cycle.jpg"
tags: [web, angular, javascript]
---

{% include image.html path="posts/cycle.jpg" path-detail="posts/cycle.jpg" alt="Cycle" %}

The last couple of months I have been on and off trying to get [carte blanche](https://github.com/carteb/carte-blanche) working with Angular 2 by making a [Carte-blanche-angular2 plugin](https://github.com/joaogarin/carte-blanche-angular2). This has provided some interesting challenges especially on how to render dynamically components at runtime using the Angular runtime compiler. The approach I took went through several changes during RC periods but I will focus on the last one which is the one compatible with the final release of Angular2 using NgModules.

This solution is basically a fork of the [blog post](http://blog.lacolaco.net/post/dynamic-component-creation-in-angular-2-rc-5/) from [Laco](https://twitter.com/laco0416) so I heavily suggest checking out that blog post as well as [the repo](https://github.com/laco0416/angular2-component-outlet).

## The Challenge

The challenge is simple, create at runtime a component and render it in a page. Maybe you have something that comes from a server, or in a build step get some info and need to dynamically at runtime use that style / template or inputs and create a component and render it. This is one of the most flexible ways to do it.

### An overview of the solution

Before jumping into the technical aspects and code for the solution I think it’s good to have an overview of how it works briefly. Angular works with NgModules since RC5 and that applies to dynamically generated components as well, every component needs to be registered in a module.

The solution has 4 essential steps to it :

*   1 ) Create a dynamic component outlet / wrapper(call it dynamic-outlet
*   2 ) Get the necessary parts of what makes a component (style, template, inputs etc..)
*   3 ) Dynamically generate the Component Factory with the Angular runtime compiler
*   4 ) Inject the component factory into the dynamic outlet component template using [viewContainerRef](https://angular.io/docs/ts/latest/api/core/index/ViewContainerRef-class.html)

So let’s start by the first step, creating a simple component to inject the dynamically created component in. Because it needs to go somewhere right? This could totally be you root angular app or any other component where you need to place this dynamic component in.

### 1 & 2 - Create a dynamic component outlet and get dynamic data

This part is the simple part. You just create a component just like any other component, with only one particular thing. It will have sort of a placeholder to inject the component in. There are different ways to accomplish this injecting part using @ViewChild or using ReflectiveInjector, for this case we will use the ReflectiveInjector service.


{% highlight javascript %}
/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ReflectiveInjector, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentGenerator } from './../../services/index.ts';
/*
 * Dynamic outlet to generate components
 */
@Component({
  selector: 'cb-dynamic-outlet',
  styles: [``],
  template: `<div id="dynamic-cmp" class="dynamic-comp"></div>`,
})
export class DynamicOutlet implements OnInit, OnChanges {
  cmpRef: ComponentRef<any>;
  constructor(
    private componentGenerator: ComponentGenerator,
    private vcRef: ViewContainerRef) {
  }
  ngOnInit() {
    this.renderComponent();
  }
  /**
   * Use the componentGenerator service to render the component Dynamically
   */
  renderComponent() {
    // Parse the decorator info
    let componentDecorator = {
        selector: 'dynamic-name-comp',
        styles: [``],
        template: `<div class="name">{{name}}</div>`,
    };
    // get the ComponentFactory from our service so we can inject it into the view
    this.componentGenerator.createComponentFactory(componentDecorator, (factory) => {
      if (factory) {
        // Inject here the component factory (step 4)
      }
    });
  }
}
{% endhighlight %}

Step 2 here is hardcoded, but you could here use your service call via http or something that would make these things dynamic like the styles or the name of the component to be rendered. Essencially provide these as an object (simillar to how its used when using the @component decorator).

### Step 3 - Dynamically generate the Component Factory

In this step we will create the service used previously to generate the component factory by at runtime registering a new module and attaching the newly created component to that module.

{% highlight javascript %}
import { Injectable, Component, Input, ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RuntimeCompiler } from "@angular/compiler";
@Injectable()
export class ComponentGenerator {
    constructor(private compiler: RuntimeCompiler) { }
    /**
     * Create the metadata for the component to be used to generate the component Factory
     */
    createMetadata(componentDecorator): Component {
        return new Component(componentDecorator);
    }
    /**
     * Use the runtime compiler to create this Component Factory dynamically as well as a dynamic module
     * to wrapp it
     *
     * This will create a dynamic module and a dynamic component by calling  compiler.compileModuleAndAllComponentsAsync and passing in a NgModule
     * that we create on the fly wrapping our newly created component
     *
     * @param {Object} decoratorData
     * The medatata for this component
     *
     * @param {Function} cb
     * The callback to call when we create the component returning inside our component Factor
     *
     * With this Component Factory we can then inject it in the View by using ViewContainerRef and Injector
     * See @dynamicOutlet.component.ts
     */
    createComponentFactory(decoratorData: Object, cb: Function) {
        // first get our metadata
        let metadata = this.createMetadata(decoratorData);
        let factory;
        const cmpClass = class DynamicComponent { };
        const decoratedCmp = Component(metadata)(cmpClass);
        @NgModule({
            imports: [BrowserModule],
            declarations: [decoratedCmp]
        })
        class DynamicModule { }
       this.compiler.compileModuleAndAllComponentsAsync(DynamicModule).then((moduleWithComponentFactory) => {
            const compFactory = moduleWithComponentFactory.componentFactories
                .find(x => x.componentType === decoratedCmp);
            cb(compFactory);
        });
    }
}
{% endhighlight %}

Let’s analyze what was done in this service for a moment so we can better understand the concept behind it.

We start by calling **createComponentFactory**, which is a function that takes what we call the decorator data simulating what we normally send to a @component decorator :

*   Selector
*   Styles
*   Template

This could have more things like change detection strategy and any other @component decorator properties but for simplicity we have these which are the most common ones being used.

The second step is to create the component with the metadata and the class (an empty class in this case for simplicity reasons) and register it in a module and compiling with the @NgModule decorator.

Finally we compile it and return the factory. The trick here is because a module contains multiple components (normally) we filter this by the one that has the class that we just created in order to return only the component we need.

### Step 4 -  Inject the component into the dynamic outlet component template using viewContainerRef

On step one after we get the component factory from our service’s **createComponentFactory** method we have to inject it into our view. Lets take a look at that.

{% highlight javascript %}
 // get the ComponentFactory from our service so we can inject it into the view
    this.componentGenerator.createComponentFactory(componentDecorator, (factory) => {
      if (factory) {
        this.vcRef.clear();
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.cmpRef = this.vcRef.createComponent(factory, -1, injector, []);
        // Here we can populate inputs
        // This has to be dynamic for every input
        this.cmpRef.instance['name'] = 'Some dynamic name';
      }
    });
{% endhighlight %}

As we can see here we use the ReflectiveInjector to inject our component into the view and this is pretty straightforward. We can then also inject dynamically inputs and other things into this component by accessing the component reference instance.

## Review

That’s it. We have a component that was created entirely at runtime, injecting inputs into it that are also dynamic and could be fetched from a server, could also be changed by some observable response for example etc.. This is a great feature of angular2 that allows for dynamic creation of components whose templates, styles and / or inputs might be delivered at runtime for whatever reason.

### AOT

I haven’t explored AOT, or how that would play out in this scenario at all, if that would even be something doable or not since this is a runtime thing. At the moment this is all done in JIT mode using the RuntimeCompiler form @angular/compiler module.
