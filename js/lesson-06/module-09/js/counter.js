const controlsBtn = document.querySelector(".js-counter-controls");
const display = document.querySelector(".js-counter-value");
const savesBtn = document.querySelector(".js-save");

let counter = 0;
const LS_KEY = "counter";
controlsBtn.addEventListener("click", onControlsBtnClick);
savesBtn.addEventListener("click", onSavesBtnClick);

function onControlsBtnClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const clickBtn = event.target.dataset.action;

    if (clickBtn === "decrease") {
        counter -= 1;
    }
    if (clickBtn === "increase") {
        counter += 1;
    }
    if (clickBtn === "reset") {
        counter = 0;
    }

    display.textContent = counter;
}

function onSavesBtnClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const clickBtn = event.target.dataset.action;
    if (clickBtn === "save") {
        localStorage.setItem(LS_KEY, counter);
    }

    if (clickBtn === "clear-save") {
        localStorage.removeItem(LS_KEY);
    }
}

function renderPage() {
    const saveData = Number(localStorage.getItem(LS_KEY));

    if (saveData) {
        counter = saveData;
        display.textContent = counter;
    }
    console.log("saveData: ", saveData);
}
renderPage();
