
//EJEMPLO1
// Res= resolve; Rej= Rejeect (Resulta, rechazado)
// const miPromesa=new Promise((res,rej)=>{
//     res(`Exito en la llamada de la promesa`);
//     rej(`Ocurrio un erro en el servidor`);

// });

// miPromesa.then((resultado)=>{
//     console.log(resultado);
// }, (error)=>{
//     console.log(`Error: ${error}`)
// });

//Ejemplo2. TRABAJAMOS CON EL ARCHIVO DENTRO DE MisModulos-Promesas.js y exportamos el archivo
const moduloPromesa=require(`./MisModulos/promesa.js`);
const miPromesa=moduloPromesa.dividir(15,0);
miPromesa.then((data)=>{
    console.log(data);
}, (error)=>{
    console.log(`Error: ${error}`);
});
