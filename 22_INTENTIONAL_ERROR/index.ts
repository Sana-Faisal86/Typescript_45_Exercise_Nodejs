//QS_22 => Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// SOLVE THIS QUESTION:
import chalk from "chalk";
console.log(chalk.blueBright.underline("\n\t\tQs_22 ==> Intentional Error"));

// Create Array:

let subject = ["english", "urdu", "Math", "sindhi"];
// INDEX ERROR ==>

console.log("\n\t", subject[4]);

// ====> CORRECT ERROR BEFORE CLOSSING THE PROGRAM.

console.log(
  chalk.redBright.underline(
    "\n\t\tMake sure correct the error before closing the program"
  )
);
console.log(chalk.greenBright.underline("\n\t", subject[3]));
// The End: