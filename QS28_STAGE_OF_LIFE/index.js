//QS_28 ==> Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// SOLVE THIS QUESTION:
import chalk from "chalk";
console.log(chalk.bold.white.bgBlueBright("\n\t\tQS_28 ======> STAGE OF LIFE <======"));
// create a variable : 
let age = 2; // You can set the age to any value you want:
// 1• If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log(chalk.black.bgGreenBright("\n\tThe person is a baby."));
}
// 2• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log(chalk.black.bgGreenBright("\n\tThe person is a toddler."));
}
// 3• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log(chalk.black.bgGreenBright("\n\tThe person is a kid."));
}
// 4• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log(chalk.black.bgGreenBright("\n\tThe person is a teenager."));
}
// 5• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log(chalk.black.bgGreenBright("\n\tThe person is an adult."));
}
// 6• If the person is age 65 or older, print a message that the person is an elder.
else if (age >= 65 && age > 65) {
    console.log(chalk.black.bgGreenBright("\n\tThe person is a elder."));
}
else {
    console.log(chalk.black.italic.bgGreenBright("\n\tinvalid number"));
}
// THE END:
