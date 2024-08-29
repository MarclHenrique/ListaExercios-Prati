//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número: "));

for(let i = 0; i < num; i++){
    console.log(num);
}
