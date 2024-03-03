import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


const appSettings = {
    databaseURL: "https://addtocart-a2ae5-default-rtdb.firebaseio.com"
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingDb = ref(database, "items");

const inputEl = document.querySelector("#input-el");
const addBtn = document.querySelector("#add-btn");
const contentEl = document.querySelector("#content");


addBtn.addEventListener("click", addCart);

onValue(shoppingDb, function (snapshot) {
    contentEl.innerHTML = "";
    if (snapshot.exists()) {
        let itemsArr = Object.entries(snapshot.val());
        for (const item of itemsArr) {
            renderOut(item);
        }        
    }
});

function addCart() {
    if(inputEl.value != "") {
        push(shoppingDb, inputEl.value);
        inputEl.value = "";
    }
};

function renderOut(value) {
    let addEl = document.createElement("li");
    addEl.textContent = value[1];
    contentEl.append(addEl);

    addEl.addEventListener("click", function(){
        let delItemId = ref(database, `items/${value[0]}`);
        remove(delItemId);
    })
};