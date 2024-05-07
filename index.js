import inquirer from "inquirer";
// computer will generate a random number.
// user input for guessing number
//  computer user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 5",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right Number");
}
else {
    console.log("Sorry! You Guessed Wrong Number");
}
