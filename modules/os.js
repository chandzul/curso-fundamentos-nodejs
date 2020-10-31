const { maxHeaderSize } = require('http');
const os = require('os');

const SIZE = 1024;

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.constants);

// function kb(bytes) { return bytes / SIZE;}
// const mb = (bytes) => kb(bytes) / SIZE;
// const gb = (bytes) => mb(bytes) / SIZE;

// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem));

// console.log(os.homedir());

// console.log(os.tmpdir());

// console.log(os.hostname());

console.log(os.networkInterfaces());

