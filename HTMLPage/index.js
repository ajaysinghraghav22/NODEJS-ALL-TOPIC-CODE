const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname, 'files');
// app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.get('/homepage', (req, res) => {
    res.sendFile(`${publicPath}/homepage.html`);
})

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/profile', (req, res) => {
    res.render('profile');
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/error.html`);
})

app.listen(5000)