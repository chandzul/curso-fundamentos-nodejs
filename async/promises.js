function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Hola: ' + nombre);
            resolve(nombre)
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla Bla bla...');
            // resolve(nombre)
            reject();
        },1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios: ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

// --

console.log('Iniciando el proceso');

hola('Carolina')
    .then((nombre) => {
        return hablar(nombre);
    })
    .then((nombre) => {
        return hablar(nombre);
    })
    .then(nombre => {
        return adios(nombre);
    })
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error');
        console.log(error);
    });