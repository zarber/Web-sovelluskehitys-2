const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const options = {
  layoutsDir: 'views/layouts/',
  defaultLayout: 'main',
  partialsDir: 'views/partials/',
  helpers: require('./lib/helpers.js'),
};

app.engine('handlebars', engine(options));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
  });
});

app.get('/yell', (req, res) => {
  res.render('yell', {
    title: 'Yell',

    // This `message` will be transformed by our `yell()` helper.
    message: 'hello world',
  });
});

app.get('/exclaim', (req, res) => {
  res.render('yell', {
    title: 'Exclaim',
    message: 'hello world',

    // This overrides the default `yell()` helper.
    helpers: {
      yell(msg) {
        return msg + '!!!';
      },
    },
  });
});

app.get('/echo/:message?', (req, res) => {
  res.render('echo', {
    title: 'Echo',
    message: req.params.message,

    // Overrides which layout to use, instead of the defaul "main" layout.
    layout: 'shared-templates',
  });
});

app.use(express.static('public/'));

app.listen(3000, () => {
  console.log('express-handlebars example server listening on: 3000');
});
