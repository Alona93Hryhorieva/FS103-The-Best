//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка єн буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

//const str = "abcde";
// if (str.startsWith("b")) {
// console.log("так");
// } else {
// console.log("ні");
//}

//function checkString(string) {
//if (str.startsWith("b")) {
//return "так";
//} else {
//return "ні";
//}
//}

//console.log(checkString(str));

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const firstName = "Mar";
const lastName = "Savchenko";
const firstNameLength = firstName.length;
console.log("firstName: ", firstNameLength);
const lastNameLength = lastName.length;
console.log("lastNameLength: ", lastNameLength);
// if (firstNameLength > 4 && lastNameLength > 5) {
//     console.log(firstNameLength + lastNameLength);
// } else {
//     console.log("неможливо виконати умову");
// }

// firstNameLength > 4 && lastNameLength > 5 ? console.log(firstNameLength + lastNameLength) : console.log("неможливо виконати умову");

// //TODO: 3 ===================================
// // Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// // До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = 99;
// if (ageMaxim >= 0 && ageMaxim <= 16) {
//     console.log("children");
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//     console.log("adult");
// } else if (ageMaxim >= 61 && ageMaxim <= 100) {
//     console.log("pensioner");
// } else {
//     console.log("gorec");
// }

//TODO: 4 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt("What do you want to drink?").toLowerCase();

// function orderDrink(bevarage) {
//   let price = 0;

//   switch (bevarage) {
//     case "coffee":
//       price = 50;
//       break;

//     case "tea":
//       price = 30;
//       break;

//     case "juice":
//       price = 40;
//       break;

//     default:
//       alert("error");
//   }
//   alert(` Your order ${price} `);
// }

// orderDrink(drink);

// TODO: 5 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// const num = 1000;
// let count = 0;

// while (num >= count) {
//   console.log(count);
//   count++;
// }

// let num = Number.parseFloat(prompt("write a number"));
// while (num <= 100) {
//   num = Number.parseFloat(prompt("write a number"));
// }

//TODO: 9 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****
// let start = "*";

// for (let i = 0; i <= 7; i++) {
//   console.log(start);
//   start += "*";
// }

//TODO: 10 ===================================
// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.

const num1 = 1;
const num2 = 100;

// for (let i = num1; i <= num2; i++) {
//   if (i === 49) {
//     console.log(i);
//     break;
//   }
//   console.log(i);
// }

// for (let i = num1; i <= num2; i++) {
//   console.log(i);
//   if (i !== 49) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
