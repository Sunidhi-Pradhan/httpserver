const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New Req Res");
    console.log("Hello from server");
});

myServer.listen(8000, ()=>console.log('Server started') );