const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();


// Securing data with dotenv
dotenv.config({ path: '../config.env' });
const PORT = process.env.PORT || 8000;


// Database 
require('./db/connect');
// const User = require('./models/userSchema');
 

// Middelwares
const middleware = (req, res, next) => {
    console.log('Middleware running');
    next();
}

// Linked router file to app.js to make our route painless and clean
// The app. use() method mounts or puts the specified middleware functions at the specified path.
app.use(express.json());
app.use(require('./router/auth'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello world from the server');
});

app.get('/about', middleware, (req, res) => {
    console.log('About page served');
    res.send('Hello about world from the server');
});

app.get('/contact', (req, res) => {
    res.send('Hello contact world from the server');
});

app.get('/signin', (req, res) => {
    res.send('Hello login world from the server');
});

app.get('/signup', (req, res) => {
    res.send('Hello registration world from the server');
});


// Server production assests
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Listen
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})