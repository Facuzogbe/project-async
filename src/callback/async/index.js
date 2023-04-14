const  fnAsync = () =>{
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Async!!'), 2000)
            : reject (new error('Error'));
    });
}

const anotherFn = async () => {
    const someThings = await fnAsync();
    console.log(someThings);
    console.log('Hello');   
}

console.log('Before');
anotherFn();
console.log('After')

// orden de ejecucion
// 1) se ejecuta el console.log 'Before ' comun y silvestre
// 2) se ejecuta anotherFn() que es una funcion asincrona
// 3) Dentro anotherFn hay un await antes de fnAsync() que tiene seteado 2 segundos hasta
// que no se resuelva ese await , no deja que siga el orden de ejecucion.
// 3) se imprime el siguiente console.log que contenia el'After'
// y despues se imprime someThings que resolvia lanzando el 'Async!!'  y como la 
// promesa de anotherFn se resolvio , prosigue a imprimir por ultimo Hello!!.
