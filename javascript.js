const calculatorDisplay = document.querySelector("#calculator-display");
const currentValueDisplay = document.querySelector('#testing');
let displayValue = "";
let currentValue = "";
let num1 = 0;
let num2 = 0;
let operator = "";

addListeners();

function updateCurrentValue(value) {
    if (value != "") {
        currentValue += +value;
    } else {
        currentValue = "";
    }

    currentValueDisplay.textContent = currentValue;
}

function addListeners() {
    const buttons = document.querySelectorAll("button");

    // 7
    buttons[0].addEventListener('click', () => {
        display(7);
        updateCurrentValue(7);
    });
    // 8
    buttons[1].addEventListener('click', () => {
        display(8);
        updateCurrentValue(8);
    });
    // 9
    buttons[2].addEventListener('click', () => {
        display(9);
        updateCurrentValue(9);
    });
    // Divide
    buttons[3].addEventListener('click', () => {
        num1 = +currentValue;
        currentValue = "";
        operator = "DIVIDE";
        display(" / ");
        updateCurrentValue("");
    });
    // 4
    buttons[4].addEventListener('click', () => {
        display(4);
        updateCurrentValue(4);
    });
    // 5
    buttons[5].addEventListener('click', () => {
        display(5);
        updateCurrentValue(5);
    });
    // 6
    buttons[6].addEventListener('click', () => {
        display(6);
        updateCurrentValue(6);
    });
    // Multiply
    buttons[7].addEventListener('click', () => {
        num1 = +displayValue;
        currentValue = "";
        operator = "MULTIPLY";
        display(" x ");
        updateCurrentValue("");
    });
    // 1
    buttons[8].addEventListener('click', () => {
        display(1);
        updateCurrentValue(1);
    });
    // 2
    buttons[9].addEventListener('click', () => {
        display(2);
        updateCurrentValue(2);
    });
    // 3
    buttons[10].addEventListener('click', () => {
        display(3);
        updateCurrentValue(3);
    });
    // Subtract
    buttons[11].addEventListener('click', () => {
        num1 = +displayValue;
        currentValue = "";
        operator = "SUBTRACT";
        display(" - ");
        updateCurrentValue("");
    });
    // 0
    buttons[12].addEventListener('click', () => {
        display(0);
        updateCurrentValue(0);
    });
    // Decimal
    buttons[13].addEventListener('click', () => {
        display(".");
        updateCurrentValue(".");
    });
    // Equals
    buttons[14].addEventListener('click', () => {
        num2 = +currentValue;
        switch (operator) {
            case "ADD":
                operate(add);
                break;

            case "SUBTRACT":
                operate(subtract);
                break;

            case "MULTIPLY":
                operate(multiply);
                break;

            case "DIVIDE":
                operate(divide);
                break;
        }
    });

    // Plus
    buttons[15].addEventListener('click', () => {
        num1 = +displayValue;
        currentValue = "";
        operator = "ADD";
        display(" + ");
        updateCurrentValue("");
    });
}

function display(value) {
    displayValue += value.toString();
    calculatorDisplay.textContent = displayValue;
}

function reset() {
    displayValue = "";
    currentValue = "";
    num1 = 0;
    num2 = 0;
    operator = "";
}

function add() {
    return +num1 + +num2;
}

function subtract() {
    return +num1 - +num2;
}

function multiply() {
    return +num1 * +num2;
}

function divide() {
    return +num1 / +num2;
}

function operate(operator) {
    const result = operator();
    displayValue = "";
    display(result);
}