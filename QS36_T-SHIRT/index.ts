// QS:36 ==> T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// SOLVE THIS QUESTION:
import chalk from "chalk";

function make_shirt(size: string, printMesage: string) {
  console.log(
    chalk.black.bgMagenta(
      `\n\t\t"==> You Selected ${chalk.black.bgGreen(
        size
      )} size shirt with ${chalk.black.bgGreen(printMesage)} prints on shirt"`
    )
  );
}
// Function Call:
make_shirt(" 'Medium' ", " 'I Love Pakistan' ");
make_shirt(" 'Small' ", " 'I Love Mama' ");

// THE END:
