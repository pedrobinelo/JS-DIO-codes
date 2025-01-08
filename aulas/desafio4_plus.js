//     Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
// de etiqueta e a escolha da condição de pagamento. 
//     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar 
// o cálculo adequado. 

//     1. À vista - débito - 10% de desconto. 
//     2. À vista - dinheiro ou PIX - 15% de desconto. 
//     3. Em 2X, preço normal de etiqueta, sem juros. 
//     4. Acima de 2X, preço normal de etiqueta, mais juros de 10%. 

//     OBS: Resolva o exercício utilizando a ajuda de funções 

function applyDiscount(tagPrice, discount) {
    return (tagPrice - (tagPrice * (discount / 100)));
}

function applyInterest(tagPrice, interest) {
    return (tagPrice + (tagPrice * (interest / 100)));
}

const tagPrice = 100;
const paymentCondition = 4;

if (paymentCondition === 1) {
    console.log(applyDiscount(tagPrice, 10));
} else if (paymentCondition === 2) {
    console.log(applyDiscount(tagPrice, 15));
} else if (paymentCondition === 3) {
    console.log(tagPrice);
} else {
    console.log(applyInterest(tagPrice, 10));
}
