TypeScrip - JavaScrip
Proporcionan interactividad a la pagina web y moviles

TypeScrip -> se Traspila a Javascrip
JavaScrip Posee un motor o modelo de ejecucion en donde se ejucta el codigo

Transpilar: Conversio  de codigo fuente de un lenguaje de alto nivel a otro, a mismo nivel de abstraccion

El modelo de ejecusion de js es un solo hilo principal
(Single-threaded): Solo se ejecuta una instruccion a la vez en su hilo principal

Operaciones Sincronas: Las tareas se ejecutan una tras otra.
Operaciones asincronas: Una tarea se inicia ahora, pero cuyo resultado se obtendra en el futuro.

Call Stack, Calbback Queue y Mricrotask Queue, Entorno y Event Loop (Bucle de Eventos)

01. CallBack (Llamada de Retorno): Es una funcion que se pasa a otra como argymento
con la intension de que la funcion receptora la invoque en algun momento de su propio cuerpo.

1. Declarar una funcion: Definimos que hace, pero aun no se ejecuta

2. Invocar una funcion: Usamos parentesis para que corra AHORA MISMO.

3. Pasar como ARGUMENTO una funcion: Usamos el nombre de la funcion pero sin parentesis, ya que la entrgamos a otra funcion para que ella decida cuando usarla.

ECMAScrip (ES6) 2015
promesas(promise)
Es un objeto propio de JS, que representa la eventual finalizacion(con un exito o un fracaso) de uns operacion asincrona y su valor resultante (Puede ser una promesa)

1. pendiente (pending)
2. cumplida (fulfilled)
3. rechazada (rejected)

1. Crear promesas: new Promise()
2. Consumir promesas: .then(), catch(),finally()