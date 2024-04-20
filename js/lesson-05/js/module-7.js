// console.log(10);
// const title = document.querySelector("h1");
// console.log(title);

// title.classList.add("active");
// title.style.color = "tomato";

const list = document.querySelector("ul");
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// console.log(title.nextElementSibling);

// const items = document.querySelectorAll("li");
// console.log(items);

// items.forEach(li => li.classList.add("active"));

// list.style.listStyle = "none";

// list.lastElementChild.textContent = "React";

// //TODO:=========task-01=================
//  3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

const text = `Об'єктна модель документа  незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const words = text.split(/\s+/); // Розбиваємо текст на слова за допомогою роздільників (пробіли, коми, крапки і т.д.)

const paragrafEl = document.createElement("p");
 console.log(words);

words.forEach(world => {
    if (world.length > 8) {
        const spanEl = document.createElement("span");
        spanEl.style.backgroundColor = "yellow";
        spanEl.textContent = world + " ";
        paragrafEl.appendChild(spanEl);
    } else {
        paragrafEl.innerHTML += world + " ";
    }
})
 console.log(paragrafEl);

list.after(paragrafEl);

//TODO:=========task-02=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const divContainer = document.createElement("div");
divContainer.classList.add("number-container");

const boxes = 100;
for (let index = 1; index <= boxes; index++) {
    // console.log(index);
    const div = document.createElement("div");
    div.classList.add("number");
    div.textContent = randomNumber();

    if (div.textContent % 2 === 0) {
        div.classList.add("even");
    } else {
        div.classList.add("odd");
    }
    divContainer.appendChild(div);
}
// console.log(divContainer);

const section = document.querySelector("section");
section.append(divContainer);
