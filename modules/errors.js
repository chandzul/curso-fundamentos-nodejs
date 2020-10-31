function otherFunction() {
    return broken();
}

function broken() {
    return 3 + z;
}

function brokenAsync(cb) {
    setTimeout(() => {
        
        try {
            return 3 + z;
        } catch (error) {
            console.log('Error en mi funcion async');
            cb();
        }
    }, 1000);
}

try {
    // otherFunction();
    brokenAsync(() => console.log('hay error'));
} catch (error) {
    console.error('Vaya, aglo se ha roto');
    console.error(error);
    console.log('Pero no pasa nada lo hemos capturado');
}

console.log('Esto de aqui esta al final');