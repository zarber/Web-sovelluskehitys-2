# Activity 1

## Installation

Create a new folder e.g. `task1`, and run the following commands:

```sh
npm init -y
npm install express express-handlebars
```

## Basic Usage

**Directory Structure:**

```
.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars
```

**app.js:**

Creates a super simple Express app which shows the basic way to register a Handlebars view engine using this package.

```javascript
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000);
```

**views/layouts/main.handlebars:**

The main layout is the HTML page wrapper which can be reused for the different views of the app. `{{{body}}}` is used as a placeholder for where the main content should be rendered.

```handlebars
<html>
  <head>
    <meta charset='utf-8' />
    <title>Example App</title>
  </head>
  <body>

    {{{body}}}

  </body>
</html>
```

**views/home.handlebars:**

The content for the app's home view which will be rendered into the layout's `{{{body}}}`.

```handlebars
<h1>Example App: Home</h1>
```

## Running the Example

```shell
$ cd task1
$ node app.js
```
