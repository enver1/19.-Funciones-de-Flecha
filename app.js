"use strict";
(function () {
    //funcion normal
    const miFuncion = function (a) {
        return a.toLowerCase();
    };
    const sumarN = function (a, b) {
        return a + b;
    };
    // funcion de flecha
    const miFuncionF = (a) => a.toUpperCase();
    const sumarF = (a, b) => a + b;
    // diferencias del this
    const hulk = {
        nombre: 'Hulk',
        // tenemos un error en this 
        // smash(){
        //     setTimeout( function(){
        //         console.log(`${this.nombre } smash!!!`) ;
        //     },1000 );       
        // }
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash();
    console.log(miFuncion('normal'));
    console.log(sumarN(3, 3));
    console.log(miFuncionF('flecha'));
    console.log(sumarF(3, 4));
})();
