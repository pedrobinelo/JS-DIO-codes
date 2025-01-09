/* 
    Create a class to represent cars.

    Cars have a brand, a color and an average fuel consumption per km driven. 

    Create a method that, given the number of km and the price of fuel, gives 
    us the amount spent in R$ to complete this journey.
*/

class Car {
    brand;
    color;
    averageSpentKm;
    constructor (brand, color, averageSpentKm) {
        this.brand = brand;
        this.color = color;
        this.averageSpentKm = averageSpentKm;    
    }

    calculateRouteCost(distanceKm, fuelPrice) {
        return distanceKm * this.averageSpentKm * fuelPrice;
    }
}

const Kardian = new Car('Renault', 'Gray', 1/10); // Renault Kardian has an average ethanol comsumption 
                                                  // of 10km/L.  Thus, this car spends 0.1 L of ethanol
                                                  // per km driven.   
console.log(Kardian);
console.log(Kardian.calculateRouteCost(220, 3.69).toFixed(2));
