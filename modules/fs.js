const fs = require('fs');

// No usar cosas sincronas

function read(path, cb){
    fs.readFile(path, (err, data) => {
        // Leido
        cb(data.toString());
    });
}

function write(path, content, cb) {
    fs.writeFile(path, content, function(err) {
        if (err) {
            console.log('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function remove(path, cb) {
    fs.unlink(path, cb)
}

// write(__dirname + '/file1.txt', 'Soy un archivo nuevo', console.log);
// read(__dirname + '/file.txt', console.log);
remove(__dirname + '/file1.txt', console.log);