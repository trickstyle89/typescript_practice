import readlineSync from 'readline-sync';

function main(): void {
  let hero_health: number = 10;
  let hero_power: number = 5;
  let goblin_health: number = 6;
  let goblin_power: number = 2;

  while (goblin_health > 0 && hero_health > 0) {
    console.log(`You have ${hero_health} health and ${hero_power} power.`);
    console.log(`The goblin has ${goblin_health} health and ${goblin_power} power.`);
    console.log();
    console.log("What do you want to do?");
    console.log("1. fight goblin");
    console.log("2. do nothing");
    console.log("3. flee");
    console.log("> ");

    const user_input: string = readlineSync.question();

    if (user_input === "1") {
      // Hero attacks goblin
      goblin_health -= hero_power;
      console.log(`You do ${hero_power} damage to the goblin.`);
      if (goblin_health <= 0) {
        console.log("The goblin is dead.");
      }
    } else if (user_input === "2") {
      // Do nothing
    } else if (user_input === "3") {
      console.log("Goodbye.");
      break;
    } else {
      console.log(`Invalid input ${user_input}`);
    }

    if (goblin_health > 0) {
      // Goblin attacks hero
      hero_health -= goblin_power;
      console.log(`The goblin does ${goblin_power} damage to you.`);
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
