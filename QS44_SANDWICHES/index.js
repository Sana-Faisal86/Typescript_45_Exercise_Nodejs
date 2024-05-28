//QS:44 => Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
// SOLVE THIS QUESTION:
import chalk from "chalk";
function makeSandwiches(...item) {
    console.log(chalk.black.bgBlue("\n\t==> Making a sandwich with the following item.\n"));
    item.forEach((singleItem) => console.log("\t", "-" + chalk.greenBright.underline(singleItem)));
    console.log(chalk.black.bgCyan("\n\t\t==> Now Enjoy sandwich!"));
}
makeSandwiches(" Bread ", " Butter ");
makeSandwiches(" chicken ", " cheese ", " ketchup ", " Mayonise ");
makeSandwiches(" chicken ", " Bread ", " ketchup ", " Mayonise ", " Lectuce ", " tomato ");
// The End:
