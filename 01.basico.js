//Definir la funcion que servira como callback
function despedirse(){
    console.log("adios hemos terminado la clase");
}

//Declaramos la funcion principal que recibe un parametro

function iniciarProceso(myCallBack){
    console.log('Iniciando el proceso principal...')

    //Invocamos la funcionn que recibimos como argumento

myCallBack();

}

//Llamamnos a la funcion principal pasando 'despedirse' SIN parentesis

iniciarProceso(despedirse);

