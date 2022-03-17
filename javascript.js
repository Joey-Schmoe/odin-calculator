//NOTES
//  BUG
//    Pressing EQUALS after inputting an operation but before inputting a second number
//    attempts to resolve the operation
//   
//    Pressing EQUALS should only do ANYTHING if user has entered all three inputs (num1, num2, operator)
//
//LOGIC
//  

const calculatorDisplay = document.querySelector("#display");
const currentValueDisplay = document.querySelector('#testing');
let displayValue = "";
let currentValue = "";
let num1 = 0;
let num2 = 0;
let operator = "";
let lastPressed = "";

addListeners();

function updateCurrentValue(value) {
    if (value != "") {
        currentValue += value;
    } else {
        currentValue = "";
    }

    currentValueDisplay.textContent = currentValue;
}

function setOperation(operation, displayString) {
    if (operator == "") {
        //User has pressed an operation button for the first time, only num1 has been set
        num1 = +currentValue;
    } else {
        //User has set num1, num2, and operation
        //  Resolve current operation
        num2 = +currentValue;
        switch (operator) {
            case "ADD":
                num1 = operate(add);
                break;

            case "SUBTRACT":
                num1 = operate(subtract);
                break;

            case "MULTIPLY":
                num1 = operate(multiply);
                break;

            case "DIVIDE":
                num1 = operate(divide);
                break;
        }

    }

    currentValue = "";
    operator = operation;
    display(` ${displayString} `);
    updateCurrentValue("");
}

function inputNumber(num) {
    if (lastPressed == "EQL") {
        num1 = num;
        currentValue = "";
        displayValue = "";
    }

    display(num);
    updateCurrentValue(num);
    lastPressed = "NUM";

}

function addListeners() {
    const buttons = document.querySelectorAll("#calculator-buttons button");

    // 7
    buttons[0].addEventListener('click', () => {
        inputNumber(7);
        // display(7);
        // updateCurrentValue(7);
        // lastPressed = "NUM";
    });
    // 8
    buttons[1].addEventListener('click', () => {
        inputNumber(8);
        // display(8);
        // updateCurrentValue(8);
        // lastPressed = "NUM";
    });
    // 9
    buttons[2].addEventListener('click', () => {
        inputNumber(9);
        // display(9);
        // updateCurrentValue(9);
        // lastPressed = "NUM";
    });
    // Divide
    buttons[3].addEventListener('click', () => {
        setOperation("DIVIDE", "/");
        lastPressed = "OPR";
    });
    // 4
    buttons[4].addEventListener('click', () => {
        inputNumber(4);
        // display(4);
        // updateCurrentValue(4);
        // lastPressed = "NUM";
    });
    // 5
    buttons[5].addEventListener('click', () => {
        inputNumber(5);
        // display(5);
        // updateCurrentValue(5);
        // lastPressed = "NUM";
    });
    // 6
    buttons[6].addEventListener('click', () => {
        inputNumber(6);
        // display(6);
        // updateCurrentValue(6);
        // lastPressed = "NUM";
    });
    // Multiply
    buttons[7].addEventListener('click', () => {
        // num1 = +displayValue;
        // currentValue = "";
        // operator = "MULTIPLY";
        // display(" x ");
        // updateCurrentValue("");

        setOperation("MULTIPLY", "x");
        lastPressed = "OPR";

    });
    // 1
    buttons[8].addEventListener('click', () => {
        inputNumber(1);
        // display(1);
        // updateCurrentValue(1);
        // lastPressed = "NUM";
    });
    // 2
    buttons[9].addEventListener('click', () => {
        inputNumber(2);
        // display(2);
        // updateCurrentValue(2);
        // lastPressed = "NUM";
    });
    // 3
    buttons[10].addEventListener('click', () => {
        inputNumber(3);
        // display(3);
        // updateCurrentValue(3);
        // lastPressed = "NUM";
    });
    // Subtract
    buttons[11].addEventListener('click', () => {
        // num1 = +displayValue;
        // currentValue = "";
        // operator = "SUBTRACT";
        // display(" - ");
        // updateCurrentValue("");

        setOperation("SUBTRACT", "-");
        lastPressed = "OPR";

    });
    // 0
    buttons[12].addEventListener('click', () => {
        inputNumber("0");
        // display("0");
        // //0 must be added as a string, otherwise multiple 0's in a row doesn't work
        // updateCurrentValue("0");
        // lastPressed = "NUM";
    });
    // Decimal
    buttons[13].addEventListener('click', () => {
        display(".");
        updateCurrentValue(".");
    });
    // Equals
    buttons[14].addEventListener('click', () => {
        if (lastPressed == "NUM" && num1 != 0) {
            num2 = +currentValue;
            switch (operator) {
                case "ADD":
                    num1 = operate(add);
                    break;
    
                case "SUBTRACT":
                    num1 = operate(subtract);
                    break;
    
                case "MULTIPLY":
                    num1 = operate(multiply);
                    break;
    
                case "DIVIDE":
                    num1 = operate(divide);
                    break;
            }
            num2 = 0;
            currentValue = "";
            displayValue = "";
            operator = "";
            lastPressed = "EQL";
            updateCurrentValue(num1);
            display(num1);
        } else {

        }
       
        
    });

    // Plus
    buttons[15].addEventListener('click', () => {
        // num1 = +displayValue;
        // currentValue = "";
        // operator = "ADD";
        // display(" + ");
        // updateCurrentValue("");

        setOperation("ADD", "+");
        lastPressed = "OPR";

    });

    document.querySelector("#button-clear").addEventListener('click', reset);
}

function display(value) {
    if (typeof value ===  "number") {
        //Round to 5 decimal places
        displayValue += (Math.round(value * 100000) / 100000).toString();
    } else {
        displayValue += value.toString();
    }
    
    calculatorDisplay.textContent = displayValue;
}

function reset() {
    calculatorDisplay.textContent = "";
    currentValueDisplay.textContent = "";
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
    if (+num2 == 0) {
        num1 = 0;
        return "You shouldn't have done that";
    } else {
        return +num1 / +num2;
    }

}

function operate(operator) {
    const result = operator();
    displayValue = "";
    display(result);
    num2 = 0;
    return result;
}