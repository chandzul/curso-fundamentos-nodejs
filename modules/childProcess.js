const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec('dir', (err, stdout, sterr) => {
//     if (err) {
//         console.err(err);
//         return false
//     }

//     console.log(stdout);
// });

let process = spawn('cmd', ['dir']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function(dato) {
    console.log('Esta muerto?');
    console.log(process.killed);
    console.log(dato.toString());
})

process.on('exit', function() {
    console.log('el proceso termino');
    console.log(process.killed);
})