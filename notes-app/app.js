// const validator = require("validator");
const chalk = require("chalk");
const newFunction = require("./notes");

const msg = newFunction();

// console.log(msg);


const greenMsg = chalk.bold.bgRed.green("Success!!");
console.log(greenMsg);

// console.log(chalk.red("Hello", chalk.underline.bold.bgBlue("world") + "!"));
// console.log(validator.isURL("https:/mead.io"));
