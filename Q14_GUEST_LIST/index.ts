// Q14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Solve this Question:
import chalk from "chalk";

console.log(chalk.black.bgBlueBright("\n\t\t", "*".repeat(70)));

let guestList = [" Hamza ", " Huzaifa ", " Umer "];

for (let i = 0; i < guestList.length; i++) {
  console.log(
    chalk.black.bgGreen(
      `\n\t\t Dear Mrs : ${chalk.black.bgRedBright(
        guestList[i]
      )} \n\t\t\t\t\t"==> It is our pleasure to invite you in our party".\n\n\t\t\t\t\t\t " Thank you "`
    )
  );
}
console.log(chalk.black.bgBlueBright("\n\t\t", "*".repeat(70)));
