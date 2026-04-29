let firstValue = '';
let secondValue = '';
let operator = '';
let waitingForSecondValue = true;
let currentInput = '';
let previousInput = '';
let shouldResetScreen = false

function add(a,b) {
    return Number(a) + Number(b)
}

function subtract(a,b) {
    return Number(a) - Number(b)
}

function multiply(a,b) {
    return Number(a) * Number(b)
}

function divide(a,b) {
    return Number(a) / Number(b)
}

function calculate(a, oper, b) {
    if (oper === "+") {
        return add(a,b)
    }
    if (oper === "-") {
        return subtract(a,b)
    }
    if (oper === "*") {
        return multiply(a,b)
    }
    if (oper === "/") {
        return divide(a,b)
    }
}

let display = document.getElementById("display")

function updateDisplay(input) {
    display.textContent = input;
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {

    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'clear') {
            firstValue = '';
            secondValue = '';
            operator = '';
            currentInput = '';
            previousInput = '';
            waitingForSecondValue = true;
            shouldResetScreen = false;
            updateDisplay('');
        } else if (value === '=') {
            secondValue = currentInput
            currentInput = ''
            previousInput = ''
            
            result = calculate(firstValue, operator, secondValue)
            updateDisplay(result)
            operator = ''
            firstValue = result
            
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput.length > 0) {
                firstValue = currentInput
                operator = value
                updateDisplay(value)
                currentInput = ''
                previousInput = ''
            } else {
                operator = value
                updateDisplay(value)
                currentInput = ''
                previousInput = ''
            }
        } else {
            currentInput = previousInput + value
            previousInput = currentInput
            updateDisplay(currentInput)
        }
        console.log(value)
    });
});


