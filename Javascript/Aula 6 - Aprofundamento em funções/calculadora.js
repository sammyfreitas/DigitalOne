//Tipos de Funções
// Funções Nativas do JS
// Number()  / Prompt () / Alert () / Template Strings()

function calculadora() {
    const operacao = prompt('Escolha uma operacao: \n1 - Soma (+) \n2 - Subtracao (-)\n3 - Multiplicacao (*)\n4 - Divisao Real (/)\n5 - Divisao Inteira (%)\n6 - Potenciacao (^)');

    if ((!operacao /*!= Number*/ ) || operacao > 6) {
        alert('Erro - Operação inválida!');
        calculadora();
    } else {

        let num1 = Number(prompt('Insira o primeiro valor: '));
        let num2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if ((!num1) || (!num2)) {
            alert('Erro de parâmetro')
        }

        function soma() {
            resultado = num1 + num2;
            alert(`${num1} + ${num2} = ${resultado}`);
            novaOperacao();
        }

        function subtracao() {
            resultado = num1 - num2;
            alert(`${num1} - ${num2} = ${resultado}`);
            novaOperacao();
        }

        function multiplicacao() {
            resultado = num1 * num2;
            alert(`${num1} x ${num2} = ${resultado}`);
            novaOperacao();
        }

        function divisaoReal() {
            resultado = num1 / num2;
            alert(`${num1} / ${num2} = ${resultado}`);
            novaOperacao();
        }

        function resto() {
            resultado = num1 % num2;
            alert(`O resto da divisao de ${num1} e ${num2} = ${resultado}`);
            novaOperacao();
        }

        function potenciacao() {
            resultado = num1 ** num2;
            alert(`${num1} elevado a ${num2} = ${resultado}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operacao?\n1- Sim\n2 - Não');
            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Obrigada por usar a calculadora!');
            } else {
                alert('Opção inválida');
                novaOperacao();
            }
        }
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            resto();
        } else if (operacao == 6) {
            potenciacao();
        } else {
            alert('Opcao invalida');
        }
        /*switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                resto();
                break;
            case 6:
                potenciacao();
                break;
            default:
                alert('Opção inválida!');
                break;
        }*/
    }
}
calculadora();