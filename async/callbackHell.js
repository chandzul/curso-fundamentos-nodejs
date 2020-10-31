function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log('Hola: ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(calbackHablar) {
    setTimeout(() => {
        console.log('Bla Bla bla...');
        calbackHablar();
    },1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios: ' + nombre);
        otroCallback()
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso...');

hola('Carlos', (nombre) =>{
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado');
    });
});

// hola('Carlos', function(nombre){
//     hablar(()=> {
//         hablar(()=> {
//             adios(nombre, () => {
//                 console.log('terminando proceso...');
//             });
//         });
//     });
// });

