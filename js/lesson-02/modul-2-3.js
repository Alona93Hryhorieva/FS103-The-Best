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