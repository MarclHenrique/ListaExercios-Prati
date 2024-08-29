// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));

let num2 = Number(prompt("Digite o segundo número: "));

if (num1 > num2){
    for(let i = num2; i <= num1; i++){
        console.log(i);
    }
};

if (num2 > num1){
    for(let i = num1; i <= num2; i++){
        console.log(i);
    }
}