// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let prompt = require('prompt-sync')();

console.log("Bem vindo a Tabuada do Henrique");

let numero = Number(prompt("Digite um número de 1 a 10: "));


for(let i = 1; i <= 10; i++){
    
    console.log(`${i} * ${numero} = ${i * numero}`);
}


