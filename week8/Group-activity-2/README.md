# Activity 2

Template engines enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.

We propose to use **handlebars.js**. There are two reasons why we have chosen _handlebars.js_:

- It uses _<html>_ as the language
- It is available on both the client and server side

## Getting the handlebars module for Express

Several Express modules exist for handlebars. We happen to like the one with the surprising name _express-handlebars_.

Create a new folder e.g. `task2`, and run the following commands:

```sh
npm init -y
npm i express
npm install express-handlebars
```

## Layouts

Most websites will consist of several pages, either static or dynamically generated ones. All these pages usually have common parts; a header and footer part, a navigation part or menu, and so on. This is the layout of our site. What distinguishes one page from another, usually, is some part in the body of the page where the home page has different information than the other pages. With _express-handlebars_, you can separate layout and content. We will start with a very simple example.

Inside the `task2` folder, create a folder, _views_, with a subdirectory layout. Inside the _layouts_ subfolder, create a file called _main.handlebars_. This is your default layout. Building on top of the previous example, have it say:

```handlebars
<html>
  <head>
    <title>Handlebars demo</title>
  </head>
  <link href='./styles/hello.css' rel='stylesheet' />
  <body>
    {{{body}}}
  </body>
</html>
```

Notice the _{{{body}}}_ part. This token will be replaced by HTML. Handlebars escapes HTML. If we want our HTML to stay intact, we use _{{{_ _}}}_, instead of _{{_ _}}_. Body is a reserved word for handlebars.

Create, in the folder _views_, a file called home.handlebars* with the following content. This will be one (of many) example of the HTML *{{{body}}}\_, which will be replaced by:

```handlebars
<h1>Hello, World</h1>
```

Let’s create a few more _john.handlebars_ with:

```handlebars
<h1>Hello, John</h1>
```

And _jane.handlebars_ containing:

```handlebars
<h1>Hello, Jane</h1>
```

### Our first handlebars example

Now, create a file, _app.js_, in the `task2` folder:

```js
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.set('port', process.env.PORT || 3000);

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
};

app.use(express.static(path.join(__dirname, 'public'), options));

app.get('/', function (req, res) {
  res.render('home'); // this is the important part
});

app.get('/john', function (req, res) {
  res.render('john');
});

app.get('/jane', function (req, res) {
  res.render('jane');
});

app.listen(app.get('port'), function () {
  console.log(
    'Hello express started on http://localhost:' +
      app.get('port') +
      '; press Ctrl-C to terminate.'
  );
});
```

If you type _http://localhost:3000/_, you will see a page with the layout from _main.handlebars_ and _{{{body}}}_ replaced by _Hello World_.

Let’s look at the new code. First, of course, we need to add a require statement for our _express-handlebars_ module, giving us an instance of express-handlebars. The next two lines specify what the _view_ engine is for this app and what the extension is that is used for the templates and layouts.

The _res.render_ calls determine which _views_ need to be rendered, so if you type _http:// localhost:3000/jane_, you will get _Hello, Jane_, rather than Hello World. But this is not at all useful, as in this implementation, you still have a separate file for each Hello flavor. Let’s create a true template instead.

## Templates

In the views folder, create a file, _town.handlebars_, with the following content:

```handlebars
{{! Our first template with tokens }}
<h1>Hello, {{town}}</h1>
```

Please note the comment line. This is the syntax for a handlebars comment. You could HTML comments as well, of course, but the advantage of using handlebars comments is that it will not show up in the final output.

Next, add this to your JavaScript file:

```js
app.get('/town', function (req, res) {
  res.render('town', { town: 'helsinki' });
});
```

Now, we have a template that we can use over and over again with different context, in this example, a different town name. All you have to do is pass a different second argument to the _res.render_ call, and _{{town}}_ in the template, will be replaced by the value of _town_ in the object. In general, what is passed as the second argument is referred to as the _context_.

## Helpers

The token can also be replaced by the output of a function. After all, this is JavaScript. In the context of handlebars, we call those **helpers**. You can write your own, or use some of the cool built-in ones, such as _#if_ and _#each_.

### if/else

Let us update _town.handlebars_ as follows:

```handlebars
{{#if town}}

  <h1>Hello, {{town}} </h1>
{{else}}
  <h1>Hello, World </h1>
{{/if}}
```

This should be self explanatory. If the variable town has a value, use it, if not, then show the world. Note that what comes after _#if_ can only be something that is either true of false, zero or not. The helper does not support a construct such as _#if x < y_.

### each

A very useful built-in helper is _#each_, which allows you to walk through an array of things and generate HTML accordingly. This is an example of the code that could be inside your app and the template you could use in your _view_ folder:

### app.js code snippet

```js
const data = {
  people: [
    {
      name: 'Adams',
      first: 'Ansel',
      profession: 'photographer',
      born: 'SanFrancisco',
    },

    {
      name: 'Muir',
      first: 'John',
      profession: 'naturalist',
      born: 'Scotland',
    },
    {
      name: 'Schwarzenegger',
      first: 'Arnold',
      profession: 'governator',
      born: 'Germany',
    },
    {
      name: 'Wellens',
      first: 'Paul',
      profession: 'author',
      born: 'Belgium',
    },
  ],
};
app.get('/californiapeople', function (req, res) {
  res.render('californiapeople', data);
});
```

### template (californiapeople.handlebars)

```handlebars
<table class='“cooltable”'>
  {{#each people}}
    <tr>
      <td>{{first}}</td>
      <td>{{name}}</td>
      <td>{{profession}}</td>
    </tr>
  {{/each}}
</table>
```

Now we are well on our way to do some true templating.

> Note: You can also write your own helpers.

## Partials

In web development, where you dynamically generate HTML to be part of a web page, it is often the case that you repetitively need to do the same thing, albeit on a different page.

There is a cool feature in `express-handlebars` that allows you to do that very same thing: **partials**. They are templates you can refer to inside a template, using a special syntax and drastically shortening your code that way. The partials are stored in a separate folder. By default, that would be `views/partials`, but you can even use subfolders.

Let’s redo the previous example but with a partial. So, our template is going to be extremely petite:

```handlebars
{{!-- people.handlebars inside views  --}}
{{> peoplepartial }}
```

Notice the _\>_ sign; this is what indicates a _partial_. Now, here is the familiar looking _partial_ template:

```handlebars
{{! peoplepartial.handlebars inside views/partials }}

<h1>Famous California people</h1>
<table>
  {{#each people}}
    <tr>
      <td>{{first}}</td>
      <td>{{name}}</td>
      <td>{{profession}}</td>
    </tr>
  {{/each}}
</table>
```

And, following is the JavaScript code that triggers it:

```js
app.get('/people', function (req, res) {
  res.render('people', californiapeople);
});
```

So, we give it the same context but the view that is rendered is ridiculously simplistic, as there is a partial underneath that will take care of everything. Of course, these were all examples to demonstrate how handlebars and Express can work together really well, nothing more than that.

## Ref

- [Practical Web Development](https://www.packtpub.com/product/practical-web-development/9781782175919)
