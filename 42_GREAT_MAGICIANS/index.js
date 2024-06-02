//QS:42 ==> Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// SOLVE THIS QUESTION:
import chalk from "chalk";
// Define the function to show magicians names:
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(chalk.black.bgRed(name)));
}
// Function to make magicians great through .map() it will modify array:
function make_great(magicians) {
    return magicians.map((name) => `\n\t\t==> The Great ${chalk.black.bgCyan(name)}`);
}
console.log(chalk.black.bgWhite("\n\t ==> Call show_magicians() to see that the list has actually been modified ."));
// Define an arrayof magicians names:
let magicians_name = [
    "  Harry Poter ",
    "  Zia Chohan ",
    "  Mian Afzal Rasheed ",
];
// Call make_great function to modify magicians names:
let great_magicians = make_great(magicians_name);
// Call show magicians that show modified of magicians:
show_magicians(great_magicians);
// THE END:
