const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) =>{
    // console.log(req.headers);
    const log = `${Date.now()}: ${req.url}New req rec\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        console.log("Hello from server");
    });
    
});

myServer.listen(3000, ()=>console.log('Server started') );