// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para calc fatorial: ")); // 5
let i = 1;
let fatorial = 1;

while(i <= num){
    fatorial = i * fatorial; //1 //2 //6 //24 //120
    i++; //2 //3 //4 //5
    
}

console.log(fatorial);