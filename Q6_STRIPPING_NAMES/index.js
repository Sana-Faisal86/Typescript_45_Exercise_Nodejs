//QS:6 = Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Solve this question:
import chalk from "chalk";
console.log(chalk.black.bgBlue("\n\t", "-".repeat(40)));
// =====> The whitespace around the name is displayed <===========
let person_name = "   \t\tSana Faisal   ";
console.log(chalk.black.bgGreen("\n\t White spaces ==> ", person_name));
console.log(chalk.black.bgBlue("\n\t", "-".repeat(40)));
// =====> The name after striping the white spaces <===========
let without_whitespaces = person_name.trim();
console.log(chalk.black.bgYellow("\n\t After Striping ==>", without_whitespaces));
console.log(chalk.black.bgBlue("\n\t", "-".repeat(40)));
// ======> The End <======
