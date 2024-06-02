//QS_32 ==> Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// SOLVE THIS QUESTION:
import chalk from "chalk";
// • Make a list of five or more usernames called current_users.
let current_users = [" Hamza ", " huzaifa ", " umer ", " faisal ", " eshaal "];

// Make another list of five usernames called new_users.
let new_users = [" SANA ", " Hamza ", " sarim ", " sameer ", " Umer "];

new_users.forEach((new_one_users) => {
  let our_Condition = current_users.some(
    (current_one_users) =>
      current_one_users.toLowerCase() === new_one_users.toLowerCase()
  );
  if (our_Condition) {
    console.log(
      chalk.black.bgGreen(
        `\n\t\t*** Sorry ${chalk.black.bgRed(new_one_users)} is already taken!`
      )
    );
  } else {
    console.log(
      chalk.black.bgMagenta(
        `\n\t\t*** This username ${chalk.black.bgGreen(
          new_one_users
        )} is available.`
      )
    );
  }
});
// THE END:
