//Estruturas Condicionais
var jogador1 = 0;
var jogador2 = 1;
var placar;

//jogador1 = jogador1 + 1;

/*if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto"');
} else {
    console.log('Ninguem marcou ponto!');
}

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
} else {
    ('Ninguém marcou ponto!');
}

//If ternário - verificação em uma linha
jogador1 > 0 ? console.log('Jogador 1 Marcou ponto') : console.log('Jogador 1 nao marcou ponto');
jogador2 > 0 ? console.log('Jogador 2 Marcou ponto') : console.log('Jogador 2 nao marcou ponto');
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos') : console.log('Jogadores invalidos');

//Switch-case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
        break;
}*/

//Estruturas de Repetição

//For - Executa uma instrução até que ela seja falsa
var array2 = ['valor1', 'valor2', 'valor3', 'valor4'];
/*for (let i = 0; i < array2.length; i++) {
    console.log(i);
}*/

let array3 = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {
        propriedade1: 'valor1',
        propriedade2: 'valor2',
        propriedade3: 'valor3',
    }
    /*for (let indice = 0; indice <= array3.length; indice++) {
        console.log(indice);

    }

    //For/in - Executa repetição a partir de uma propriedade
    for (let i in array3) {
        console.log(i);
    }

    //For/in como object - Executa repetição a partir de uma propriedade
    for (i in object) {
        console.log(i);
    }

//For/of - Executa repetição a partir de um valor
for (i of array2) {
    console.log(i);
}

//For/of - Executa repetição a partir de um valor - COM OBJECT
for (i of object.propriedade1) {
    console.log(i);
}

//While executa enquanto a instrução for verdadeira
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}*/

//Do-While executa até a instrução ser falsa
var a = 10;
do {
    console.log(a);
    a--;
} while (a > -1)