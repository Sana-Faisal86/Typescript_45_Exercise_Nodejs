// QS_25 ==> Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// SOLVE THIS QUESTION:

import chalk from "chalk";
console.log(chalk.magentaBright.underline("\n\t\tQS_25 ==> Alien Colors"));

// Create a variable called alien_color:
let alien_color = "green";

// if else statement:
if (alien_color == "green") {
  console.log(
    chalk.cyanBright.underline("\n\tThe player just earned 5 points.")
  );
}
alien_color = "yellow";
if (alien_color == "red") {
  console.log(
    chalk.blueBright.underline("\n\tThe player just earned 5 points.")
  );
}

// THE END:
