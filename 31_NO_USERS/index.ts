//QS_31 ==> No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

// SOLVE THIS QUESTION:
import chalk from "chalk";

let userNames = ["Shahzeena", "jarjina", "Mehak", "Admin", "Misha"];
// No users:
userNames = []; // <===== Comment out and array is empty:

if (userNames.length === 0) {
  console.log(
    chalk.black.bgYellow(
      "\n\t==> UserNames = []; <===== Comment out",
      "Remove all of the usernames from your array!"
    )
  );
  console.log(
    chalk.black.bgRed(
      "\n\t==> Your Array is Empty, We need to find some users!"
    )
  );
} else {
  userNames.forEach((oneUser) => {
    if (oneUser == "Admin") {
      console.log(
        chalk.black.bgMagenta(
          `\n\t==> Hello ${oneUser}, would you like to see a status report?`
        )
      );
    } else {
      console.log(
        chalk.black.bgBlue(
          `\n\t==> Hello ${oneUser}, Thank you for logging in again.`
        )
      );
    }
  });
}
// THE END:
