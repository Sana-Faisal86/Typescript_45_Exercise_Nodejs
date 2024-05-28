// QS:15 = Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// // Solve this Question :
import chalk from "chalk"
let guestList: string[] = [" Hamza ", " Faisal ", " Huzaifa "];

let absent_guest = " Hamza ";

let new_guest = " Umer ";

guestList[0] = new_guest;

for (let i = 0; i < guestList.length; i++) {
  console.log(chalk.black.bgCyanBright(
    "\n\t\t Dear Mrs :",
    chalk.black.bgRed(guestList[i]),
    chalk.black.bgCyanBright("\n\n\t\t\t\t It is our pleasure to invite you in our party."),chalk.black.bgCyanBright("\n\t\t\t\t\t Thank you !"
  )));
}
console.log("\n\t\t\t",chalk.black.bgRed(absent_guest),chalk.black.bgCyanBright("is not coming to the dinner."));
