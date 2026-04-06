const http = require('http')

const server = http.createServer((request, response) => {
    console.log("Done...");
    response.end('Hello This is coming from Node.js Server')

})

server.listen(3000);