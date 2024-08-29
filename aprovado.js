//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let prompt =  require("prompt-sync")();

let media = Number(prompt("Digite a média da sua nota: "));

if (media >= 8){
    console.log("Parabéns, você está aprovado");
}
else if ((media >= 5) && (media <= 7)){
    console.log("Estude um pouco mais, você está de recuperação");
}
else if (media <= 4 ){
    console.log("Nós vemos no próximo período, você está reprovado");
}