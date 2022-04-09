
//FUNCIÓN WRITEFILE

//Importamos nuestro modulos
 const fs = require('fs');
const { json } = require('stream/consumers');

//prueba1
// fs.writeFile('data1.txt', 'Finca Zúniga', (error) => {
//     if (error) {
//         console.log(`Error: ${error}`);
//     }
// });

//FUNCIÓN READFILE -leer archivo

// fs.readFile('data1.txt',  (error, data) => {
//     if (!error) {
//         console.log(data);
//     } else {
//         console.log(`Error: ${error}`);
//     }
// });

//Agregando función UTF-8 PARA QUE SEA LEIBLE

// fs.readFile('data1.txt', `utf-8`, (error, data) => {
//     if (!error) {
//         console.log(data);
//     } else {
//         console.log(`Error: ${error}`);
//     }
// });

//FUNCIÓN RENAME -Renombrando archivo
 
// fs.rename(`data1.txt`, `datatierra.txt`, (error)=>{
//       if (!error) {
//      console.log("Renombrado!");
//      } else {
//             console.log(`Error: ${error}`);
//         }
// });

//FUNCIÓN APPENFILE -AGREGANDO DATOS

// fs.appendFile(`data1.txt`,`\nBienvenido, amigos!`, (error)=>{
//     if(!error){
//         console.log("Contenido agregado!")
//     }else{
//         console.log(`Error: ${error}`);
//     }

// });

//FUNCIÓN CreateReadStream -Creando una copia mediante la función pipe
// fs.createReadStream(`datatierra.txt`).pipe(fs.createWriteStream(`datatierra_bu.txt`), (error)=>{
//     if(!error){
//         console.log("Se ha creado la copia exitosamente!")
//     }else{
//         console.log(`Error: ${error}`); 
//     }
// } );

//FUNCIÓN unlink  -Eliminar archivo
// fs.unlink(`datatierra_bu.txt`,  (error)=>{
//  if(!error){
//      console.log("Tu archivo se ha borrado exitosamente");
//  }else{
//     console.log(`Error: ${error}`); 
//  }
// });

//FUNCIÓN   -Leer todos los archivos de un directorio --!Leer todo lo que esta en   Curso NodeJS
fs.readdir(`./`, (error,archivos)=>{
    archivos.forEach(archivo=>{
        console.log(archivo);
    });
});

