// Q19 : Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
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
// console.log(`\nMrs ${absent_guest}, is not coming to the party.\n`);
// console.log(
//   "\nGood News! we find Big Table so we are invited 3 more guests.\n"
// );
guest_list.unshift(" Nazish ");
guest_list.splice(2, 0, " Misha ");
guest_list.push(" Mehak ");
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `"Dear Mrs: ${guest_list[i]}, \n\n"It is our pleasure to invite you in our party."\n\nThank You!\n\n`
//   );
// }
// console.log(
//   `\nSorry! we can not arrange big table, only two people will be invited.\n`
// );
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    //   console.log(`\nSorry! ${remove_guest}, you are not invited for dinner.\n`);
}
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `"Dear Mrs: ${guest_list[i]}, \n\n"you are still invited."\n\nThank You!\n\n`
//   );
// }
guest_list.splice(0, 2);
console.log("\n\t\tEmpty guest_list", guest_list);
// start program QS19 :
// print a message indicating the number of people you are inviting to dinner;
console.log(chalk.black.bgGrey(`\n\t\tTotal number of guest are : ${chalk.black.bgRedBright(guest_list.length)}`));
