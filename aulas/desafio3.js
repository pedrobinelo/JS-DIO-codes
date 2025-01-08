//     O IMC é um critério da OMS que serve para dar uma indicação sobre a condição de peso
// de uma pessoa adulta.
//     A fórmula do IMC é:
//         IMC = peso / (altura * altura)
    
//     Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição de
// acordo com a tabela abaixo:

//     - Abaixo de 18.5 -> Abaixo do peso.
//     - Entre 18.5 e menor que 25 -> Peso normal.
//     - Entre 25 e menor que 30 -> Acima do peso.
//     - Entre 30 e menor que 40 -> Obeso. 
//     - 40 ou acima -> Obesidade mórbida. 

const weight = 78;
const height = 1.75;
const imc = weight / Math.pow(height, 2);
console.log(imc.toFixed(2));

if(imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso.');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso.');
} else {
    console.log('Obesidade mórbida.');
}
