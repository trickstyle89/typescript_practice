const calculateChange = function(total: number, cash: number): string | Record<string, number> {
    let change = cash - total;
    if(change<=0) return "Not enough cash to give change"; // edge case to handle when cash is less than total
    let changeObj: Record<string, number> = {};
    let denom = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
    let denomName = ["TwentyDollars", "TenDollars", "FiveDollars", "Toonie", "Loonie", "Quarter", "Dime", "Nickel", "Penny"];

    for (let i = 0; i < denom.length; i++) {
        while (change >= denom[i]) {
            change -= denom[i];
            changeObj[denomName[i]] = (changeObj[denomName[i]] || 0) + 1;
        }
    }

    return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(1234, 10000));
