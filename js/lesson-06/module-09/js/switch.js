const themeSwitcher = document.querySelector("#theme-switch");
const body = document.body;
const LS_KEY = "switch";

themeSwitcher.addEventListener("click", onChekBoxClick);

function onChekBoxClick(event) {
  if (event.target.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem(LS_KEY, "dark");
  } else {
    // body.classList.add("light");
    //   body.classList.remove("dark");
    body.classList.replace("dark", "light");
    localStorage.setItem(LS_KEY, "light");
  }
}

function renderPage() {
  const saveData = localStorage.getItem(LS_KEY);
  if (saveData === "dark") {
    body.classList.replace("light", "dark");
    themeSwitcher.checked = true;
  } else {
    body.classList.replace("dark", "light");
  }
}
renderPage();
