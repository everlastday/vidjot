const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev', {
    useNewUrlParser: true
}).then(() => {
    console.log('MongoDB Connected...');
}).catch(err => console.log(err));

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// How middleware works
app.use((req, res, next) => {
    //console.log(Date.now());
    req.name = 'Roman Solovka';
    next();
});

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcomes';
    res.render('index', {
        title
    });
});

// About Route
app.get('/about', (req, res) => {
    res.render('about');
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});