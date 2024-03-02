let sessionSaves = [];
const localSaves = JSON.parse(localStorage.getItem("saves"));

const inputEl = document.querySelector("#input-el");
const addBtn = document.querySelector("#add-btn");
const content = document.querySelector("#content");
const delBtn = document.querySelector("#del-btn");

addBtn.addEventListener("click", addCart);
delBtn.addEventListener("click", delCart);

if (localSaves) {
    sessionSaves = localSaves;
    renderOut(sessionSaves);
}

function addCart(){
    sessionSaves.push(inputEl.value);
    localStorage.setItem("saves", JSON.stringify(sessionSaves));
    inputEl.value = "";
    renderOut(sessionSaves);
}

function delCart(){
    localStorage.clear();
    sessionSaves = [];
    renderOut(sessionSaves);
}

function renderOut(value){
    let render = "";
    for (let i = 0; i < sessionSaves.length; i++) {
        render += `<li>${value[i]}</li>`
    }
    content.innerHTML = render;
}