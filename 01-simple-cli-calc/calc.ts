import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { doingMathOps, takeTwoInputs, sleep, takingOp, checkingResult } from "./ops.js";

let neon = chalkAnimation.neon("Welcome to Calculator app");

neon.start();
await sleep(2000);
neon.stop();

let op, res;
while (op != "Exit") {
    op = await takingOp();
    if (op == "Addition") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"+") ? chalk.red("Invalid Output") : chalk.green(doingMathOps(res[0], res[1], "+"))))
    }
    else if (op == "Subtraction") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"-") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "-"))))
    }
    else if (op == "Multiplication") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"*") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "*"))))
    }
    else if (op == "Division") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"/") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "/"))))
    }
    else if (op == "Power") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"**") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "**"))))
    }
    else if (op == "Modulus (Remainder)") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"%") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "%"))))
    }
    else if (op == "Nth Root") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"root") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "root"))))
    }
    else if (op == "Log Value") {
        res = await takeTwoInputs();
        console.log("The result is " + (checkingResult(res[0],res[1],"log") ? chalk.red("Invalid Input") : chalk.green(doingMathOps(res[0], res[1], "log"))))
    }
    else {
        break;
    }
}
console.log(chalk.green("Good bye!"))