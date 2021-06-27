---
title: "Whats coming with Angular 2"
summary: "Angular is one of the most if not the most popular javascript front end frameworks around, and its version 2.0 is comming out"
image: "/assets/images/posts/ang.jpg"
tags: [web, angular, javascript]
---

{% include image.html path="posts/ang.jpg" path-detail="posts/ang.jpg" alt="Angularjs components" %}

Angular is one of the most if not the most popular javascript front end frameworks around, and its version 2.0 is comming out with some major changes and complete rewrite of the framework including increased performance and a lot of new features.

Angular 2 was first announced in Paris at the [ng-europe conference](http://ngeurope.org/) and it caused quite a sensation after anouncing that a lof of the things from angular 1 would be "killed" like controllers or scope.

## Why a new version

The reason for a new version of angular and the complete rewrite has multiple parts to it. Partially because there are a lof of things that where not going in the right direction in angular1, react and other frameworks exposed that in some way like the performance issue with the way change detection was being done in Angular1 or the way that it was not leveraging new tools and ES6, the new version of Javascript.

But lets take the steps and analyze each of these things.

### Mobile

On of the things Angular2 focuses on is making sure that mobile is a first target and not just something that "works". This meand improving perfomance drastically as well as making sure animations are smooth and integration with tools like ionic are on the edge of mobile. By the way the Ionic team is working closely with the angular team to develop angular2 and they actualy released a [alpha version of Ionic2](http://ionic.io/2) running on Angular 2 already.

### A more modular Angular

Another of the challenges of the Angular team for Angular2 is making sure the size of the framework is smaller. Aming at less than 70K. For this a lot of the modules where removed from the core and they are integrated as you need them. This is great  because for simple apps where you dont need as much you dont have to pack things that are really not necessary making loading time smaller and increasing performance.

### A more modern Angular

Like mentioned before one of the key things right now is making sure Angular leverages all the features of ES6, as well as targeting modern browsers making sure that making hacks and workarounds for basic things dont have to be done by developers and possibly can be handled by the framework itself.

## What are then the changes that we can expect on Angular ?

So lets dig in into the changes that Angular2 will bring to the table and how good / challenging they can be for us developers.

### AtScript (Extending Microsoft's TypeScript)

In October 2014 the angular team announced they would be extending and using Microsoft. AtScript is a superset of ES6 and its being used to develop Angular2\. Its processed by [Traceur ](https://github.com/google/traceur-compiler)to produce ES5 script. However in Angular2 you are not forced to use AtScript to run your application. You can still use ES5 Javascript or Dart to develop your app, so in this case its actually quite flexible.

### Improved Dependency injection

Dependency injection is a design pattern where an object is passed its dependencies instead of assigning them himself was one of the key points and a big differentiator in Angular1\. But in Angular1 DI was full of problems and these problems are now being addressed in Angular2 as well as improving with some additional features like child injectors or lifetime/scope controll.

### Templating

In Angular2 templating processing changes quite a lot. As the code is based on the ES6 module spec, the module loader will load dependencies by simply referencing them in the component definition.

### Directives 

In Angular2 there are 3 types of directives.

*   **Component directives** - They create reusable components by encapsulating Javascript logic , HTML and optinally some CSS (or a stylesheet).
*   **Decorator directives** - These directives are used to decorate elements like adding tooltips or showing / hiding elements (using ng-show / ng-hide)
*   **Template directives** - Examples of these directives are ng-if and ng-repeat. They will turn HTML into a reusable template. The instantiating of the template and its insertion into the DOM can be fully controlled by the directive author.

### The new Router

Angular2 includes what is known in the angular community as the "new router" by default. It is a much more flexbile and powerfull routing solution as oposed to the first router included in Angular1\. Altough this router is included by default in Angular2 it can also be used in Angular1 (from angular 1.4 forward).

It includes the following features :

*   Simple JSON-based Route Config
*   Optional Convention over Configuration
*   Static, Parameterized and Splat Route Patterns
*   URL Resolver
*   Query String Support
*   Use Push State or Hashchange
*   Navigation Model (For Generating a Navigation UI)
*   Document Title Updates
*   404 Route Handling
*   Location Service
*   History Manipulation

## Concluding 

Angular2 will come with a pack of new features, focused on support for ES6 features and modern web browsers, new router, increase performance and of course a component driven approach to how web apps will be built.

While angular1 will stay for a long time, as there is not even a release date to angular2, it is good to keep an eye on what will be a new dawn for the angular community and a lot of the community is already making plans on how to upgrade apps to angular 2 and start using it right away.

A full detail on the progress and plan into Angular2 first betas can be found here : [https://github.com/angular/angular/milestones](https://github.com/angular/angular/milestones)
