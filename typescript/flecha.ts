

(function(){
//funcion normal
const miFuncion = function( a: string){
return a.toLowerCase();
}
const sumarN = function( a:number, b:number){
    return a+b;
}

// funcion de flecha
const miFuncionF = ( a: string) => a.toUpperCase();
const sumarF = ( a: number, b: number) => a+b;

const hulk = {
    nombre: 'Hulk',
    // tenemos un error en this 
    // smash(){
    //     setTimeout( function(){
    //         console.log(`${this.nombre } smash!!!`) ;
    //     },1000 );       
    // }
smash(){
        setTimeout( () => {
            console.log(`${this.nombre } smash!!!`) ;
        },1000 );       
    }
}

hulk.smash();

console.log(miFuncion('normal'));
console.log(miFuncionF('flecha'));
console.log(sumarN(3,3));
console.log(sumarF(3,4));

})();



