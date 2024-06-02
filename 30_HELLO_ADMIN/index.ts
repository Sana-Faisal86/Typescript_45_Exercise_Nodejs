// QS_30 ==> Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// SOLVE THIS QUESTION:
import chalk from "chalk";

// Make a array of five or more usernames
let userName = ["Shahzeena", "Mehak", "Jarjina", " Admin ", "Misha"];

// if else statement:
userName.forEach((oneUser) => {
  if (oneUser == " Admin ") {
    console.log(
      chalk.black.bgGreen(
        `\n\t==> Hello ${chalk.black.bgRed(
          oneUser
        )}, Would you like to see a status report?`
      )
    );
  } else {
    console.log(
      chalk.black.bgCyan(
        `\n\t==> Hello ${chalk.black.bgYellow(
          oneUser
        )} , " Thank you for logging in again."`
      )
    );
  }
});
// THE END:
