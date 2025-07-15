const { json } = require('body-parser');
const data =require('./data')
const http = require('http');
// const PORT = 8000;
const server = http.createServer((req, res) => {
   res.write(JSON.stringify(data))
    res.end()
}).listen(8000);