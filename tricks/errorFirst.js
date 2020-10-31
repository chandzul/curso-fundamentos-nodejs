function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}


asincrona(function(error, dato){
    if (error) {
        console.error('Tenemos un error');
        console.error(error);
        return false;
        // throw error; // No va a funcionar con una funcion sincrona
    }

    console.log('Toda ha ido bien y mi data es: ' + dato);
});


