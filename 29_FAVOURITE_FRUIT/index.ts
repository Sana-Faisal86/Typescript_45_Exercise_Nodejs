// QS_29 ==> Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// SOLVE THIS QUESTION:
import chalk from "chalk";

console.log(
  chalk.white.bgBlue(
    "\n\tMake a array of your three favorite fruits and call it favorite_fruits."
  )
);

// • Make a array of your three favorite fruits and call it favorite_fruits.
let favourite_fruit = ["Mango", "Apple", "Banana"];

// • Write five if statements.t
if (favourite_fruit.includes("Mango")) {
  console.log(
    chalk.black.bgYellow("\n\t==> Ist Statement", "\t'You really like Mango!")
  );
}
if (favourite_fruit.includes("Apple")) {
  console.log(
    chalk.black.bgRed("\n\t==> 2nd Statement", "\t'You really like Apple!")
  );
}
if (favourite_fruit.includes("Banana")) {
  console.log(
    chalk.black.bgGreen("\n\t==> 3rd Statement", "\t'You really like Banana!")
  );
}
if (favourite_fruit.includes("Strawbery")) {
  console.log(chalk.black.bgRed("\n\tYou really like Strawbery!"));
}
if (favourite_fruit.includes("Orange")) {
  console.log(chalk.black.bgYellow("\n\tYou really like Orange!"));
}
