---
title: "Angularjs styleguide from Todd Motto"
summary: "A style guide that covers mainly the topics of Architecture, file structure, components, one-way data flow and best practices"
image: "/assets/images/posts/style.jpg"
tags: [web, angular, javascript]
---

{% include image.html path="posts/style.jpg" path-detail="posts/style.jpg" alt="Sky" %}

## Angular 1 is not dead!

As Angular 2 get’s a lot of momentum, Angular 1 seems to be a little off in the choices of developers for building new apps, but a big amount of apps are still being run in Angular 1. And fortunately the Angular team has made a big effort in getting Angular 1 up to speed with the latest of the web, as component architecture approach and one way direction data flow.

[In another blog post](https://joaogarin.com/blog/angular-1-component-method) we talked about the Angular 1.5 component method and how it can be used to build a component architectured app in Angular 1, and another big addition to this to make your app really solid and maintainable is the new [Angular styleguide](https://github.com/toddmotto/angular-styleguide) by [Todd Motto](https://twitter.com/toddmotto). This style guide gives you a really good insight on how to combine the latest improvements in Angular 1 with ES6 (using babel or typescript) to make a solid well founded and maintainable Angular 1 app.

The style guide covers mainly the topics of Architecture, file structure, components, one-way data flow and best practices. So let’s start taking a look on what it is and how it can help you in getting your Angular 1 app to the next level.

### Migrate to Angular 2? Not relevant

While this approach makes it easier for you go converge into Angular 2, I am not going to get too much into that. I think a lot of the apps will not really be converted into Angular 2 and I don’t think you should consider this approach only if you are thinking about going to Angular 2. The reason for considering this approach is because you want a solid and maintainable Angular 1 app, and that just by itself should be enough.



## A Modular architecture

In Angular 1 think of every module of your application as a module component. A module component is the definition of the module that encapsulates all the logic, templates, routing and also all the child components of that component. This will be reflected in the folder structure of the app.

We should have 3 main folders that represent 3 high level modules, Root ,Component and Common.

*  Root  - The Root of our app that bootstraps and kicks our app off, all the components are imported into this Root component.
*  Component - Reusable components, they should be generic components that can easily be imported into a different app, they have no app specific logic in them.
*  Common - App specific components. They are components that contain some app specific logic in them.

## Root module

The Root module starts with a Root component that defines the base element for the whole app. It can also and most probably will, define a router outlet.

{% highlight javascript %}
// app.component.js
const AppComponent = {
  template: `
    <header>
        Hello world
    </header>
    <div>
        <div ui-view></div>
    </div>
    <footer>
        Copyright MyApp 2016.
    </footer>
  `
};
export default AppComponent;
{% endhighlight %}

Notice how the component definition object is exported using ES6 export as default to be then imported into our module js file.

Now we register our app with all the “Common” and “Component” type components (which include their own modules) and registered using .component(app, AppComponent) with our imported Component definition from the file app.component.js we showed right before this.

{% highlight javascript %}
// app.js
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';
import Common from './common/common';

const root = angular
  .module('app', [
    Components,
    Common,
    uiRouter
  ])
  .component('app', AppComponent);
export default root;
{% endhighlight %}


## Component module

Component module is the responsible for loading all the reusable components of the app. So this way in the Component module we import all the low level reusable components and as shown previously this module is imported directly in the root module.

It looks like something like the following :

{% highlight javascript %}
import angular from 'angular';
import Calendar from './calendar';
import Events from './events';
const components = angular
  .module('app.components', [
    Calendar,
    Events
  ])
  .name;
export default components;
{% endhighlight %}

So what is going on in there is we are importing first angular, then all our single lower level component modules like calendar, events and we register our module with all these lower level components as dependencies. We then export so that it can be imported in the root module.

## Common module

The common module is somewhat similar to the component module, the difference being here we are importing app specific component modules instead of reusable generic components. One of the reasons for this is we can easily pick components from the component module and place them in a different app, and know they should work without a problem because they are not specific to any app.

The common module looks like this :

{% highlight javascript %}
import angular from 'angular';
import Nav from './nav';
import Footer from './footer';
const common = angular
  .module('app.common', [
    Nav,
    Footer
  ])
  .name;
export default common;
{% endhighlight %}

Once again what we are doing here is first of all loading angular, then we load each of our single app specific module components and register them in a module that we call app.common. And export so that this can be imported up in the root module.

## Lower level modules

We saw earlier that each of these modules loads lower level component modules either in the Common module or the Component module. These lower level components contain their dependencies, routing definitions. An important note is to remember to add the **name** suffix when exporting a new module.

A simple component file could look like this for a Calendar Component. We import the component definition object from calendar.component.js like shown previously and register the module, component and set the routing definition in this file (index.js).

{% highlight javascript %}
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CalendarComponent from './calendar.component';
const calendar = angular
  .module('calendar', [
    uiRouter
  ])
  .component('calendar', CalendarComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        component: 'calendar'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
export default calendar;
{% endhighlight %}

## Naming conventions for files

But sometimes a lower level module contains directives, services and not only a component and we should follow a nice file naming pattern for these files.

Everything should be pretty simple and explicit, using the component name followed by name of the type of file. We then use the index.js to import these and put them all together in the module definition.

{% highlight javascript %}
index.js
calendar.controller.js
calendar.component.js
calendar.service.js
calendar.directive.js
calendar.filter.js
calendar.spec.js
{% endhighlight %}

## Controllers

Controllers should *ONLY* be used alongside components and not anywhere else. You should also use ES6 classes for controllers. [The styleguide controller topic](https://github.com/toddmotto/angular-styleguide#controllers) provides some good suggestion for using classes in the controllers including using the constructor for dependency injection, exporting only the name property and not the class itself, using arrow functions, taking advantage of the lifecycle hooks and more.

A controller class that injects a service will look something like this :

{% highlight javascript %}
/* ----- todo/todo.controller.js ----- */
class TodoController {
  constructor(TodoService) {
    this.todoService = TodoService;
  }
  $onInit() {
    this.newTodo = {
      title: '',
      selected: false
    };
    this.todos = [];
    this.todoService.getTodos.then(response => this.todos = response);
  }
  addTodo({ todo }) {
    if (!todo) return;
    this.todos.unshift(todo);
    this.newTodo = {
      title: '',
      selected: false
    };
  }
}
TodoController.$inject = ['TodoService'];
export default TodoController;
{% endhighlight %}


## One way data flow and Events

Angular 1.5 introduced one way data flow to allow for better communication between components. Again I would [refer to the styleguide](https://github.com/toddmotto/angular-styleguide#one-way-dataflow-and-events) for some good suggestions on this, but some of the key things here are :

*  always use one-way databinding syntax '<'
*  Components that have bindings should use $onChanges to clone the one-way binding data *  to break Objects passing by reference and updating the parent data
*  Use $event as a function argument in the parent method
*  Pass an $event: {} Object back up from a stateless component

## Stateful vs Stateless components

We should distinguish stateless from stateful components as it is an important definition in any component based architecture.

### Stateful components

Stateful components are components that fetch or get state in some form, normally through a service that is injected to them. This normally happens in the controller, a service is injected into the controller and some kind of communication happens. This makes this component normally what we called a “Common” module component as it is dependent of the app itself.

{% highlight javascript %}
/* ----- todo/todo.controller.js ----- */
class TodoController {
  constructor(TodoService) {
    this.todoService = TodoService;
  }
  $onInit() {
    …
    this.todoService.getTodos.then(response => this.todos = response);
    ….
  }
  addTodo({ todo }) {
    ...
  }
}

TodoController.$inject = ['TodoService'];

export default TodoController;
{% endhighlight %}

One important idea is that stateful components since they have to have this knowledge of data and data dependency, they should do exactly that and delegate the rendering to stateless components, so you should not use directives such as ng-repeat or things like that in this kind of components. Instead they get the data, and pass it down to child components that we will go through next.

# Stateless components

Stateless components on the other hand are what are also called “Dumb” components. They don’t know or care where data comes from or goes to. Data is passed to them, and they pass data out, ignorant of what that data does, where it comes from or where it goes to. This makes these components highly reusable and easy to test.

They use bindings to define inputs and outputs. Inputs is data that comes in through the form of attribute bindings and outputs is data that goes out through events.

{% highlight javascript %}
/* ----- todo/todo-form/todo-form.component.js ----- */
import controller from './todo-form.controller';

const TodoFormComponent = {
  bindings: {
    todo: '<',
    onAddTodo: '&'
  },
  controller,
  template: `
    <form name="todoForm" ng-submit="$ctrl.onSubmit();">
      <input type="text" ng-model="$ctrl.todo.title">
      <button type="submit">Submit</button>
    </form>
  `
};

export default TodoFormComponent;

/* ----- todo/todo-form/todo-form.controller.js ----- */
class TodoFormController {
  constructor(EventEmitter) {}
  $onChanges(changes) {
    if (changes.todo) {
      this.todo = Object.assign({}, this.todo);
    }
  }
  onSubmit() {
    if (!this.todo.title) return;
    // with EventEmitter wrapper
    this.onAddTodo(
      EventEmitter({
        todo: this.todo
      });
    );
    // without EventEmitter wrapper
    this.onAddTodo({
      $event: {
        todo: this.todo
      }
    });
  }
}

TodoFormController.$inject = ['EventEmitter'];

export default TodoFormController;

/* ----- todo/todo-form/index.js ----- */
import angular from 'angular';
import TodoFormComponent from './todo-form.component';

const todoForm = angular
  .module('todo.form', [])
  .component('todoForm', TodoFormComponent)
  .value('EventEmitter', payload => ({ $event: payload});

export default todoForm;

{% endhighlight %}

Some things to notice here. First of all the component fetches no state, it does not use service of any kind.

Data is passed to him through bindings, it then uses the $onChanges lifecycle hook to create a new instance for the todo binding to avoid reflection on the parent and instead only pass the data through the event *onAddTodo* avoiding any kind of automatic update (two way binding) in the parent.

It should be very explicit how the data is sent and the parent should be responsible for doing with that event what he intends to do with it.

## Directives

Just a quick word on directives. Components do not replace all types of directives. But they do replace a considerable amount of them in any Angular 1 app. We should think carefully on when to use a directive and also what to include in it now that Directives and Components provide similar things.

But essentially the idea is that directives should not declare templates and controllers anymore and they should also not receive data through bindings. They should be used only for manipulating the DOM by extending normal HTML created from components. So you should use it when you need custom DOM Events or API’s, and you should binding it to something inside a template of a component(). You should also always restrict it to “A” (Attribute) (like ng-repeat, ng-class etc do).


## Services

Services are basically where you wrap app logic that components should not have directly in them. It’s a way to abstract logic of rendering and presentation. You should use ES6 classes and always use .service() and not .factory() anymore, and use the $inject property together with it to inject dependencies like $http that are available through them.

Here is an example of a service class :

{% highlight javascript %}
/* ----- todo/todo.service.js ----- */
class TodoService {
  constructor($http) {
    this.$http = $http;
  }
  getTodos() {
    return this.$http.get('/api/todos').then(response => response.data);
  }
}

TodoService.$inject = ['$http'];

export default TodoService;

/* ----- todo/index.js ----- */
import angular from 'angular';
import TodoComponent from './todo.component';
import TodoService from './todo.service';

const todo = angular
  .module('todo', [])
  .component('todo', TodoComponent)
  .service('TodoService', TodoService)
  .name;

export default todo;

{% endhighlight %}

We essentially define our class with a constructor getting the external dependencies passed in and we define our methods that will be called from our controllers such as the getTodos() method here that simply does an http request to some API. We then import the service in the index.js file and register it there together with all the other parts of our module like component(), filters or any other things that compose our module.


## Wrapping things up

This is a very good approach to building solid apps with Angular 1. If you have an Angular 1 app, and you are expecting to maintain it for a large amount of time you should definitely consider this approach. It uses some of the most modern things in the Javascript specs like Classes, constants, and module imports and exports and some best practices like component based architecture and one way data flow and a lot of other good ideas like keeping a nice folder structure that really represents your app.

If you are or migrating to Angular 2 then I would say this is also a very good way to start thinking in Angular 2 way,  Classes, Components, Inputs, Output events are all concepts you will be seeing regularly in Angular 2 so it’s a good way to get familiar with them in a app you already know, your own.
