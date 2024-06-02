// QS:39==> City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
// SOLVE THIS QUESTION:
import chalk from "chalk";
// Creating a function with parameter which return a values in string:
function city_country(city, country) {
    return `${chalk.black.bgGray(city)} ${chalk.black.bgGrey(country)}`;
}
console.log(chalk.black.bgCyan("\n\t==> function called three city_country() pairs."));
// Calling a function and print the return values:
console.log(city_country("\n\t 1==> Lahore ", " Pakistan "));
console.log(city_country("\n\t 2==> Tokyo ", " Japan "));
console.log(city_country("\n\t 3==> Berlin ", " Germany "));
// The End:
