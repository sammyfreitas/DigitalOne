//Atividade Bootcamp
//Sintaxe e Operadores

function recebeNum() {

    let num1 = Number(prompt('Insira o primeiro valor: '));
    let num2 = Number(prompt('Insira o segundo valor: '));


    let compara = 'diferentes';

    let frase1 = 'menor';
    let frase2 = 'menor';

    if ((!num1) || (!num2)) {
        alert('Erro de parâmetro')
    }


    let soma = num1 + num2;

    if (num1 === num2) {
        compara = 'iguais';
    } else {
        compara = 'diferentes';
    }

    if (soma > 10) {
        frase1 = 'maior';
    }

    if (soma > 20) {
        frase2 = 'maior';
    }

    alert(`Os numeros ${num1} e ${num2} sao ${compara}\nSua soma e ${soma}, que e ${frase1} do que 10 e ${frase2} do que 20.`);
}

recebeNum();