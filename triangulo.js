// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let prompt = require('prompt-sync')();

const A = Number(prompt('Digite o lado A: '));
const B = Number(prompt('Digite o lado B: '));
const C = Number(prompt('Digite o lado C: '));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log('É um triângulo eqüilátero');
  } else if (A !== B && B !== C ){
    console.log('É um triângulo escaleno');
  }
  else  {
    console.log('É um triângulo isósceles');
  } 
} else {
  console.log('Não é um triângulo');
}