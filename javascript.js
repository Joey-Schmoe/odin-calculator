const calculatorDisplay = document.querySelector("#calculator-display");
let displayValue = 0;

addListeners();

function addListeners() {
    const buttons = document.querySelectorAll("button");

    // 7
    buttons[0].addEventListener('click', () => {
        display(7);
    });
    // 8

    // 9

    // Divide

    // 4

    // 5

    // 6

    // Multiply

    // 1

    // 2

    // 3

    // Subtract

    // 0

    // Decimal

    // Equals

    // Plus
}

function display(value) {
    displayValue = value;
    calculatorDisplay.textContent = value;
}

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate(num1, num2, operator) {

}