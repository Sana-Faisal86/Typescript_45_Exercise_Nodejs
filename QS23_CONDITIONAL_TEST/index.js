//QS_23 ==> Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// SOLVE THIS QUESTION:
import chalk from "chalk";
// Conditional test ==> 1 and one answer true and one false.
let car = "subaru";
console.log(chalk.magentaBright.underline("\n\t==> Is car !== 'subaru'? I predict false."));
console.log("\t1 ==>", car !== "subaru");
console.log(chalk.cyanBright.underline("\t==> Is car == 'subaru'? I predict true."));
console.log("\t1 ==>", car == "subaru");
// Conditional test ==> 2 and one answer true and one false.
console.log(chalk.magentaBright.underline("\n\t==> Is car == 'Toyota'? I predict false."));
console.log("\t2 ==>", car == "Toyota");
console.log(chalk.cyanBright.underline("\t==> Is car !== 'Toyota'? I predict True."));
console.log("\t2 ==>", car !== "Toyota");
// Conditional test ==> 3 and one answer true and one false.
console.log(chalk.magentaBright.underline("\n\t==> Is car == 'Ford'? I predict false."));
console.log("\t3 ==>", car == "Ford");
console.log(chalk.cyanBright.underline("\t==> Is car !== 'Ford'? I predict True."));
console.log("\t3 ==>", car !== "Ford");
// Conditional test ==> 4 and one answer true and one false.
console.log(chalk.magentaBright.underline("\n\t==> Is car == 'Suzuki'? I predict false."));
console.log("\t4 ==>", car == "Suzuki");
console.log(chalk.cyanBright.underline("\t==> Is car !== 'Suzuki'? I predict True."));
console.log("\t4 ==>", car !== "Suzuki");
// Conditional test ==> 5 and one answer true and one false.
console.log(chalk.magentaBright.underline("\n\t==> Is car == 'Bmw'? I predict false."));
console.log("\t5 ==>", car == "Bmw");
console.log(chalk.cyanBright.underline("\t==> Is car !== 'Bmw'? I predict True."));
console.log("\t5 ==>", car !== "Bmw");
