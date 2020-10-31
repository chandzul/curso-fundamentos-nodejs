// const process = require('process'); -> esta global

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('el proceso acabo');
});

process.on('uncaughtException', (err, origin) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(error);
});

// funcionQueNoExiste();

console.log('esto si el erros no se recoje no sale');

// process.on('');