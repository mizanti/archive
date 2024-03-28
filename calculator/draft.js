const expressionEl = document.querySelector('#expression');
const solutionEl = document.querySelector('#solution');
const numbersBtn = document.querySelectorAll('.num');
const operatorsBtn = document.querySelectorAll('.op');
const clearBtn = document.querySelector('#clear');
const clearEBtn = document.querySelector('#clear-e');

numbersBtn.forEach(number => number.addEventListener('click', calc.updateDisplay));
operatorsBtn.forEach(operator => operator.addEventListener('click', getValues))
clearBtn.addEventListener('click', clear);
clearEBtn.addEventListener('click', clearE);

const calc = {
  a: null,
  b: null,
  operator: '',
  solution: null,
  updateDisplay: () => {
    solutionEl.value = this;
  }
};

console.log(calc)