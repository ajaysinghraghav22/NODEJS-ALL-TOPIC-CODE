// const fs = require("fs");
// const read = fs.readFileSync("context.txt", "utf-8");
// console.log(read)

const fs = require("fs");

const https = require("http");
const myserver = https.createServer((req, res) => {
    console.log("Received request")
    // if (req.http === 'favicon.ico') return res.render();
    const log = `${Date.now()} , ${req.url}: new Req Receivied \n`
    fs.appendFile('log.txt', log, (err, data) => {
        res.end('Hello, World!\n');
    })
    switch(req.url){
        case '/':
            res.end('it is a homepage');
            break;
            case'/about':
            res.end('ajaysingh');
            break;
            default :
            res.end(' page not found');
    }

});
//ab humko server ko run krne ki liye port number ki need hogi


myserver.listen(8080, () => {
    console.log('server stared!\n');
});