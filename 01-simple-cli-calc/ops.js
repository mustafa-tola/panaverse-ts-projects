import inquirer from "inquirer";
const takeTwoInputs = async () => {
    const { num1, num2 } = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter the first number",
        }, {
            name: "num2",
            type: "number",
            message: "Enter the second number"
        }]);
    return [num1, num2];
};
const doingMathOps = (num1, num2, op) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "f";
    }
    else {
        if (op == "+") {
            return JSON.stringify(num1 + num2);
        }
        else if (op == "-") {
            return JSON.stringify(num1 - num2);
        }
        else if (op == "*") {
            return JSON.stringify(num1 * num2);
            // console.log(num1 * num2)
        }
        else if (op == "/") {
            console.log("Div");
            return JSON.stringify(num1 / num2);
        }
        else if (op == "**") {
            return JSON.stringify(Math.pow(num1, num2));
        }
        else if (op == "%") {
            return JSON.stringify(num1 % num2);
        }
        else if (op == "root") {
            return JSON.stringify(Math.pow(num1, 1 / num2));
        }
        else {
            return JSON.stringify(Math.log(num2) / Math.log(num1));
        }
    }
};
let sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
let takingOp = async () => {
    let { op } = await inquirer.prompt({
        name: "op",
        type: "list",
        message: "What do you want to do",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Power",
            "Modulus (Remainder)",
            "Nth Root",
            "Log Value",
            "Exit"
        ]
    });
    return op;
};
const checkingResult = (num1, num2, op) => {
    return doingMathOps(num1, num2, op) == "f" || doingMathOps(num1, num2, op) == "null";
};
export { takeTwoInputs, doingMathOps, sleep, takingOp, checkingResult };
