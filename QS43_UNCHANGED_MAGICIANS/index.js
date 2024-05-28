// QS_43 => Unchanged Magicians: Start with your work from Exercise 42. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// SOLVE THIS QUESTION:
import chalk from "chalk";
// Define the function to show magicians names:
function show_magicians(magicians) {
    magicians.forEach((name) => console.log("\n\t", chalk.black.bgGreen(name)));
}
// Function to make magicians great through .map() it will modify array:
function make_great(magicians) {
    return magicians.map((name) => `\n\t\t\t==> The Great ${chalk.black.bgGrey(name)}.`);
}
// Define an arrayof magicians names:
let magicians_name = [" Harry Poter ", " Zia Chohan ", " Mian Ali Rasheed "];
// Making a copy of Original array through .slice() method.
let copy_magicians_names = magicians_name.slice();
// Modify the copied array to include "the Great" with thier names:
let copy_great_magicians = make_great(copy_magicians_names);
// Original Array:
console.log(chalk.black.bgRed("\n\t==> Original Array :"));
show_magicians(magicians_name);
// Copied Array:
console.log(chalk.black.bgRed("\n\t\t==> Modify the copied array to include 'the Great' with thier names."));
show_magicians(copy_great_magicians);
// THE END:
