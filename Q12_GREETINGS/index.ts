// Q12 :Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Solve this Question :
import chalk from "chalk"

console.log(chalk.black.bgRedBright("\n\t\t","-".repeat(67)));
// Create Array:
let PersonName: string[] = [" Sana "," Misha ", " Mehak ", " Jargina "," Shahzeena "];

let message = ": I hope that you are having the fantastic day.";
for (let i = 0; i < PersonName.length; i++) {
  console.log(chalk.black.bgGreen("\n\t\t Hello ====> ", chalk.black.bgWhiteBright(PersonName[i]), message));
}
console.log(chalk.black.bgRedBright("\n\t\t","-".repeat(72)));

// THE END :