//import http module                                             ctrl+c in terminal pt a da stop la sv
const http = require("http");

//create server
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.write("Hello from node server ...")
    res.end();
})

//listen on port 3000
server.listen(3000,()=>console.log("Server is running on port 3000..."))


//altele
// npm express docs: https://www.npmjs.com/package/express

