//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

let prompt =  require("prompt-sync")();

let valor = Number(prompt("Digite um valor: "));
let valorDois = Number(prompt("Digite o segundo valor: "));
let operacao = String(prompt("Digite a operação(+, - , * )"));

switch(operacao){
    case "+":
        console.log(valor + valorDois);
    break;
    case "-":
        console.log(valor - valorDois);
    break;
    case "*":
        console.log(valor * valorDois);
    break;
    default:
        console.log("Digite um numero");
}