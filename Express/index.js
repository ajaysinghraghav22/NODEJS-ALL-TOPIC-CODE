
const http = require("http");
const express =require("express")

const app= express();//basically it is a handler function
app.get('/', (req ,res)=>{
    return res.send("hello from home page \n");
})
app.get('/about', (req, res)=>{
    return res.send("hello from about page "+ " hey " + req.query.name + "and your age is " + req.query.age);
    })

app.listen(8000, () => {

    console.log('server stared!\n');
});