// Event listener to wait for the html to be loaded
// Button listeners to activate button reactions

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")
    // old syntax: for (let i=0; i<buttons.length; i++){
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")==="submit"){
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
/**
 * The main game "loop", called when the script is first loaded and after the user's answer has processed
 */
function runGame() {

    // create 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {

}