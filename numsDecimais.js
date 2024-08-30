// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let prompt = require('prompt-sync')();

console.log("Bem vindo a tabuada da média aritmética, digite 0 para sair");

let sum = 0;
let media = 0;
let cont = 0;
let num = 0;

do{

num = Number(prompt("Digite os números: "));
cont++;
sum += num;

if(num === 0){
    cont -= 1
    media = sum / cont;
    console.log(`A média dos seus números é: ${media}`);


}

}while(num != 0);
