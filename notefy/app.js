let storage = [];

const inputEl = document.querySelector("#input-el");
const saveEl = document.querySelector("#save-el");
const entriesEl = document.querySelector("#entries-el");

saveEl.addEventListener("click", save);

function save() {
    storage.push(inputEl.value);
    inputEl.value = "";
    listEntries();
}

function listEntries() {
    let list = "";
    for (let i = 0; i < storage.length; i++) {
        list += `<li><a href="${storage[i]}" target="_blank">${storage[i]}</a></li>`  
    }
    entriesEl.innerHTML = list;
}
