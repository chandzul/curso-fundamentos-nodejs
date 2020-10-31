const fs = require('fs');
const stream = require('stream');
const util = require('util');

// - lectura de archivo

let data = '';

let readablaStream = fs.createReadStream(__dirname + '/input.txt');
readablaStream.setEncoding('UTF8');

// readablaStream.on('data', (chunk) => {
//     // console.log(chunk);
//     // console.log(chunk.toString());
//     data += chunk;
// })

// readablaStream.on('end', () => {
//     console.log(data);
// })

// - Escritura de archivo
// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');


// - Buffer de modificacion
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readablaStream.pipe(mayus).pipe(process.stdout);