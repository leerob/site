---
title: "Styling in Angular part1 Sass"
summary: "This is the first part of a series of posts that will approach different ways of styling []Angular applications."
image: "/assets/images/posts/bridge.jpg"
tags: [web, angular, javascript]
---

{% include image.html path="posts/bridge.jpg" path-detail="posts/bridge.jpg" alt="bridge" %}

This is the first part of a series of posts that will approach different ways of styling [Angular](https://angular.io/) applications. Angular is a very powerful platform for developing web applications, and allows for many different ways that styling can be done, with different benefits and drawbacks and also different tastes when it comes to making the decision of how to style the app you are building.

First I will address an important note which is that this will not be a comparison of which way is the best / more reliable / scalable way of styling your applications. Different projects / teams will need different solutions and what is right for one does not necessarily mean it’s the right for everyone.

A second important note is that this will also not be about [Component styles](https://angular.io/docs/ts/latest/guide/component-styles.html) which is well covered in the official angular documentation, or about the different types of styling strategies in Angular components (emulated, shadow-dom or none). This will be more about what kind of frameworks, languages, and workflows you will be choosing for you application. So more in the lines of SASS, pure CSS, CSS-in-JS using CSS modules or Aphrodite or even just using Angular’s styling capabilities as a way of handling styles through the application.

## Angular with Sass

The first part of this series will target [SASS](http://sass-lang.com/). Sass has been around for quite a long time, it’s very familiar to both developers and designers and is one of the easiest ways to gain some flexibility on how to style any  application, so naturally this applies also to Angular applications.

To get started with SASS in Angular it’s pretty easy and there are a couple of ways you can do it.

### Angular2 template loader

The first option is to use the [Angular2 template loader](https://github.com/TheLarkInn/angular2-template-loader). This is a [webpack](https://webpack.github.io/) loader created by [Sean Larkin](https://twitter.com/thelarkinn?lang=en) from the webpack core team. It allows you to use **.scss** files like you would normally do in any normal web application but still be able to use those **.scss** files inside the components [styleUrls](https://angular.io/docs/ts/latest/guide/component-styles.html#!#loading-styles)  property.

The first step is to install the angular2-template-loader

{% highlight bash %}
npm install angular2-template-loader --save-dev
{% endhighlight %}

And inside a component the code would look like this :

{% highlight javascript %}
@Component({
  selector: 'simple-component',
  template: `<div class=”simple-div-comp”></button>`,
  styleUrls: [`./simple-component.scss`]
})
export class SimpleComponent { }
{% endhighlight %}

In your webpack config the loader must be set to use the angular2-template-loader for .ts files like the following :

{% highlight javascript %}
{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
{% endhighlight %}

This is essencially like using the normal [styleUrls](https://angular.io/docs/ts/latest/guide/component-styles.html#!#loading-styles) property that normally works only for **.css** files, but this time with a **.scss** file. Webpack will take care of compiling that sass to css and embedding it into the component using Angular’s internal styling system.

**Note : **

This works also with AOT which is extremely useful.

### ngtools/webpack

Angular-cli introduced a new set of tools that the Angular team maintains so that it works also for non-cli projects. One of these is the [ngtools/webpack](https://www.npmjs.com/package/@ngtools/webpack) project that includes a set of functionality that covers also what we saw in angular2-template-loader.

This tool includes both an AOT plugin for webpack and also a template loader, which also parses Sass files similar to what angular2-template-loader does. So if you want to combine something that loads sass files into angular2 templates (like angular2-template-loader) and also does AOT the ngtools/webpack is a good way to go at it.

The first step again is to install :

{% highlight bash %}
npm install @ngtools/webpack --save-dev
{% endhighlight %}

Its simple to use, in your template you use it like in the angular2-template-loader :

{% highlight javascript %}
@Component({
  selector: 'simple-component',
  template: `<div class=”simple-div-comp”></button>`,
  styleUrls: [`./simple-component.scss`]
})
export class SimpleComponent { }
{% endhighlight %}

In the webpack config you would set the following :

{% highlight javascript %}
import {AotPlugin} from '@ngtools/webpack'
exports = { /* ... */
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      }
    ]
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: 'path/to/tsconfig.json',
      entryModule: 'path/to/app.module#AppModule'
    })
  ]
}
{% endhighlight %}

The part that is relevant to the styling is the .ts files loader, where ngtools/webpack is being used as a loader, and notice that it replaces both awesome-typescript-loader (the actually parsing of typescript) and the angular2-template-loader combining them both into one single loader that also does AOT.

In the bottom some additional settings like the entry module are added for the purpose of AOT.

### Angular-cli

Of course the third option is to use the [Angular-cli](https://github.com/angular/angular-cli) which is currently in beta but fully supports SASS as well.

The way you would use it is exactly as mentioned above (as it uses behind the scenes the same plugins) :

{% highlight javascript %}
@Component({
  selector: 'simple-component',
  template: `<div class=”simple-div-comp”></button>`,
  styleUrls: [`./simple-component.scss`]
})
export class SimpleComponent { }
{% endhighlight %}

The difference here is you don’t need to do anything on the webpack side. The cli will take care of that for you so this code will just work when dealing with the Cli.


## Advantages in using sass with Angular

*  Sass is still very popular and probably one of the most popular ways of handling CSS in Angular projects so any issues will always be quickly resolved
*  Easy to onboard new people into the application since they are most likely already familiar with the language
*  Sass includes some very high-end css functionality like variables, functions and mixins that regular CSS misses.
*  Possibility to include and use frameworks like bootstrap or foundations that support sass and make it easier to kickstart your projects in term of styling

## Disadvantages in using sass

*  The need to use a sass compiler and a set of extra tools or webpack plugins to handle sass, as Angular by default does not provide this
*  The need to compile sass into CSS also results in some delay when it comes to development as sass files need to be recompiled
*  For small apps this might be an overkill as the need for styling is so small that it doesn’t provide enough value for all the boilerplate and extra setup
*  Sass still lacks a proper way of handling with dead-code-elimination and /or tree shaking that other ways of styling (mostly using javascript) already have accomplished to minimize the amount of code that is lost because one fails to account for what is already being used in terms of scss code.

We will go over other techniques on how to style Angular applications, but SASS is definitely a valid option and will continue to be so for the upcoming years. So keep posted for the other ones that I will go over in the upcoming weeks.
