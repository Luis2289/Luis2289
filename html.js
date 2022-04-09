const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (request,response){
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end(`<html><body><h1>TESTING SIBAGRO</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});