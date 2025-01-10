/* 
    A number from 1 to 100 was drawn for each student in a class of 5 students.
    Write a program that, given the 5 numbers drawn, shows the biggest one.

    Input:

    5
    50
    10
    98
    23

    Output:

    98 
*/

const { gets, print } = require('./desafio7_aux');

const numberOfStudents = gets();
let biggestValue = 0;

for (let i = 0; i < numberOfStudents; i++) {
    const number = gets();
    if (number > biggestValue) {
        biggestValue = number; 
    }
}

print(biggestValue);
