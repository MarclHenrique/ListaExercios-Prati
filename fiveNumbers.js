// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let prompt = require('prompt-sync')();


let soma = 0;

for(let cont = 1; cont <= 5; cont++){

    let valor = Number(prompt(`Digite o ${cont}º número: `));
    soma += valor;

}

console.log(`O total dos 5 número é: ${soma}`);


