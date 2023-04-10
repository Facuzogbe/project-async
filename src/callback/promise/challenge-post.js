import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data){
    const response = fetch (urlAPI, {
        method: 'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then (data => console.log(data));

    
    //  explicacion del código paso a paso:
    // 1)Importa la biblioteca "node-fetch".
    // 2)Define una constante API que contiene la URL base de la API.
    // 3)Define una función postData que recibe dos argumentos: 
    // la URL de la API a la que se enviarán los datos y los datos
    // que se enviarán. Esta función utiliza la función fetch para
    // realizar una solicitud POST a la URL especificada con
    // los datos proporcionados. Los encabezados de la solicitud 
    // especifican que el cuerpo de la solicitud es de tipo JSON.
    // La función devuelve la respuesta de la solicitud.
    // 4)Crea un objeto de datos que se enviará a la API.
    //  El objeto contiene los detalles de un nuevo producto
    //  que se agregará a la tienda en línea.
    // 5)Llama a la función postData con la URL ${API}/products
    //  y el objeto de datos que se creó anteriormente.
    // 6)Cuando la solicitud se resuelve correctamente,
    //  convierte la respuesta en formato JSON.
    // 7)Luego, registra los datos devueltos en la consola.
    // En resumen, este código envía una solicitud POST a
    //  la API con datos de un nuevo producto, espera la
    //  respuesta de la API y muestra los datos del producto creado.