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


// import fetch from "node-fetch";
// const API = 'https://api.escuelajs.co/api/v1';

// function fetchData(urlAPI) {
//     return fetch(urlAPI);  
// };

// fetchData(`${API}/products`)
// .then(response => response.json())
// .then(products => {
//     console.log(products);
// })
// .then(() => {
//     console.log('hola')
// })
// .catch(error => console.log(error));


/////////////////////////////////////////////////////////////////////////
// Este código es una función que utiliza la biblioteca "node-fetch" para obtener datos de una API. Aquí está lo que hace el código paso a paso:

// 1)Importa la biblioteca "node-fetch".
// 2)Define una constante API que contiene la URL base de la API.
// 3)Define una función fetchData que recibe como argumento una URL de API, realiza una solicitud de datos a la URL y devuelve el resultado de la solicitud.
// 4)Llama a la función fetchData con la URL ${API}/products.
// 5)Cuando la solicitud se resuelve correctamente, convierte la respuesta en formato JSON.
//6) Luego, toma el primer producto de la lista de productos devuelta por la API y llama a la función fetchData nuevamente con la URL ${API}/products/${products[0].id} para obtener más detalles sobre el primer producto.
//7) Cuando la solicitud se resuelve correctamente, convierte la respuesta en formato JSON.
// 8)A continuación, utiliza el objeto producto devuelto para obtener la categoría a la que pertenece el producto mediante la llamada a fetchData con la URL ${API}/categories/${product.category.id}.
// 9)Cuando la solicitud se resuelve correctamente, convierte la respuesta en formato JSON.
// 10)Finalmente, se registran en la consola el título del primer producto y el nombre de la categoría del producto. Si ocurre algún error, se registrará en la consola. En cualquier caso, se registrará "Finally" en la consola al finalizar la ejecución de la función.


// llamado multiple

 import fetch from "node-fetch";
 const API = 'https://api.escuelajs.co/api/v1';

 function fetchData(urlAPI) {
     return fetch(urlAPI);  
 };

fetchData(`${API}/products`)
.then (response => response.json())
.then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`);
})
.then (response => response.json)
.then(product => {
    console.log(product.title)
    return fetchData (`${API}/categories/${product.category.id}`)
})
.then(response => response.json)
.then(category =>{
    console.log(category.name);
})
.catch(err => console.log(err))
.finally(() => console.log('Finally'));