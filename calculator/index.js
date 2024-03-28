const operators = ['+', '-', '*', '/']
let a, b, operator, temp, solution;

const expressionEl = document.querySelector('#expression');
const solutionEl = document.querySelector('#solution');
const numbersBtn = document.querySelectorAll('.num');
const operatorsBtn = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#clear');
const clearEBtn = document.querySelector('#clear-e');
const equalsBtn = document.querySelector('#equals');

numbersBtn.forEach(number => number.addEventListener('click', newClick));
operatorsBtn.forEach(operator => operator.addEventListener('click', newClick));

clearBtn.addEventListener('click', clear);
clearEBtn.addEventListener('click', clearE);

function newClick() {
    const pressedBtn = this.textContent;
    const isNumber = !isNaN(pressedBtn);
    
    if (isNumber) {
        solutionEl.value += pressedBtn;
        getValues();
    } else {
        getOperator(pressedBtn);
    }
}

function getValues() {
    if (!operator && !solution) {
        a = +solutionEl.value;
    } else {
        b = +solutionEl.value;
    }
    
    console.log(`b ${a} ${operator} ${b} = ${solution}`);
}

function getOperator(e) {
    if (operators.includes(e)) {
        operator = e;
    }
    
    clear();
    getSolution(e);
    
    console.log(`c ${a} ${operator} ${b} = ${solution}`);
}

function getSolution (e) {
    if (e === '=') {
        solution = operate();
        temp = '';
    } else {
        temp = operate();
    }
    
    updateDisplay();
    console.log(`d ${a} ${operator} ${b} = ${solution}`);
}

function operate() {
    let output;
    operator === "+" ? output = a + b :
    operator === "-" ? output = a - b :
    operator === "*" ? output = a * b :
    operator === "/" ? output = a / b :
    output = 'ERROR';
    return output;
}

function updateDisplay() {
    console.log(solution, temp);
    if (solution) {
        expressionEl.value = `${solution} `;
        a = solution;
        solution = null;
    } else if (temp) {
        expressionEl.value = `${a} ${operator} `;
        // solutionEl.value = `${temp} `;
    } else {
        expressionEl.value = `${a} ${operator} `;
    }
}

function clear() {
    solutionEl.value = ''
}

function clearE() {
    a = null;
    b = null;
    operator = null;
    solution = null;
    expressionEl.value = '';
    solutionEl.value = '';
}

// console.log(`${a} ${operator} ${b} = ${solution}`);
