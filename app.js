const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({ extname: 'hbs' }));

app.get('/', (req, res) => {
  res.render('home', { cssFileName: 'home', pageTitle: 'Домашняя страница' });
});

app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about', pageTitle: 'О нас' });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    pageTitle: 'Продкты',
  });
});

app.listen(4444, () => {
  console.log('Hello my dear friend');
});
