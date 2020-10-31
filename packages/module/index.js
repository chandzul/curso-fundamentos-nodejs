// const modulo = require('./modulo');
// const document = require('document');

// console.log(modulo);
// modulo.saludar();
// console.log(modulo.param);


'use strict';

const ManualController = {
    init: function() {
        this.search();
    },

    search: function() {
        console.log('estoy en el search');
        setTimeout(() => {
            this.processAjax('un string')
        }, 1000);
        
    },

    processAjax: function(str, status) {
        console.log(str);
    }
};

ManualController.init();
console.log('despues del init');

let button = document.getElementById("click");

// document.getElementById("click").addEventListener("click", function( event ) {
//     // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
//     event.target.innerHTML = "Conteo de Clicks: " + event.detail;
//   }, false);