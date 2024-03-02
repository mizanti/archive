let webItems = [];
let localItems = JSON.parse(localStorage.getItem("items"));

const inputEl = document.querySelector("#input-el");
const saveEl = document.querySelector("#save-el");
const entriesEl = document.querySelector("#entries-el");

if (localItems) {
    webItems = localItems;
    listEntries();
}

function save() {
    webItems.push(inputEl.value);
    localStorage.setItem("items", JSON.stringify(webItems))
    inputEl.value = "";
    listEntries();
}

function listEntries() {
    let list = "";
    for (let i = 0; i < webItems.length; i++) {
        list += `<li><a href="${webItems[i]}" target="_blank">${webItems[i]}</a></li>`  
    }
    entriesEl.innerHTML = list;
}

saveEl.addEventListener("click", save);