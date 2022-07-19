const express = require('express');

const app = express();

//middleware
app.use('/posts', () =>{
    console.log('This is a middleware running');
});

//Routes
app.get('/', (red,res) =>{
    res.send('we are on home');
});
app.get('/posts', (red,res) =>{
    res.send('we are on posts');
});

//Listening to the server
app.listen(3000);
