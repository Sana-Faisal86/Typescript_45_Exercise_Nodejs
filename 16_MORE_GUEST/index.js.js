//Q:16 = More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// QS 16 start from QS 15 :
// creating a guestlist array :
// let guest_list = ["Madiha", "Seemi", "Sana", "Eshaal", "Nargis"];
// for(let i =0; i<guest_list.length; i++){
// console.log('Dear Mrs: ' + guest_list[i] + ',\n\n"It is our pleasure to invite you in our party".\n\nThank You!\n\n');
// };
// Question(16) start :
//  solve this question:
import chalk from "chalk";
// creating a guestlist array :
let guest_list = ["Madiha", "Seemi", "Sana", "Eshaal", "Nargis"];
// let absent_guest = "Nargis";
// let new_guest = "Fabiha";
// guest_list[0] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear Mrs : ${guest_list[i]}, \n\n"It is our pleasure to invite you in our party."\n\nThank You!\n\n`
//   );
// }
// console.log(`\nMrs ${absent_guest}, is not coming to the party.\n`);
// START QUESTION 16:
console.log(chalk.black.bgCyanBright("\n\tGood News! we find Big Table so we are invited 3 more guests.\n"));
guest_list.unshift("Nazish");
guest_list.splice(2, 0, "Misha");
guest_list.push("Mehak");
for (let i = 0; i < guest_list.length; i++) {
    console.log(chalk.black.bgCyanBright(`"\n\t\t Dear Mrs: ${chalk.black.bgRed(guest_list[i])}, \n\n\t\t\t"It is our pleasure to invite you in our party."\n\n\t\t\t\tThank You!\n\n`));
}
;
