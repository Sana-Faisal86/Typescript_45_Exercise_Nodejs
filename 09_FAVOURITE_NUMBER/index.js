//QS: 9 = Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// ===> Solve This Question <====
import chalk from "chalk";
// Create a variable:
let favorite_number = 30;
console.log(chalk.black.bgYellowBright("\n\t\t==> Store a favorite number in a variable\n"));
console.log(chalk.bgBlue("\n\t\t", "*".repeat(40)));
console.log(chalk.black.bgRed(`\t\t ==>" My Favourite Number is ${favorite_number}".`));
console.log(chalk.bgBlue("\t\t", "*".repeat(40)));
// ===> The End <===
