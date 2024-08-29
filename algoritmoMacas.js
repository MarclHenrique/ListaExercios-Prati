// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require('prompt-sync')();

let qtdMacas = Number(prompt("Digite a quantidade de maças que você quer comprar: "));

let totalCompra = qtdMacas < 12 ? qtdMacas * 0.30 : qtdMacas  * 0.25;

console.log(`Valor total da compra: ${totalCompra}`);
