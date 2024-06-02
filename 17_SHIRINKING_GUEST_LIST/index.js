/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/
// Solve this question :
import chalk from "chalk";
// creating a guestlist array :
let guest_list = [" MISHA ", " NARGIS ", " SEEMI ", " ESHAAL "];
let absent_guest = " Nargis ";
let new_guest = " Fabiha ";
guest_list[0] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear Mrs : ${guest_list[i]}, \n\n"It is our pleasure to invite you in our party."\n\nThank You!\n\n`
//   )
// };
console.log(chalk.black.bgGray(`\n\tMrs ${chalk.black.bgRed(absent_guest)}, is not coming to the party.`));
console.log(chalk.black.bgGreenBright("\n\t\tGood News! we find Big Table so we are invited 3 more guests."));
guest_list.unshift(" Nazish ");
guest_list.splice(2, 0, " Misha ");
guest_list.push(" Mehak ");
for (let i = 0; i < guest_list.length; i++) {
    console.log(chalk.black.bgCyanBright(`\n\t"Dear Mrs: ${chalk.black.bgRed(guest_list[i])}, \n\t\t"It is our pleasure to invite you in our party."\n\n\t\t\tThank You!`));
}
console.log(chalk.black.bgGreenBright(`\n\t\tSorry! we can not arrange big table, only two people will be invited.`));
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(chalk.black.bgGray(`\n\t Sorry! ${chalk.black.bgRed(remove_guest)}, you are not invited for dinner.\n`));
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(chalk.black.bgCyanBright(`\n\t"Dear Mrs: ${chalk.black.bgRed(guest_list[i])}, \n\t\t"you are still invited."\n\n\t\t\tThank You!`));
}
guest_list.splice(0, 2);
console.log(guest_list);
