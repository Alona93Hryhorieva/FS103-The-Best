// console.log("Hello, world");

// alert("Hello");

// const userName = prompt("Введіть ім'я");
// console.log(userName);

// const num = 10;
// console.log(num);

// num = 20;
// console.log(num);

/*
const $ = 10;
const $num = 20;
const num$ = 30;
const _ = 40;
const num10 = 10;
const num_ = -20;
const first_name = "kiwi"; //worse
 */

// const firstName = "orange"; //good

// const 5num =10;
// const first-name ="mango";
// const name = "Kolya";
// const let = "hello";
// const const = "world";
// const false = false;

/*
const num =10;
const string ="hello";
const bool = true;
const sameDate = null;
const anotheDate= undefined;

console.log(typeof num);
console.log(typeof string);
console.log(typeof bool);
console.log(typeof sameDate);
console.log(typeof anotheDate);*/

// const num = 10;
// const float = 20.2;
// console.log(5 + 5);
// console.log(5 / 5);
// console.log(5 * 5);
// console.log(5 - 5);
// console.log(5 / 0);
// console.log(typeof (5 + "5"));
// console.log(5 + "5" - 10);
// console.log(5 / "2px");

// const num = "10";
// const float = "20.20";
// const px = "20px";
// // console.log(Number(num));
// // console.log(Number.parseInt(num));
// // console.log(+num);
// console.log(Number(float));
// console.log(Number.parseFloat(float));
// console.log(Number.parseInt(float));
// console.log(Number.parseFloat(px));

// const stA = "Hello";
// const stB = "world";
// const result = stA + " " + stB;
// console.log(result);

// const firstName = "Mango";
// const age = 25;
// const string = `Hello ${firstName} is age ${age}`;
// console.log(string);

function greet(name, age) {
  return `Hello ${name} is age ${age}`;
}

const message = greet("Mango", 30);
console.log(message);

const message1 = greet("Orange", 25);
console.log(message1);

const message2 = greet("Kiwi", 20);
console.log(message2);

function showMinNumber(a, b, c) {
  return Math.min(a, b, c);
}

const result = showMinNumber(21, 3, 8);
console.log(result);

function showMessage(product, price) {
  return `Обрано ${product}, ціна ${price} грн.`;
}

const res = showMessage("Яблука", 35);
console.log(res);
