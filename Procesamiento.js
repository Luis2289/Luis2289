const fs=require('fs');
//JavaScript tiene un procesamiento asincrono, independiemente de que nosostros
//le demos orden en el codigo, cada proceso tiene un tiempo 
//Se imprime inicio, fin y hasta luego el codigo de fs

//procesamiento asincrono, no respeta el orden de ejecución
// console.log("Incio");
// fs.readFile(`datatierra.txt`,`utf-8`, (error,data)=>{
//     if(!error){
//         console.log(data);
//     }else{
//         console.log(`Error: ${error}`);
//     }
// });
// console.log("Fin");

//Eliminando procesamiento asincrono, procesamiento Sincrono
console.log("Inicio");
const miData=fs.readFileSync(`datatierra.txt`,`utf-8`);
console.log(miData);
console.log("Fin");
