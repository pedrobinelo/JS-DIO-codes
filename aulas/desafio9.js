/* 
    Write a program that receives N (number of values) and their respective values.

    Print the biggest even number and the smallest odd number.

*/

const { gets, print } = require('./desafio9_aux');

const N = gets();
let biggestEven = null;
let smallestOdd = null; 

for (let i = 0; i < N; i++) {
    const number = gets();
    if (number % 2 === 0) {
        if (biggestEven === null || number > biggestEven) {
            biggestEven = number;
        }
    } else {
        if (smallestOdd === null || number < smallestOdd) {
            smallestOdd = number;
        }
    }
}

print(biggestEven);
print(smallestOdd);
