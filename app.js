const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const req = require('express/lib/request');
const { render } = require('express/lib/response');

const blogRoutes = require('./routes/blogRoutes');
//Connect to MongoDB
const dbURI = 'mongodb+srv://Stino:kkkkkkk7@cluster0.oy23c.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//blog routes
app.use(blogRoutes);



app.get('/about', (req, res) => {
  //  res.send('<p>about page</p>');
  res.render('about', {title: 'About'});
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});



//404 page
app.use((req, res) => {
    res.status(404).render('404.ejs', {title: '404'});
})