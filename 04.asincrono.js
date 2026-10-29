//setTimeOut()
function notificardescarga(nombreArchivo){
    console.log("02. Notificación: El archivo"
        + nombreArchivo+
        "se ha descargado correctamente",

    );
}
function descargarArchivo(archivo,callbackAlTerminar){
    console.log('01. Iniciando descarga de: "+archivo + "...');
    //Simulamos una demora de 3 segundos (3000 milisegundos)
     setTimeout(function(){ 
callbackAlTerminar(archivo);
    }, 5000);

}
descargarArchivo("manual_callbacks.pdf",notificardescarga);
console.log("03. El usuario puede seguir navegando por la pagina mientras se descarga");