
//Prueba2
const Finca="Finca Zúniga";


//prueba1
function sumar (n1,n2){
    return n1+n2;
}

function restar (n1,n2){
    return n1-n2;
}

function multiplicar (n1,n2){
    return n1*n2;
}

function dividir (n1,n2){
    return n1/n2;
}

//Exponemos esta funcionalidad para que pueda ser utilizada en otro archivos y podamos trabajar con ella en particular
//prueba1
//module.exports.sumar=sumar;

//prueba2
//module.exports.place=Finca;

//prueba3 exportar varias funcionalidades y constantes a vez, se hace mediante un objeto
module.exports={
    place:Finca,
    sumar:sumar,
    restar:restar,
    multiplicar:multiplicar,
    dividir:dividir
};