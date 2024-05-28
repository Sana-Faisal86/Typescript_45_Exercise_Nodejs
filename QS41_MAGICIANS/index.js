//QS:41 ==> Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// SOLVE THIS QUESTION:
import chalk from "chalk";
// Define a function to print each magician name from an array:
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(chalk.black.bgCyan("\n\t\t", name)));
}
// Define an array containing magician name:
let magician_names = [" 1 => Harry Poter ", " 2 => Zia Chohan ", " 3 => Mian Afzal Rasheed "];
console.log(chalk.black.bgAnsi256(56)("\n\t==> Prints the name of each magician in the array."));
// Call the function to print each magician name:
show_magicians(magician_names);
// THE END:
