#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.green("Welcome to number guessing game.You have n rounds to play which would increase in difficulty with each level and each round clearation will score you 10 points"));
let score = 0, input = 0, round = 1;
do {
    const randInt = Math.floor(Math.random() * (100 * round));
    // console.log(randInt); // To check the correctness of algorithm
    let { guess } = await inquirer.prompt({
        "name": "guess",
        "type": "number",
        "message": chalk.grey(`Enter your guess between 1 to ${100 * round} or 0 to exit`),
    });
    if (randInt == guess) {
        console.log(chalk.green("Congrats!You have guessed the right number!"));
        score += 10;
        input = guess;
        round += 1;
        console.log(chalk.green("Moving to " + round + "th round"));
    }
    else if (guess == 0) {
        console.log(chalk.green("Score: - " + score));
        console.log(chalk.green("Good bye!"));
        break;
    }
    else {
        console.log(chalk.red("Oops! You have not guessed"));
        console.log(chalk.red("Score: - " + score));
        break;
    }
} while (input != 0);
