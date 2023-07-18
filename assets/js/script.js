// Event listener to wait for the html to be loaded
// Button listeners to activate button reactions

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")
    // old syntax: for (let i=0; i<buttons.length; i++){
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")==="submit"){
                //alert("You clicked Submit");
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                //alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})
/**
 * The main game "loop", called when the script is first loaded and after the user's answer has processed
 */
function runGame(gameType) {

    // create 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    // check which math problem to create
    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    } else {
        alert(`unknown game type: ${gameType}`); // popup notice for error
        throw `unknown game type: ${gameType}. Aborting!`; // documents error in google console
    }
}
/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-bx").value);
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
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, Aborting!`;
    }
}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion(operand1,operand2) {
    // switch content of operands to generated numbers in display
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {

}