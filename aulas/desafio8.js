/* 
    Write a program that receives a student's average grade.  
    
    If the average grade is < 5, print "You flunked out =("
    If the average grade is >= 5 and < 7, print "You have the chance to take a new test"
    If the average grade is >= 7, print "You passed =D"

    Example:
        Input:
            5.5
        Output:
            You have the chance to take a new test 
*/

const { gets, print } = require('./desafio8_aux');

const averageGrade = gets ();

if (averageGrade >= 0 && averageGrade < 5) {
    print('You flunked out =(');
} else if (averageGrade >= 5 && averageGrade < 7) {
    print('You have the chance to take a new test');
} else if (averageGrade >= 7){
    print('You passed =D');
} else {
    print('Invalid number.');
}
