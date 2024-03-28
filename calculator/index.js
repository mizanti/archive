let a, b, operator, solution;

const expressionEl = document.querySelector('#expression');
const solutionEl = document.querySelector('#solution');
const numbersBtn = document.querySelectorAll('.num');
const operatorsBtn = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#clear');
const clearEBtn = document.querySelector('#clear-e');
const equalsBtn = document.querySelector('#equals');

numbersBtn.forEach(number => number.addEventListener('click', updateDisplay));
operatorsBtn.forEach(operator => operator.addEventListener('click', getValues))

clearBtn.addEventListener('click', clear);
clearEBtn.addEventListener('click', clearE);


function updateDisplay() {
    if (solutionEl.value === String(solution)) {
        expressionEl.value = `${a} `;
        solutionEl.value = ''
    }

    solutionEl.value += this.textContent;
}

function getOperator(op) {
    if (!(op === '=')) {
        operator = op;
        expressionEl.value += `${operator} `        
    }   
}

function getValues() {
    
    getOperator(this.textContent);

    if (solution) {
        a = solution;
        b = null;
        operator = null;
    }
    
    if (!a) {
        a = +solutionEl.value;
        expressionEl.value += `${a} `;
    } else {
        b = +solutionEl.value;
        expressionEl.value += `${b} `;
    }    
    
    clear();
    solutionEl.value = operate();
}

function operate() {
    console.log(a, operator, b, solution)
    if (a && b && operator) {
        operator === "+" ? solution = a + b :
        operator === "-" ? solution = a - b :
        operator === "*" ? solution = a * b :
        operator === "/" ? solution = a / b :
        console.log('ERROR');

        console.log(a, operator, b, solution)

        return solution;
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
