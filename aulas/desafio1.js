// Faça um programa para calcular o valor de uma viagem. Você terá 3 variáveis, sendo elas:

//     1. Preço do combustível em R$ 
//     2. Gasto médio de combustível por km do carro 
//     3. Distância em km da viagem 

// Imprima no console o valor que será gasto de combustível para realizar esta viagem. 

const gasPrice = 3.69;
const averageConsumption = 10;
const distance = 220;

const litersConsumption = distance / averageConsumption;
const paidValue = litersConsumption * gasPrice;
console.log(paidValue.toFixed(2));
