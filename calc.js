const prompt = require("prompt-sync")();

let num1, num2, resultado;
let escolha;
let fim = false;

while (!fim) {
    console.log(`\nNúmero 1:`);
    num1 = Number(prompt(`--> `));
    console.log(`\nNúmero 2:`);
    num2 = Number(prompt(`--> `));
    console.log("\nSoma (S) / Subtração (SUB) / Multiplicação (M) / Divisão (D)");
    escolha = prompt(`--> `).toLowerCase();
    if (escolha == "soma" || escolha == "s"){
        resultado = soma(num1,num2);
        console.log("-->",resultado);

    } else if (escolha == "subtração" || escolha == "sub") {
        resultado = subtracao(num1,num2);
        console.log("-->",resultado);

    } else if (escolha == "multiplicação" || escolha == "m") {
        resultado = multiplicacao(num1,num2);
        console.log("-->",resultado);

    } else if (escolha == "divisão" || escolha == "d") {
        resultado = divisao(num1,num2);
        console.log("-->",resultado);

    } else {
        console.log(`\n+=*/- Inválido! -/*=+\n`);
    }
    console.log(`\nQuer rodar novamente?[sim(s)/não(n)`);
    escolha = prompt(`--> `);
    if (escolha == "não" || escolha == "n") {
        fim = true;
    } else if (escolha == "sim" || escolha == "s") {
        fim = false;
    } else {
        console.log(`\n+=*/- Inválido! -/*=+\n`);
    }
}

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