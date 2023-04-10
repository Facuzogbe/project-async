
// En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje

// La función deberá recibir dos parámetros:

// time: el tiempo de espera
// message: el mensaje que debe imprimir después del tiempo de espera
// La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.

// Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

// window.setTimeout(() => {
//   // code
// })

// Ejemplo 1:

// Input:
// delay(2000, "Hello after 2s")
// .then((message) => console.log(message))

// Output:
// // after 2s
// "Hello after 2s"

// Ejemplo 2:

// Input:
// delay(3000, "Hello after 3s")
// .then((message) => console.log(message))

// Output:
// // after 3s
// "Hello after 3s"


/// funcion delay. recibe 2 parametros
/// time y message, despues crea una
/// new Promise que la guarda en la constante pro
/// hace una pequeña verificacion para que el tiempo sea
/// mayor a cero , si se cumple resuelve mostrando el valor de message
/// sino se cumple sera rechaza lanzando que time  no puede ser negativo.


//explicacion

///se define una función llamada "delay"
// que crea una promesa que se resolverá después de un tiempo.
// La función toma dos argumentos: "time" y "message". "time"
// representa el tiempo en milisegundos que se debe esperar 
// antes de que la promesa se resuelva y "message" es el mensaje
// que se debe pasar cuando la promesa se resuelva.

// Si el tiempo es mayor o igual a cero, se crea una nueva promesa
// y se establece un temporizador que se ejecutará 
// después del tiempo especificado. Cuando el temporizador se completa,
// la promesa se resuelve con el mensaje pasado como argumento a la función "resolve".
// Si el tiempo es negativo, se rechaza la promesa con un mensaje de error.
// Por lo tanto, cuando llame a la función "delay", obtendrá una promesa que se
// resolverá después del tiempo especificado (en milisegundo    s)
// y pasará el mensaje especificado como argumento al resolver la promesa.


export function delay(time, message) {
    const pro = new Promise(function (resolve, reject) {
      if (time >= 0) {
        window.setTimeout(() => {
          resolve(message)
        }, time)
      } else {
        reject("Time cannot be negative")
      }
    })
    return pro
  }