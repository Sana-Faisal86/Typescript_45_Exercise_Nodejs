//QS_27 ==> Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// SOLVE THIS QUESTION:
import chalk from "chalk";
console.log(chalk.magentaBright.underline("\n\t\tQS_27 ==> Alien Colors # 3"));
// If the alien is green ==> program 1 ...
let alien_color = "green";
console.log(chalk.blueBright.underline("\n\t\tversion 1"));
// print a message that the player earned 5 points.
if (alien_color == "green") {
    console.log(chalk.greenBright.underline("\n\t1 ==> The player just earned 5 points"));
}
else if (alien_color == "yellow") {
    console.log("\n\tThe player just earned 10 points");
}
else if (alien_color == "red") {
    console.log("\n\tThe player just earned 15 points");
}
else {
    console.log("unknown color");
}
// If the alien is yellow ==> program 2 ...
alien_color = "yellow";
console.log(chalk.blueBright.underline("\n\t\tversion 2"));
// print a message that the player earned 10 points.
if (alien_color == "green") {
    console.log("\n\tThe player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log(chalk.yellowBright.underline("\n\t2 ==> The player just earned 10 points"));
}
else if (alien_color == "red") {
    console.log("\n\tThe player just earned 15 points");
}
else {
    console.log("unknown color");
}
// If the alien is "red" ==> program 3 ...
alien_color = "red";
console.log(chalk.blueBright.underline("\n\t\tversion 3"));
// print a message that the player earned 15 points.
if (alien_color == "green") {
    console.log("\n\tThe player just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("\n\tThe player just earned 10 points");
}
else if (alien_color == "red") {
    console.log(chalk.redBright.underline("\n\t3 ==> The player just earned 15 points"));
}
else {
    console.log("unknown color");
}
// THE END:
