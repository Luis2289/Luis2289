const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 8083;


const routes = {
    '/': (request, response) => {
        response.statusCode = 200;
        response.writeHead(200);
        response.end("Hola mundo! desde 'index' - end().");
    },
    '/json': (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.writeHead(200);
        let objeto = {
            "Nombre": "Luis Zúniga",
            "edad": 20,
            "cursos": ["C", "C++", "JavaScript", "Node.js", "C#", "HTML-CSS"]
        }
        response.end(JSON.stringify(objeto));
    },
    '/html': (request, response) => {
        let archivoHTML = fs.readFileSync(__dirname + "/contenido.html");
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        response.end(archivoHTML);
    },
    '/csv': (request, response) => {
        response.setHeader('Content-Type', 'text/csv');
        response.setHeader('Content-Disposition', 'attachment;filename=información.csv');
        response.writeHead(200);
        response.end('codigo,nombre,email\n123,Luis Zúniga,luiscarloszuniga30@gmail.com');
    }
};



const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);

    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});

server.listen(port, host, () => {
    console.log(`Server is running on: http://${host}:${port}`);
});