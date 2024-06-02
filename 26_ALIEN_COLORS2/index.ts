//QS_26 ==> Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

//  SOLVE THIS QUESTION:

import chalk from "chalk";

console.log(chalk.blueBright.underline("\n\t\tQS_26 ==> Alien Colors ==> 2"));

// If the alien’s color is green:
let alien_color = "green";

// one version of this program that runs the if block .
if (alien_color == "green") {
  console.log(
    chalk.greenBright.underline(
      "\n\tRun if block ==> ",
      "\n\tThe player just earned 5 points"
    )
  );
} else {
  console.log(
    chalk.greenBright.underline("\n\tThe player just earned 10 points")
  );
}

// If the alien’s color isn’t green,
alien_color = "yellow";

if (alien_color == "green") {
  console.log(
    chalk.yellowBright.underline("\n\tThe player just earned 5 points")
  );
}

// one version of this program that runs the else block .
else {
  console.log(
    chalk.yellowBright.underline(
      "\n\tRun else block ==>",
      "\n\tThe player just earned 10 points"
    )
  );
}
// The end:
