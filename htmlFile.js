const http = require("http");
const fs= require ('fs').promises;


const host = 'localhost';
const port = 8000;

let indexFile;
const requestListener = function (request, response) {
    response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });



    
