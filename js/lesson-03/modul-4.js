//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const person = {
//     userName: "Jason",
//     hobby: "football",
//     age: 25,
//     greet() {
//         console.log("greet: ", `Hello, ${this.userName}`);
//     },
// };
// const user = Object.create(person);
// user.userName = "Mango";
// console.log("user: ", user.greet());
// console.log(person.greet());
// person.hobby = "skydiving";
// console.log("person: ", person);
// person.mood = "happy";
//TODO:============task-02==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// const ractangle = {
//     width: 10,
//     height: 4,
//     calculateArea() {
//         return this.width * this.height;
//     },
// };

// console.log(ractangle.calculateArea());

//TODO:============task-03==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.
// const store = {
//     goods: ["apple", "banana", "grapes", "orange", "kiwi"],
//     hasProduct(product) {
//         return this.goods.includes(product);
//     },
//     addProduct(product) {
//         this.goods.push(product);
//         console.log(this.goods);
//     },
// };
// console.log(store.hasProduct("tomato"));
// store.addProduct("tomato");

//TODO:============task-04==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// console.log(cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-05======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// console.log(getBool(obj, 'car')); // true

//TODO:============task-06======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// console.log(sum);

//TODO:============task-07======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//! Робота з масивом об'єктів
//TODO:============task-8==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// console.log(findTopStudent(students));
