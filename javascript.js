const calculatorDisplay = document.querySelector("#calculator-display");
let displayValue = "";

addListeners();

function addListeners() {
    const buttons = document.querySelectorAll("button");

    // 7
    buttons[0].addEventListener('click', () => {
        display(7);
    });
    // 8
    buttons[1].addEventListener('click', () => {
        display(8);
    });
    // 9
    buttons[2].addEventListener('click', () => {
        display(9);
    });
    // Divide

    // 4
    buttons[4].addEventListener('click', () => {
        display(4);
    });
    // 5
    buttons[5].addEventListener('click', () => {
        display(5);
    });
    // 6
    buttons[6].addEventListener('click', () => {
        display(6);
    });
    // Multiply

    // 1
    buttons[8].addEventListener('click', () => {
        display(1);
    });
    // 2
    buttons[9].addEventListener('click', () => {
        display(2);
    });
    // 3
    buttons[10].addEventListener('click', () => {
        display(3);
    });
    // Subtract

    // 0
    buttons[12].addEventListener('click', () => {
        display(0);
    });
    // Decimal
    buttons[13].addEventListener('click', () => {
        display(".");
    });
    // Equals

    // Plus
}

function display(value) {
    displayValue += value.toString();
    calculatorDisplay.textContent = displayValue;
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