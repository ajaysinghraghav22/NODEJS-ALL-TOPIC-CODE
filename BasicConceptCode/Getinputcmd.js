// console.log("Starting")
// console.log(process.argv[2])

const fs = require("fs")
const input = process.argv;
fs.writeFileSync(input[2],input[3]);
//if we want remove and add
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input: " )
}