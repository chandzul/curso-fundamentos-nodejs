async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Hola: ' + nombre);
            resolve(nombre)
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla Bla bla...');
            resolve(nombre)
            // reject();
        },1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios: ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso');
}

console.log('Empezamos el proceso');
main();
console.log('Segunda linea que se ejecuta');