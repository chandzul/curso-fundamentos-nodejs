console.time('todo');

  //  Primer for
  let suma = 0;

  console.time('bucle');
  for (let i = 0; i < 10000000; i++) {
    suma += 1;
  }

  // Segundo for

  console.timeEnd('bucle');

  let suma2 = 0;

  console.time('bucle2');
  for (let j = 0; j < 1000000; j++) {
    suma2 += 1;
  }

  console.timeEnd('bucle2');

  // funciones asincronas

  function asincrona() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Termina el proceso asincrono');
        resolve();
      }, 1000);
    });
  }

  console.log('empieza el proceso asincrono');
  console.time('asincrono');
  asincrona()
          .then(() => {
            console.timeEnd('asincrono');
          });

console.timeEnd('todo');