const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (request, response) {
    response.setHeader("Content-Type", "text/docx");
    response.setHeader("Content-Disposition", "attachment;filename=test.docx");
    response.writeHead(200);
    response.end(`Dirección,Nombre,email\n1, Residencial Los Cocos,Luis Zúniga,luis@gmail.com, Samuel ELIAS!!!!!!!!!!!`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});