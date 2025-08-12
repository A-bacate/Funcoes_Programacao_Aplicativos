const prompt = require("prompt-sync")();

// Crie uma função chamada saudacao que receba um nome como parâmetro e 
// exiba a mensagem "Olá, <nome>! Seja bem-vindo(a)!". Depois, chame a 
// função para três nomes diferentes.

let nomes = [];
nomes.push(prompt(`Nome 1: `));
nomes.push(prompt(`Nome 2: `));
nomes.push(prompt(`Nome 3: `));

saudacao(nomes[0]);
saudacao(nomes[1]);
saudacao(nomes[2]);

function saudacao (nome) {
    console.log(`\nOlá, ${nome}! Seja bem-vindo(a)!`);
}