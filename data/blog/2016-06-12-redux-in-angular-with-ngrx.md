---
title: "Redux in angular with ngrx"
summary: "Redux, Mobx, RxJs, ngRx. These are some of the most common ways to handle state management in today’s Javascript modern applications."
image: "/assets/images/posts/ocean.jpg"
tags: [web, angular, javascript]
---

{% include image.html path="posts/ocean.jpg" path-detail="posts/ocean.jpg" alt="Ocean" %}

Redux, Mobx, RxJs, ngRx. These are some of the most common ways to handle state management in today’s Javascript modern applications.

These are some great tools that solve a common problem on how you handle different parts of your application that “care” about some part of the application state. That can be a header component that is showing a value of a total of sales that gets calculated somewhere else in the app or a user picture that gets changed and needs to be updated in the sidebar component.

But communities are just going at this from all these different aspects and going from one to the next “state management solution” without any of these even be in a stable version yet. This constitutes a serious problem where developers just can’t rely on a solution being the right fit for their application.

Not without trying them first at least. And this is an important aspect in my opinion. Because the community can’t agree on a solution that is common and stable for everyone across frameworks or architectures, the only way to really know what is good for **you** is to try them out. It’s probably very hard to try all of them, but you can try one or two and see what it feels like and because “Javascript is choose your own adventure” you should trust yourself, and roll with it as much as possible, or you will end up never really getting your product out the door.

One good thing about state management solutions and especially these ones is they follow loosely the same patterns, so replacing one for another is not as a complex task as you might think. You should build your application in a way that refactor is possible and encouraged anyway so this would be mostly straightforward to do.

But in this blog post I would like to explore ngRx, the solution that has been largely discussed in the Angular community that uses Observables and rxJs, kind of a combination of Redux with rxJs for Angular.

## Personal opinion on the matter and “State management fatigue”

Before I get into ngRx I would just like to say that I don’t enjoy this kind of rollercoaster of everyone trying to solve the same problem separately and having their own variations of a solution just for the sake of having more stars on a github repo.

I know I am exaggerating a little on this statement and people do believe their solution is legit and solves the problem in an innovative and “better” way, but this is not good for the ecosystem and more collaboration and sharing of ideas would benefit everyone.

So the ideal solution for me would be something that although maybe not too coupled to any specific framework just works well on all, and can benefit from input of everyone and people can be confident their are making the right choice, and also they can easily move from framework x for y without having to learn new things like “how to deal with state in react / angular”. It’s the same exact problem, should have the same exact solution.

## ngRx

ngRx is a collection of several extensions built specifically for the Angular platform, it includes things like Router, DevTools, Effects and also a store module which we will discuss here.

## ngRx store

ngRx store is a part of the ngRx extensions for state management. It follows redux practices and paradigms but is based on observables using rxJs. The difference to redux is that instead of taking the imperative approach of reading and dealing with store you use a reactive approach.

What this means is that instead of subscribing to the whole store as you typically do in redux and then imperatively deal with the part of the store you want for that part of the app, you can subscribe to parts of the store and the come as an observable and then you reactively deal with the data that comes in using rxJs operators like map,filter etc..

In Redux :

{% highlight javascript %}
store.subscribe(() =>
  console.log(store.getState())
)
{% endhighlight %}

Although a view binding would probably be used when using [redux with react](https://github.com/reactjs/react-redux) but still if you need to manipulate that value you would do it imperatively

ngRx :

{% highlight javascript %}
this.counter = store.select('counter');
{% endhighlight %}

Which means you are subscribing directly to a specific item in your store which is really usefull, and because this is an observable you can use the Angular [async pipe](https://angular.io/docs/ts/latest/guide/pipes.html#async-pipe)

In your template this would simply look like this :

{% highlight javascript %}
...
@Component({
    selector: 'my-app',
    template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
    `
})
...
{% endhighlight %}

## Effects

NgRx also comes with some redux saga-like implementation and that can be found in [ngRx Effects](https://github.com/ngrx/effects)

In ngRx effects you can orchestrate and manage complex asynchronous operations such as as login or other things that happen on an async bases. This makes testing for asyncronous actions a lot easier and it can look like this :


{% highlight javascript %}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { StateUpdates, Effect } from '@ngrx/effects'

@Injectable()
export class AuthEffects {
  constructor(private http: Http, private updates$: StateUpdates<any>) { }

  @Effect() login$ = this.updates$
      // Listen for the 'LOGIN' action
      .whenAction('LOGIN')
      // Map the payload into JSON to use as the request body
      .map(update => JSON.stringify(update.action.payload))
      .switchMap(payload => this.http.post('/auth', payload)
        // If successful, dispatch success action with result
        .map(res => ({ type: 'LOGIN_SUCCESS', payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: 'LOGIN_FAILED' }));
      );
}
{% endhighlight %}

And to test this service you could write something like :

{% highlight javascript %}
import {
  MOCK_EFFECTS_PROVIDERS,
  MockStateUpdates
} from '@ngrx/effects/testing';

describe('Auth Effects', function() {
  let auth: AuthEffects;
  let updates$: MockStateUpdates;

  beforeEach(function() {
    const injector = ReflectiveInjector.resolveAndCreate([
      AuthEffects,
      MOCK_EFFECTS_PROVIDERS,
      // Mock out other dependencies (like Http) here
    ]);

    auth = injector.get(AuthEffects);
    updates$ = injector.get(MockStateUpdates);
  });

  it('should respond in a certain way', function() {
    // Add an action in the updates queue
    updates$.sendAction({ type: 'LOGIN', payload: { ... } });

    auth.login$.subscribe(function(action) {
      /* assert here */
    });
  });
});
{% endhighlight %}

## Wrapping up

ngRx seems to be converging into the common way of doing state management in Angular2. Currently there are still a lot of people using Redux as well. For me personally I started with Redux with Angular2 and when I started to get a bit of a better grasp of the whole rxjs reactive approach ngRx seems like the right fit really. So for Angular2 projects I would definitely recommend you try it out, and see if it fits your style of work, there is also a great tool for [redux with angular2](https://github.com/angular-redux/ng2-redux) in the case you want to stay closer to the pure Redux approach.

The maintainer of Redux [Dan Abramov](https://twitter.com/dan_abramov) is advocating a lot Mobx as a better solution than redux itself and saying you should even [try it out in your next react project](https://twitter.com/dan_abramov/status/703649627065679872). So although I would say Redux is a really great project we really don’t know what is going to come out of all of this. Maybe redux and Mobx join forces and provide a converged solution that suits both sides. In that case it would be nice to see the Angular community join forces with react fokes as well and work on a converged approach to this.

But on a note I agree with Dan Abramov on this, you should try these things and not take for granted that a solution people say it’s the best is actually the best for you. Whatever makes you happier about what you are doing should be enough for you to go with it. So go and play, and have fun!
