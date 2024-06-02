// Q13 :Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Solve this Question:
import chalk from "chalk";
console.log(chalk.black.bgBlueBright("\n\t\t", "*".repeat(40)));
let favouriteMode = [" Honda.", " Car.", " Motorcycle.", " Bus.", " Suzuki."];
let message = " => I would like to own a ";
for (let i = 0; i < favouriteMode.length; i++) {
    console.log(chalk.black.bgMagentaBright("\n\t\t", chalk.black.bgWhite(i), message), chalk.black.bgGreen(favouriteMode[i]));
}
console.log(chalk.black.bgBlueBright("\n\t\t", "*".repeat(40)));
// The End :
