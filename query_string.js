const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const host = '127.0.0.1';
const port = 8083;


const routes = {
    '/': (request, response) => {
        response.statusCode = 200;
        response.writeHead(200);
        response.end("Hola mundo! desde 'index' - end().");
    },
};

const server = http.createServer((request, response) => {
   let miURL=new URL(`http://${host}:${request.url}`);
   /*
   console.log(miURL);
   console.log(miURL.hash);
   console.log(miURL.host);
   console.log(miURL.hostname);
   console.log(miURL.href);
   console.log(miURL.origin);
   console.log(miURL.pathname);
   console.log(miURL.port);
   console.log(miURL.search);
   */
  miURL.searchParams.forEach((valor,nombre)=>{
    //console.log(`Nombre: ${nombre} | Valor: ${valor}`);
  });

    console.log(miURL.searchParams.get('nombre'));
    console.log(miURL.searchParams.getAll('nombre'));
    console.log(miURL.searchParams.has('sueldo'));
    console.log(miURL.searchParams.entries());
    console.log(miURL.searchParams.keys());
    console.log(miURL.searchParams.values());
    console.log(miURL.searchParams.toString());

    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});

server.listen(port, host, () => {
    console.log(`Server is running on: http://${host}:${port}`);
});