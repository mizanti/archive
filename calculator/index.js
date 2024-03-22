let a, b, operator, display;

const expressionEl = document.querySelector('#expression');
const displayEl = document.querySelector('#display');
const numbersBtn = document.querySelectorAll('.num');
const operatorsBtn = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#clear')

numbersBtn.forEach(number => number.addEventListener('click', updateDisplay));
operatorsBtn.forEach(operator => operator.addEventListener('click', getValues))
clearBtn.addEventListener('click', clear);


function updateDisplay() {
    displayEl.value += this.textContent;
    display = displayEl.value;
}

function getValues() {
    const pressedButton = this.textContent;

    if (!a) {
        a = display
        operator = pressedButton
        expressionEl.value = `${a} ${operator} `;
        displayEl.value = ''
    } else {
        b = display;
        expressionEl.value += `${b} = `;
        displayEl.value = ''
    }

    if (pressedButton === '=') operate();
}

function operate() {
    operator === "+" ? add() :
    operator === "-" ? subtract() :
    operator === "*" ? multiply() :
    operator === "/" ? divide() :
    console.log('ERROR');
}

function add() {
    displayEl.value = (+a) + (+b);
}

function subtract() {
    displayEl.value = (+a) - (+b);
}

function multiply() {
    displayEl.value = (+a) * (+b);
}

function divide() {
    displayEl.value = (+a) / (+b);
}

function clear() {
    expressionEl.value = '';
    displayEl.value = '';
    a = 0;
    b = 0;
    operator = null;
}

//TODO: event listener on '/*-+ keys' to store operator
//TODO: event listener on '=/*-+ keys' to store values
//TODO: event listener on '= key' to run operate()
