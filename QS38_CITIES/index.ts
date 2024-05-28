//QS:38 ==> Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

// SOLVE THIS QUESTION:
import chalk from "chalk";
// describe a function:

function describe_city(city: string, country: string = " Pakistan ") {
  console.log(
    chalk.black.bgWhite(
      `\n\t\t==> ${chalk.black.bgRed(city)} is in ${chalk.black.bgRed(country)}.`
    )
  );
}
console.log(
  chalk.black.bgWhite("\n\t\t==> Function call for three different cities.")
);

// Calling the function:
// the country a default value
describe_city(" karachi ");
describe_city(" Lahore ");
describe_city(" Islamabad ");

// Calling the default country.
console.log(
  chalk.black.bgWhite("\n\t\tCalling the function the country a default value")
);
describe_city(" Berlin ", " Germany ");

// The End:
