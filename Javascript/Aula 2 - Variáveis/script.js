//tipos primitivos

//boolean
var VouF = false;
var numeroqualquer = 1;
var nome = "Samantha";
console.log(VouF);
console.log(typeof(VouF));

//Number
console.log(numeroqualquer);
console.log(typeof(numeroqualquer));

//String
console.log(nome);
console.log(typeof(nome));
let variavel2 = "Pedro Otavio";
console.log(variavel2);
console.log("A variavel", variavel2, "eh do tipo", typeof(variavel2));
const constante = "Digital One";
console.log(constante);
console.log(typeof(constante));


//Global
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    //Local
    let escopoLocalinterno = "Local";
    console.log(escopoLocalinterno);
}

escopoLocal();