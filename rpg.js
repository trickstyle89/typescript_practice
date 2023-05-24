"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var hero_health = 10;
    var hero_power = 5;
    var goblin_health = 6;
    var goblin_power = 2;
    while (goblin_health > 0 && hero_health > 0) {
        console.log("You have ".concat(hero_health, " health and ").concat(hero_power, " power."));
        console.log("The goblin has ".concat(goblin_health, " health and ").concat(goblin_power, " power."));
        console.log();
        console.log("What do you want to do?");
        console.log("1. fight goblin");
        console.log("2. do nothing");
        console.log("3. flee");
        console.log("> ");
        var user_input = readline_sync_1.default.question();
        if (user_input === "1") {
            // Hero attacks goblin
            goblin_health -= hero_power;
            console.log("You do ".concat(hero_power, " damage to the goblin."));
            if (goblin_health <= 0) {
                console.log("The goblin is dead.");
            }
        }
        else if (user_input === "2") {
            // Do nothing
        }
        else if (user_input === "3") {
            console.log("Goodbye.");
            break;
        }
        else {
            console.log("Invalid input ".concat(user_input));
        }
        if (goblin_health > 0) {
            // Goblin attacks hero
            hero_health -= goblin_power;
            console.log("The goblin does ".concat(goblin_power, " damage to you."));
            if (hero_health <= 0) {
                console.log("You are dead.");
            }
        }
    }
}
console.log("In this simple RPG game, the hero fights the goblin. He has the options to:");
console.log("1. fight goblin");
console.log("2. do nothing - in which case the goblin will attack him anyway");
console.log("3. flee");
console.log();
main();
