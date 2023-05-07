const conKmUnit: number = 0.62;
const conMiUnit: number = 1.6;
const conGalonsToLiters: number = 0.26417;

function unitMilesToKilos(miles: number): void {
  let kilos: number = 0;
  kilos = miles * conMiUnit;
  console.log(kilos);
}

function unitKilosToMiles(kilos: number): void {
  let miles: number = 0;
  miles = kilos * conKmUnit;
  console.log(miles);
}

function bessieRange(fuelInLiters: number): number | void {
  let galons: number = fuelInLiters * conGalonsToLiters;
  if (fuelInLiters > 100) {
    console.log('Bessie cannot hold more than 100 liters');
  } else {
    let bRange: number = galons * 21;
    return bRange;
  }
}

console.log(bessieRange(50));
unitMilesToKilos(600);
unitKilosToMiles(900);
