---
title: "Drupal GraphQL with Contenta, Angular and Apollo Part 3 - Mutations"
summary: "Using Apollo Angular to perform GraphQL mutations on Contenta."
image: "/assets/images/posts/mutation.jpg"
tags: [web, angular, javascript, drupal]
---

{% include image.html path="posts/mutation.jpg" path-detail="posts/mutation.jpg" alt="mutation" %}

This is the continuation of a series of blog posts explaining how to use [Contenta](http://www.contentacms.org/) and [GraphQL](http://graphql.org/) with [Angular](https://angular.io/).

In the [previous post](/posts/drupal-graphql-with-angular-and-apollo-part2) we learned how to configure Authentication, perform [GraphQL](http://graphql.org/) queries and now we will see how to mutate data in our GraphQL backend using [Apollo Angular](https://github.com/apollographql/apollo-angular).

## Full code samples

The code samples can be found in Github. It includes all the frontend code and also the code for the custom mutations to be used with Drupal GraphQL.

[Frontend code](https://github.com/joaogarin/drupal-graphql-with-angular-and-apollo)
[Custom GraphQL mutation module](https://github.com/joaogarin/graphql_custom_mutations)

## GraphQL mutations

Mutations are the name for update / delete / create operations on a GraphQL backend. its how you create new data, perform changes on existing data or delete data from your server.

The [Drupal GraphQL module](https://github.com/drupal-graphql/graphql) allows us to create custom mutations fairly easily by creating small custom plugins to tell the GraphQL what to expect and how to handle those changes.

In this post we will be creating a module for our Client content type (see previous blog post) and we will be doing a create mutation in order to add new Clients to our backend.

## Creating the mutation module

We will be creating a custom module to handle our mutations for the "Client" content type. Once again :

For this example I will assume a content type called "Client" exists in the Drupal installation (just setup a content type with name Client, machine name should be client). Also this content type should have some fields created :

-  email
-  telephone

In your modules folder create a "custom" folder and inside it we are going to place our module inside, lets call it "graphql_custom_mutations". We start by adding its graphql_custom_mutations.info.yml file :

{% highlight yml %}
name: Custom graphql mutations
type: module
summary: A collection of custom GraphQL Mutations
core: 8.x
package: Custom
dependencies:
  - graphql
{% endhighlight %}

Lets now create our mutation plugin. Create the folder "Plugin" and inside a "GraphQL" folder to contain our mutation plugins.

Because GraphQL is a typed language we need to provide information about our Client and what kind of data our plugins will be receiving. We will create a folder "InputTypes" and inside place a file called ClientInput.php :

{% highlight php %}
<?php

namespace Drupal\graphql_custom_mutations\Plugin\GraphQL\InputTypes;

use Drupal\graphql\Plugin\GraphQL\InputTypes\InputTypePluginBase;

/**
 * Client input type.
 *
 * @GraphQLInputType(
 *   id = "client_input",
 *   name = "ClientInput",
 *   fields = {
 *     "title" = "String",
 *     "email" = "String",
 *   }
 * )
 */
class ClientInput extends InputTypePluginBase {

}
{% endhighlight %}

This file will be used by our Create Client mutation (will will get to it soon) and it will tell which data and type to expect. In our case the client has an id, a name and two fields which are the email and telephone fields we mentioned above. Both are of type ```String```.

Next we will do our mutations, let's make a folder inside our "Plugin/GraphQL" folder called "Mutations". Inside lets first place our Create Client mutation to handle creating a new client. Let's make a file called "AddClient.php" :

{% highlight php %}
<?php

namespace Drupal\graphql_custom_mutations\Plugin\GraphQL\Mutations;

use Drupal\graphql\Annotation\GraphQLMutation;
use Drupal\graphql\GraphQL\Type\InputObjectType;
use Drupal\graphql\Plugin\GraphQL\InputTypes\InputTypePluginBase;
use Drupal\graphql_core\Plugin\GraphQL\Mutations\Entity\CreateEntityBase;
use Youshido\GraphQL\Execution\ResolveInfo;

/**
 *  A Simple Client mutation.
 *
 * @GraphQLMutation(
 *   id = "add_client",
 *   entity_type = "node",
 *   entity_bundle = "client",
 *   secure = true,
 *   name = "addClient",
 *   type = "EntityCrudOutput",
 *   arguments = {
 *      "input" = "ClientInput"
 *   }
 * )
 */
class AddClient extends CreateEntityBase {

  /**
   * {@inheritdoc}
   */
  protected function extractEntityInput(array $inputArgs, InputObjectType $inputType, ResolveInfo $info) {
    return [
      'title' => $inputArgs['title'],
      'email' => $inputArgs['email']
    ];
  }
}
{% endhighlight %}

As we can see it uses our Input created above to know what kind of data the fields are, it also contains some information about itself like a name (mutation name), id, what kind of entity we are performing mutation on (node) and what bundle (Client).

we then create a function "extractEntityInput" that will simply return the data received, in this case we don't have to do anything to the data we simply return directly what we receive from the client.

lets now do another mutation for deleting a Client. This one is fairly simple as all we actually need is the id of the client to be delete. Add the file "DeleteClient.php" in the same folder as the CreateClient.php file :

{% highlight php %}
<?php

namespace Drupal\graphql_custom_mutations\Plugin\GraphQL\Mutations;


use Drupal\graphql\Annotation\GraphQLMutation;
use Drupal\graphql_core\Plugin\GraphQL\Mutations\Entity\DeleteEntityBase;


/**
 *  A Simple Client mutation.
 *
 * @GraphQLMutation(
 *   id = "delete_client",
 *   entity_type = "node",
 *   entity_bundle = "client",
 *   secure = true,
 *   name = "deleteClient",
 *   type = "EntityCrudOutput",
 *   arguments = {
 *     "id" = "Int"
 *   }
 * )
 */
class DeleteClient extends DeleteEntityBase {

}
{% endhighlight %}

Thats it!! we have a module that has a simple create and delete mutation, and we can move to Apollo in our Angular app to run this mutation.

## Performing mutations with Apollo

To handle adding a new client in our Angular app I will be creating a separate module for this. With the CLI run the following command :

{% highlight bash %}
ng generate component components/add-client
{% endhighlight %}

Lets now add this component to our root component (app.component.ts) so that it shows up in our app :

{% highlight html %}
...
<app-add-client></app-add-client>
...
{% endhighlight %}

Inside our add-client.component.ts file we can now add the appropriate methods to perform the mutation we created in our backend :

{% highlight javascript %}
import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const submitClient = gql`
mutation submitClient($title: String!, $email: String!) {
  addClient(input:{title:$title, email:$email}){
    entity{
      ...on NodeClient {
        nid
        title
        email
      }
    }
  }
}
`;

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  newClient() {
    this.apollo.mutate({
      mutation: submitClient,
      variables: {
        title: 'New Client',
        email: 'newClient@gmail.com',
      }
    }).subscribe(r => console.log(r), e => console.log(e), () => console.log('done'))
  }

  ngOnInit() {
  }
}

{% endhighlight %}

Lets see what we did here. We first created our graphql mutation, again wrapping it in a graphql-tag similar to how we did with queries. In our Drupal module our mutation had the name "addClient" so that's what we call here, but we have something here that's a bit different ```mutation submitClient($title: String!, $email: String!)```.

Because we are getting data from the app we normally want to pass it to the mutation itself, we do that using variables. $title and $email are variables that we pass to our mutation. When we call the mutation we pass them using the ```variables```parameter.

That's it, if authenticated with a user that has permissions to add Clients (see content type permissions) you should now see the new user in your backend.

### Mutations responses

Another great thing about GraphQL is being able to provide information on what exactly you wish to receive when doing mutations. If you look at the example above :

{% highlight javascript %}
mutation submitClient($title: String!, $email: String!) {
  addClient(input:{title:$title, email:$email}){
    entity{
      ...on NodeClient {
        nid
        title
        email
      }
    }
  }
}
{% endhighlight %}

We provide what we want to receive from the backend when the operation is finished, in this case we want to get the id of the newly created Client, their title and the email that was inserted. We could easily provide more fields or less fields making it super simple to make a controlled and logical flow while building the frontend.

### Delete mutations

Lets see how we can do a delete using the mutation we created in our custom module above. A delete mutation works exactly like any other mutation, except it has different parameters.

For this we will create a button next to each of our app's component where we list clients so that we can call a mutation to delete each row. First in our app.component.ts lets add the delete mutation and its method :

{% highlight javascript %}
...
export class AppComponent {
  ...
  removeClient = gql`
  mutation submitClient($identifier: Int!) {
  deleteClient(id:$identifier){
    entity{
      ...on NodeClient {
        nid
      }
    }
  }
}
`;
  ...
  deleteClient(id: number) {
    this.apollo.mutate({
      mutation: this.removeClient,
      variables: {
        identifier: parseInt(id.toString()),
      }
    }).subscribe(r => console.log(r), e => console.log(e), () => console.log('done'))
  }
...
}
{% endhighlight %}

As you can see its pretty much like the mutation for adding a client, except we provide only the id here. The Id must be a number(integer) or you will receive an error from GraphQL.

in the template for each client we are listing we then add a button to call the mutation:

{% highlight html %}
<ul>
  <li *ngFor="let client of clients | async">
    <div>
      Name: {{client.entityLabel}}
    </div>
    <div>
      Email: {{client.email}}
    </div>
    <div>
      Telephone: {{client.telephone}}
    </div>
    <div>
      <button (click)="deleteClient(client.entityId)">Delete me</button>
    </div>
  </li>
</ul>
{% endhighlight %}

Now for each client we can remove it by clicking the button "delete me" which will call the mutation with the right id.

## Wrapping things up.

Awesome!! We wave a fully functional [GraphQL](http://graphql.org/) backend served by [Drupal](https://drupal.org), where we had to configure close to nothing thanks to [Contenta](http://www.contentacms.org/).

I want to thank [Mateu Aguiló Bosch](https://twitter.com/e0ipso) for all the constant help in the Contenta slack channel and awesome work with the Contenta Simple auth module and documentation (awesome videos) and so much more that I dont have time to name all of it, all the contenta people in the Slack channel (they are too many to be named), [Sebastian Siemssen](https://twitter.com/thefubhy?lang=en) and [Philipp Melab](https://twitter.com/pmelab?lang=en) on the awesome work with the GraphQL module and help working through some issues with my authentication, and also [Justin Winter](https://twitter.com/Justinlwinter) for providing me with his [own sample of mutations](https://github.com/justinlevi/graphql_custom_mutation_react) that served as a basis for my own implementation.
