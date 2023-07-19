// Event listener to wait for the html to be loaded
// Button listeners to activate button reactions

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    // old syntax: for (let i=0; i<buttons.length; i++){
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                //alert("You clicked Submit");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                //alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });
    }
    // check answer when enter is pressed instead of button
    document.getElementById("answer-box").addEventListener("key-down", function(event){
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");
});
/**
 * The main game "loop", called when the script is first loaded and after the user's answer has processed
 */
function runGame(gameType) {
    // empty previous entry to answer-box
    document.getElementById("answer-box").value = "";
    // focus page on ready to write into answer-box
    document.getElementById("answer-box").focus();
    // create 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    // check which math problem to create
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`); // popup notice for error
        throw `unknown game type: ${gameType}. Aborting!`; // documents error in google console
    }
}
/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands (numbers) and operator (+,-,...) directly from the dom(html), and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText); // reads string and makes integer
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, Aborting!`;
    }
}
/**
 * Gets the current score and updates it by one
 */
function incrementScore() {
    let score = parseInt(document.getElementById('score').innerText); // reads string and makes integer
    document.getElementById('score').textContent = ++score; // js gets the score than updates it
}
function incrementWrongAnswer() {
    let antiScore = parseInt(document.getElementById('incorrect').innerText); // reads string and makes integer
    document.getElementById('incorrect').textContent = ++antiScore;
}
function displayAdditionQuestion(operand1, operand2) {
    // switch content of operands to generated numbers in display
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displaySubtractQuestion(operand1, operand2) {
    // switch content of operands to generated numbers in display
    // switch operands if solution is below 0
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}
function displayMultiplyQuestion(operand1, operand2) {
    // switch content of operands to generated numbers in display
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}
function displayDivisionQuestion(operand1, operand2) {
    // switch content of operands to generated numbers in display
    // create first operand by multiplication
    operand1 = operand1*operand2;
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}