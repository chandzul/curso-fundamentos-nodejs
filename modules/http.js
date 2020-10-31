const http = require('http');

const PORT_SERVER = 3000;

http.createServer(router).listen(PORT_SERVER);

function router(req, res){
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end();
            break;
    
        default:
            res.write('Error 404: no se que es lo queries');
            res.end();
            break;
    }

    // res.writeHead(201, {'Content-type': 'text/plane'});
    // res.write('Hola ya se usar HTTP de Nodejs');
    // res.end();
}

console.log("Escucahndo en el puerto http://localhost:3000");