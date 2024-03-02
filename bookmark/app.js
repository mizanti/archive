let webItems = [];
const localItems = JSON.parse(localStorage.getItem("items"));
const tabs = [
    {"url": "www.google.com"}
]

const inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#save-btn");
const entriesEl = document.querySelector("#entries-el");
const deleteBtn = document.querySelector("#delete-btn");
const saveTabBtn = document.querySelector("#save-tab-btn");

if (localItems) {
    webItems = localItems;
    render(webItems);
}

function save() {
    webItems.push(inputEl.value);
    localStorage.setItem("items", JSON.stringify(webItems))
    inputEl.value = "";
    render(webItems);
}

function saveTab() {
    chrome.tabs.query({
        active:true, currentWindow:true
    }, function(tab) {
        webItems.push(tab[0].url);
        localStorage.setItem("items", JSON.stringify(webItems));
        render(webItems); 
    });
}

function deleteAll() {
    webItems = [];
    localStorage.clear();
    render(webItems);
}

function render(entries) {
    let list = "";
    for (let i = 0; i < entries.length; i++) {
        list += `<li><a href="${entries[i]}" target="_blank">${entries[i]}</a></li>`  
    }
    entriesEl.innerHTML = list;
}

saveBtn.addEventListener("click", save);
deleteBtn.addEventListener("click", deleteAll);
saveTabBtn.addEventListener("click", saveTab);