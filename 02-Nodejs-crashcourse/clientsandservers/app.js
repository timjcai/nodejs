const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://tester:adsfkj129hfkjasdf0123ug@cluster0.jqvaast.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });

  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
})

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about', {title: 'About'});
});

app.get('/blog', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('blog', {title: 'Blog'});
});

app.get('/contact', (req, res) => {
  // res.send('<p>contact page</p>');
  res.render('contact-me', {title: 'Contact'});
});

//  redirects
app.get('about-us', (req, res) => {
  res.redirect('/about');
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {title: '404 error'});

})
