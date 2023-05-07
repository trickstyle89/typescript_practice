const MILES_PER_KM: number = 0.621371192237334;
const KM_PER_MILES: number = 1.609344;
const MILES_PER_GALLON: number = 22.4;
const LITERS_PER_GALLON: number = 0.26417;
const LITERS_PER_100KM: number = (100 * 3.785) / MILES_PER_KM;

function bessieRange(fuelInLiters: number): void {
let gallons: number = fuelInLiters * LITERS_PER_GALLON;

if (fuelInLiters > 100) {
    console.log('Bessie cannot hold more than 100 liters of fuel.');
        } else {

            let milesRange: number = gallons * MILES_PER_GALLON;
            let kilometersRange: number = milesRange * KM_PER_MILES;

                console.log('With ${fuelInLiters} liters or ${gallons.toFixed(2)} gallons, Bessie has a range of ${milesRange.toFixed(2)} miles or ${kilometersRange.toFixed(2)} kilometers.');
                bessieCost(2.24, milesRange, kilometersRange); // call bessie cost function with the proper arguments.
    }
}

function bessieCost(costPerLiter: number, miles: number, kilometers: number): void {

    let totalCost: number = kilometers * costPerLiter;
    let costPerKilometer: string = (totalCost / kilometers).toFixed(2); // fix usage of dot notation
    let costPerMile: string = (totalCost / miles).toFixed(2); // fix usage of dot notation
}


bessieRange(100);