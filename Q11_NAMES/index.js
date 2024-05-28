// QS:11 = Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time?
// Solve this Question:
import chalk from "chalk";
let freNames = ["Misha ", "Jarjina ", "Mehak ", "Sana ", "Shahzeena "];
console.log(chalk.black.bgGreen("\n\t\t*********"));
for (let i = 0; i < freNames.length; i++) {
    console.log(chalk.black.bgRedBright("\n\t\t ==>", i, freNames[i]));
}
console.log(chalk.black.bgGreen("\n\t\t*********"));
// The End :
