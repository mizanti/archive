let webItems = [];
const localItems = JSON.parse(localStorage.getItem("items"));

const inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#save-btn");
const entriesEl = document.querySelector("#entries-el");
const deleteBtn = document.querySelector("#delete-btn");

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

function deleteAll() {
    webItems = [];
    localStorage.clear();
    listEntries();
}

function listEntries() {
    let list = "";
    for (let i = 0; i < webItems.length; i++) {
        list += `<li><a href="${webItems[i]}" target="_blank">${webItems[i]}</a></li>`  
    }
    entriesEl.innerHTML = list;
}

saveBtn.addEventListener("click", save);
deleteBtn.addEventListener("click", deleteAll);