//     Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
// de etiqueta e a escolha da condição de pagamento. 
//     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar 
// o cálculo adequado. 

//     - À vista - débito - 10% de desconto. 
//     - À vista - dinheiro ou PIX - 15% de desconto. 
//     - Em 2X, preço normal de etiqueta, sem juros. 
//     - Acima de 2X, preço normal de etiqueta, mais juros de 10%. 

const tagPrice = 100;
const paymentCondition = 'Debito';

if (paymentCondition === 'Debito') {
    const paidPrice = tagPrice * 0.9;
    console.log(paidPrice);
} else if (paymentCondition === 'Dinheiro') {
    const paidPrice = tagPrice * 0.85;
    console.log(paidPrice);
} else if (paymentCondition === '2vezes') {
    const paidPrice = tagPrice;
    console.log(paidPrice);
} else {
    const paidPrice = tagPrice * 1.1;
    console.log(paidPrice);
}
