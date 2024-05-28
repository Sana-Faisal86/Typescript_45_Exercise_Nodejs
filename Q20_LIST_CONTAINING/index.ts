// QS20 : Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Solve this Question:
import chalk from "chalk"

// Think of something you could store in a array:
let items :string[] = ["pakistan","karachi","Hyderabad"];

// Write a program that creates a list containing these items.
let item2 :string[] = [];
item2.push("Dubai");
item2.push("Italy");
item2.push("England");

console.log(chalk.black.bgBlueBright("\n\t\t Origonal Array ==>"),items);
console.log(chalk.black.bgBlackBright("\n\t\tContainig item ==>"),item2);

// THE END: