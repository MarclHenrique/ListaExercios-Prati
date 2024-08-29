//Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

let prompt =  require("prompt-sync")();

let idade = prompt("Digite um valor: ");

if (idade >=0 && idade<= 12){
    console.log("Faixa Etária: Criança");
}
else if (idade >= 13 && idade <= 17){
    console.log("Faixa Etária: Adolescente");
}
else if (idade >= 18 && idade <= 59){
    console.log("Faixa Etária: Adulto");
}
else if (idade >= 60){
    console.log("Faixa Etária: Idoso");
}