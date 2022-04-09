const os=require('os');

//Prueba1
let cpu=os.cpus();
//console.log(cpu);

let sistema=os.platform();
console.log(sistema);

let usurio=os.hostname();
console.log(usurio);

let arquitectura=os.arch();
console.log(arquitectura);