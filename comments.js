// Create web server
// 1. Create express object
// 2. Create web server
// 3. Run server

// 1. Create express object
const express = require('express');
const app = express();

// 2. Create web server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

// 3. Run server
// http://localhost:3000/comments
app.get('/comments', (req, res) => {
    res.send('<h1>Comments</h1>');
});

// http://localhost:3000/comments/1
app.get('/comments/1', (req, res) => {
    res.send('<h1>Comment 1</h1>');
});

// http://localhost:3000/comments/2
app.get('/comments/2', (req, res) => {
    res.send('<h1>Comment 2</h1>');
});

// http://localhost:3000/comments/3
app.get('/comments/3', (req, res) => {
    res.send('<h1>Comment 3</h1>');
});

// http://localhost:3000/comments/4
app.get('/comments/4', (req, res) => {
    res.send('<h1>Comment 4</h1>');
});

// http://localhost:3000/comments/5
app.get('/comments/5', (req, res) => {
    res.send('<h1>Comment 5</h1>');
});

// http://localhost:3000/comments/6
app.get('/comments/6', (req, res) => {
    res.send('<h1>Comment 6</h1>');
});

// http://localhost:3000/comments/7
app.get('/comments/7', (req, res) => {
    res.send('<h1>Comment 7</h1>');
});

// http://localhost:3000/comments/8
app.get('/comments/8', (req, res) => {
    res.send('<h1>Comment 8</h1>');
});

// http://localhost:3000/comments/9
app.get('/comments/9', (req, res) => {
    res.send('<h1>Comment 9</h1>');
});

// http://localhost:3000/comments/10
app.get('/comments/10', (req, res