// Faça um programa para calcular o valor de uma viagem. Você terá 3 variáveis, sendo elas:

//     1. Preço do etanol em R$
//     2. Preço da gasolina em R$
//     3. O tipo de combustível que está no seu carro 
//     4. Gasto médio de combustível por km do carro 
//     5. Distância em km da viagem 

// Imprima no console o valor que será gasto de combustível para realizar esta viagem. 

// RESOLVIDO POR UM INICIANTE - MELHORAS PODEM SER FEITAS

const ethanolPrice = 3.69;
const gasPrice = 5.79;
const fuelType = 'Gasolina';
const averageConsumption = 10;
const distance = 220;
const litersConsumption = distance / averageConsumption;

if (fuelType === 'Etanol') {
    const paidValue = litersConsumption * ethanolPrice;
    console.log(paidValue.toFixed(2));
}
else {
    const paidValue = litersConsumption * gasPrice;
    console.log(paidValue.toFixed(2)); 
}
