/* 
    Create a class to represent a person.

    Each person has a name, weight and height.

    Each person has the capacity of saying it's own IMC value. (IMC = weight / (height * height))

    Instantiate a person named José, who weighs 70kg and is 1.75m tall. Ask José to show his IMC 
    value.
*/

class Person {
    name;
    weight;
    height;

    constructor (name, weight, height) {
        this.name = name; 
        this.weight = weight; 
        this.height = height; 
    }

    calculateImc () {
        return this.weight / (Math.pow(this.height, 2));
    }

    classifyImc () {
        const imc = this.calculateImc();
        if (imc < 18.5) {
            return 'Underweight';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Normal weight';
        } else if (imc >= 25 && imc < 30) {
            return 'Overweight';
        } else if (imc >= 30 && imc < 40) {
            return 'Obese';
        } else {
            return 'Morbid obesity';
        }
    }

}

const jose = new Person('José', 70, 1.75);
console.log(jose);
console.log(jose.calculateImc().toFixed(2));
console.log(jose.classifyImc());
