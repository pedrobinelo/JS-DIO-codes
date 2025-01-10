/* 
    Write a program that calculates and print the salary to be transfered to a employee.

    To calculate it, take the gross salary and additional benefits.
    
    The salary to be transfered is calculated as follows:

        net salary = gross salary - income tax + additional benefits;

    Income tax percentage: 
    
        From R$ 0.00 to R$ 1100.00: 5%
        From R$ 1100.01 to R$ 2500.00 = 10%
        From R$ 2500.01 = 15 %

    Example: 

        Input: 
            2000
            250
        
        Output:
            R$ 2050.00
*/

const { gets, print } = require('./desafio10_aux');

const grossSalary = gets();
const additionalBenefits = gets();

function calculateIncomeTax(salary, percentage) {
    return salary * (percentage / 100);        
}

function getPercentage (salary) {
    if (salary > 0 && salary <= 1100) {
        return 5;
    } else if (salary > 1100 && salary <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

function calculateNetSalary (grossSalary, additionalBenefits) {
    if (grossSalary > 0 && additionalBenefits >= 0) {
        const percentage = getPercentage(grossSalary);
        const incomeTax = calculateIncomeTax(grossSalary, percentage);
        return grossSalary - incomeTax + additionalBenefits;
    } else {
        return 'Invalid values.';
    }
}

print(calculateNetSalary(grossSalary, additionalBenefits));
