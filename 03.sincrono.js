function duplicarNumero(numero){
    console.log('Resultado duplicado:'+ (numero*2))
}
function procesarLista(listaNumeros,accionCallback){
    console.log('--- Inicio del procedimiento de la lista---')
    for (var i=0; i<listaNumeros.length;i++){
        accionCallback(listaNumeros[i]);
    }
    console.log("---Fin del procedimiento de la lista---");
}
var listaNumeros=[5,10,15,20,25,30,35,40]
procesarLista(listaNumeros,duplicarNumero)
console.log("Siguiente instrucción del programa");