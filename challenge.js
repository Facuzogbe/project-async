// Este es un código JavaScript que utiliza la biblioteca "node-fetch"
// para realizar una solicitud HTTP a una API. La API que se está
// utilizando en este ejemplo es 'https://api.escuelajs.co/api/v1'.
// La función "fetchData" toma una URL como parámetro y
// utiliza la función "fetch" de "node-fetch" para realizar
// una solicitud HTTP a la API. Luego, la función "fetchData"
// devuelve el resultado de la solicitud.
// En la parte principal del código, se llama a la función 
// "fetchData" con la URL de la API concatenada con "/products"
// como argumento. Luego, se encadena una serie de promesas con el método "then".
// La primera promesa utiliza el método "json()" para convertir
// la respuesta de la solicitud HTTP en un objeto JSON y la devuelve. 
// La segunda promesa simplemente registra el objeto JSON devuelto en
// la consola utilizando el método "console.log()". Finalmente, la 
// tercera promesa registra un mensaje de saludo en la consola.
// Si se produce algún error durante la solicitud HTTP, se captura
// con el método "catch" y se registra en la consola utilizando el método "console.log()".


import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);  
};

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products);
})
.then(() => {
    console.log('hola')
})
.catch(error => console.log(error));


