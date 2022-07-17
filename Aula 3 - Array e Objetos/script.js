//Como declarar Array
let array = ['string', 1, true];
/*console.log(array);*/

//pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'],
    ['array2'],
    ['array3']
];
/*console.log(array2);*/
console.log(array[0]);

//forEach
array.forEach(function(item, index) { console.log(item, index) });

//push - add item no fim do array
array.push('novo item');
console.log(array);

//pop - apaga item no fim do array
array.pop();
console.log(array);

//shift - apaga item no início do array
array.shift();
console.log(array);

//unshift - add item no início do array
array.unshift('novo item no início');
console.log(array);

//indexOf - add item no início do array
console.log(array.indexOf('true'));

//splice - remove ou substitui item atravésd
array.splice(0, 3);
console.log(array);

//slice - add item no início do array
let novoArray = array.slice(0, 3);
console.log(novoArray);



//Como declarar Objeto
/*var xicara = {
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarCafe()
}

var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();*/

let object = {
        string: 'string',
        number: 1,
        boolean: true,
        array: ['array'],
        objectInterno: {
            objectInterno: "objeto interno"
        }
    }
    /* console.log(object);
    console.log(object.boolean);
    console.log(object.objectInterno);

    var string = object.string;
    console.log("A nova variavel string recebeu", string)

    var arrayInterno = object.array;
    console.log(arrayInterno); */

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);