
const fs = require("fs");
const url = require("url");
const http = require("http");
const myserver = http.createServer((req, res) => {
    console.log("Received request")
    if (req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.method}: ${req.url}: new Req Receivied \n`
    const myurl = url.parse(req.url, true);
    // console.log(myurl);
    fs.appendFile('log.txt', log, (err, data) => {
        switch (myurl.pathname) {
            case '/':
                res.end('it is a homepage');
                break;
            case '/about':
                const username = myurl.query.myname
                res.end(`hi ${username}`);
                break;
            default:
                res.end('page not found');
        }
    })
});

myserver.listen(8000, () => {
    console.log('server stared!\n');
});