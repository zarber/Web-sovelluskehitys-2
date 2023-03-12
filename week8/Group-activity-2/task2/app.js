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

app.get('/arber', function (req, res) {
  res.render('arber');
});

app.get('/town', function (req, res) {
  res.render('town', { town: 'helsinki' });
});

app.get('/people', function (req, res) {
  res.render('people', californiapeople);
});

app.listen(app.get('port'), function () {
  console.log(
    'Hello express started on http://localhost:' +
      app.get('port') +
      '; press Ctrl-C to terminate.'
  );
});

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