// QS_24 ==> More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
import chalk from "chalk";
// SOLVE THIS QUESTION:
// • Tests for equality and inequality with strings.
console.log(chalk.blueBright.underline("\n\tQS_24_MORE_CONDITIONAL_TEST"));
console.log(chalk.redBright.underline("\n\tEquality test"), "Sana faisal" === "Sana faisal");
console.log(chalk.greenBright.underline("\tInequality test"), "Sana faisal" !== "Hamza faisal");
// • Tests using the lower case function.
console.log(chalk.magentaBright.underline("\n\tlowercase test"), "HUZAIFA FAISAL".toLowerCase() == "huzaifa faisal");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log(chalk.redBright.underline("\n\tNumerical Equality test :"), 2000 === 2000); //equality
console.log(chalk.greenBright.underline("\tNumerical Inequality test :"), 20 !== 30); //inequality
console.log(chalk.redBright.underline("\n\tgreater than test :"), 10000 > 100); //greater than
console.log(chalk.redBright.underline("\tLess than test :"), 10 < 100); //less than
console.log(chalk.greenBright.underline("\n\tgreater than Equal to test"), 10 >= 10); //greater than equal to
console.log(chalk.redBright.underline("\tgreater than Equal to test"), 5 <= 10); //less than equal to
// • Tests using "and" and "or" operators.
console.log(chalk.greenBright.underline("\n\tAnd operator test"), true && true);
console.log(chalk.redBright.underline("\tor operator test"), true || false);
// • Test whether an item is in a array.
const num = [1, 2, 3, 4];
console.log(chalk.greenBright.underline("\n\tTest number"), num.includes(1));
// • Test whether an item is not in a array.
const num1 = [1, 2, 3, 4];
console.log(chalk.redBright.underline("\tTest number"), !num.includes(5));
