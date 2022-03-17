const calculatorDisplay = document.querySelector("#display");
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
    } else if (num == "." && currentValue == "") {
        //If decimal is first input then add a 0 before it
        display("0.");
        updateCurrentValue("0.");
        return;
    }

    display(num);
    updateCurrentValue(num);
    lastPressed = "NUM";

}

function reset() {
    calculatorDisplay.textContent = "";
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

function addListeners() {
    document.querySelector("#button-clear").addEventListener('click', reset);

    const buttons = document.querySelectorAll("#calculator-buttons button");

    buttons[0].addEventListener('click', () => {
        inputNumber(7);
    });

    buttons[1].addEventListener('click', () => {
        inputNumber(8);
    });

    buttons[2].addEventListener('click', () => {
        inputNumber(9);
    });
    
    buttons[3].addEventListener('click', () => {
        setOperation("DIVIDE", "/");
        lastPressed = "OPR";
    });

    buttons[4].addEventListener('click', () => {
        inputNumber(4);
    });

    buttons[5].addEventListener('click', () => {
        inputNumber(5);
    });

    buttons[6].addEventListener('click', () => {
        inputNumber(6);
    });

    buttons[7].addEventListener('click', () => {
        setOperation("MULTIPLY", "x");
        lastPressed = "OPR";
    });

    buttons[8].addEventListener('click', () => {
        inputNumber(1);
    });

    buttons[9].addEventListener('click', () => {
        inputNumber(2);
    });

    buttons[10].addEventListener('click', () => {
        inputNumber(3);
    });

    buttons[11].addEventListener('click', () => {
        setOperation("SUBTRACT", "-");
        lastPressed = "OPR";
    });

    buttons[12].addEventListener('click', () => {
        // //0 must be added as a string, otherwise multiple 0's in a row doesn't work
        inputNumber("0");
    });

    buttons[13].addEventListener('click', () => {
        inputNumber(".");
    });

    buttons[14].addEventListener('click', () => {
        // Equals Button
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
        }
    });

    buttons[15].addEventListener('click', () => {
        setOperation("ADD", "+");
        lastPressed = "OPR";
    });
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