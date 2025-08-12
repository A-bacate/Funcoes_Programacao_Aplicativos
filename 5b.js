const prompt = require("prompt-sync")();

// Crie uma calculadora. Nela, você deverá criar uma função que recebe dois números como
// parâmetro para cada operação básica (adição, subtração, divisão e multiplicação) e retorna o
// valor para onde a função for chamada. Ao final, executar cada operação 2 vezes com valores
// diferentes.

let resultado;
let num1 = Number(prompt(`Número 1: `));
let num2 = Number(prompt(`Número 2: `));
console.log(`\nSoma (1) / Subtração (2) / Multiplicação (3) / Divisão (4)`);
let escolha = Number(prompt(`--> `));

switch (escolha) {
    case 1:
        resultado = soma(num1,num2);
        break;
    case 2:
        resultado = subtracao(num1,num2);
        break;
    case 3:
        resultado = multiplicacao(num1,num2);
        break;
    case 4:
        resultado = divisao(num1,num2);
        break;
    default:
        console.log(`\nInválido!`);
}
console.log(`\nResultado: ${resultado}`);

// funcões
function soma(numero1, numero2){
    return numero1+numero2;
}

function subtracao(numero1, numero2){
    return numero1-numero2;
}

function multiplicacao(numero1, numero2){
    return numero1*numero2;
}

function divisao(numero1, numero2){
    return numero1/numero2;
}