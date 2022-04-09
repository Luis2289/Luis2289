const dividir =(n1,n2)=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(parseInt(n2)==0){
                rej(`No se puede divir entre 0`)
            }else{
                const resultado=n1/n2
                res(resultado);
            }

        }, 3000);
    });
};

module.exports={
    dividir
};