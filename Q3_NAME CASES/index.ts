//QS:3 = Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Solve this Question:
import chalk from "chalk";

// Store a person’s name in a variable:
let personName = "hAmza fAiSal ";

console.log(
  chalk.black.bgWhite("\n\t\t** LowerCase method => ", personName.toLowerCase())
);
console.log(
  chalk.black.bgYellow("\n\t\t** Uppercase Method => ", personName.toUpperCase())
);
console.log(
  chalk.black.bgGreen(
    "\n\t\t** TitleCase Method => ",
    personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()
  )
);
// The End:
