import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// GLOBAL VARIABLES

const appSettings = {
    databaseURL: "https://addtocart-a2ae5-default-rtdb.firebaseio.com"
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingDb = ref(database, "items");

const inputEl = document.querySelector("#input-el");
const addBtn = document.querySelector("#add-btn");
const contentEl = document.querySelector("#content");

//FUNCTIONS

addBtn.addEventListener("click", addCart);

onValue(shoppingDb, function (snapshot) {
    let itemsArr = Object.values(snapshot.val());
    contentEl.innerHTML = "";
    for (const item of itemsArr) {
        renderOut(item);
    }
});

function addCart() {
    push(shoppingDb, inputEl.value);
    inputEl.value = "";
};

function renderOut(value) {
    contentEl.innerHTML += `<li>${value}</li>`;
};