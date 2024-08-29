//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

let prompt = require("prompt-sync")();

let altura = parseFloat(prompt("Digite sua altura: "));
let peso = parseFloat(prompt("Digite seu peso: "));

let imc = peso / (altura * altura);
let fixeimc = imc.toFixed(1);

if (fixeimc <= 18.5){
    console.log(`baixo peso: ${fixeimc}`);
}
else if (fixeimc >= 18.5 && fixeimc <= 24.9){
    console.log(`Peso normal: ${fixeimc}`);
}
else if (fixeimc >= 25.0 && fixeimc <= 29.9){
    console.log(`Sobrepeso: ${fixeimc}`);
}
else if (fixeimc >= 30.0 ){
    console.log(`Obeso: ${fixeimc}`);
}