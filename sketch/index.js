let width;
let height;

const canvasEl = document.querySelector('#canvas');

const submitBtn = document.querySelector('#submit-btn');
const widthInput = document.querySelector('#width-input');
const heightInput = document.querySelector('#height-input');
const errorMsg = document.querySelector('#error-msg');

submitBtn.addEventListener('click', function() {
    if (widthInput.value <= 100 && widthInput.value > 0) {
        width = widthInput.value;
    }

    if (heightInput.value <= 100 && heightInput.value > 0) {
        height = heightInput.value;
    }

    if (width && height) {
        errorMsg.classList.add('hide');
        resetCanvas();
        renderCanvas(width, height);
    } else {
        errorMsg.classList.remove('hide');
        width = 0;
        height = 0;
        resetCanvas();
        renderCanvas(16, 16);
    }
})

function renderCanvas(w, h) {
    for (let i = 0; i < w; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

            for (let i = 0; i < h; i++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            }

        canvasEl.appendChild(row);
    }

    const cellEl = document.querySelectorAll('.cell');
    
    cellEl.forEach(function(cell){
        cell.addEventListener('mouseover', () => cell.style.backgroundColor = getRandomColor());
    });
}

function resetCanvas() {
    const rowEl = document.querySelectorAll('.row');
    rowEl.forEach((row) => row.remove());
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

renderCanvas(16, 16);

