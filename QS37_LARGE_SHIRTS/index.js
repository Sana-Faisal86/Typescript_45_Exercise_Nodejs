// QS:37 ==> Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
// SOLVE THI QUESTION:
import chalk from "chalk";
// Making a function:
function make_shirt(size = "Large size", printMessage = "I love Typescript") {
    console.log(chalk.black.bgGrey(`\n\t\t==> Creating a ${chalk.black.bgGreen(size)} Shirt with the ${chalk.black.bgGreen(printMessage)} prints on shirt.`));
}
// Calling a function by-default values:
make_shirt();
// Calling a function now with medium size and default message:
make_shirt(" Medium ");
// Calling a function now with medium size and also different message:
make_shirt(" Small ", " I Love Javascript ");
// THE END:
