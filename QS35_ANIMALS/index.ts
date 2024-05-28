// QS :35 ==> Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

// SOLVE THIS QUESTION:
import chalk from "chalk";

let petAnimals = ["CAT", "Dog", "Rabbit"];

// Use for loop:
for (let onePet of petAnimals) {
  console.log(
    chalk.black.bgRed(
      `\n\t\t==> "A ${chalk.black.bgGreen(onePet)} Would make a great pet."\n`
    )
  );
}
// Print a message outside of for_loop:
console.log(
  chalk.black.bgGreen("\n\t\t\t==> 'Any of this animals would make a great pet'")
);
// The End: