var miPromesa= new Promise(
    //Recibe unn unico argumento
    //Funcion ejecutora (executor function)

function(resolve,reject){
    //Cuerpo de la funcion ejecutora
    var operacionExitosa=false;

    if(operacionExitosa){
        //Cambia al estado 'pending' a 'fulfilled' y entrega el valor
        resolve('Los datos se han procesado correctamente');
    } else {
        //Cambia al estado 'pending' a 'rejected' y entrega el motivo del fallo
        reject('Operación fallida');
    }
}
)

//then(): Registrar una funcion que se ejecutara cuando 
// la promesa se resuelva correctamente
//catch(): Registrar una funcion que se ejecutara cuando
// la promesa se rechace

miPromesa.then(function(mensajeRecibido){
    console.log("Resultado capturado en then" +mensajeRecibido);
    })
    
.catch(function(mensajeRecibido){
    console.log("Resultado capturado en catch" +mensajeRecibido);
});