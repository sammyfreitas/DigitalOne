//Tipos de Funções
/*
//Função Declarativa - nomeação é obrigatória
function Funcao() {
    console.log('Tudo certo jovem!');
    console.log('Sou uma mensagem de uma função explicativa');
}
Funcao();*/


//Expressões de Funções - Noemeação é opcional
var funcao = function funcao() {
    console.log('Sou uma mensagem de funcao de expressao.');
}
funcao();

//Expressões de Funções - Arrow Function
var funcao = () => {
    console.log('Sou uma Arrow Function.');
}
funcao();
// Funções Nativas do JS
// Number()
//Prompt ()
//Alert ()
//Template Strings()