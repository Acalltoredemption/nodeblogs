const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
    {title: 'How to defeat Bowser', snippet: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
  ];
   res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
  //  res.send('<p>about page</p>');
  res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'Create'});
});


//404 page
app.use((req, res) => {
    res.status(404).render('404.ejs', {title: '404'});
})