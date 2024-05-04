//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }
// function greet() {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve('hello world')
//     }, 2000);
//   })
// }

// greet().then(response => {
//   console.log(response);
// }).catch(error => {
//   console.log(error);
// }) 


//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      //   console.log(data);
      res(data);
    }, 1000);
  });

// const array = [];

// getData().then(response => {
//   array.push(response);
//   return getNewData();
// }).then(response => {
//   array.push(response);
//   return getAnotherData();
// }).then(response => {
//   array.push(response);
//   return getLastData();
// }).then(response => {
//   array.push(response);
//   console.log(array);
// })



// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(response => {
//   console.log(response);
// })

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */


// function countWithDelay(delay, times, interval) {
//   let counte = 0;
//   function logCount() {
//     counte += 1;
//     if (counte > times) {
//       return;
//     }
//     setTimeout(logCount, interval); 
//     console.log(counte);
//   }
//   createPromise(delay, logCount);
// }

// function createPromise(delay, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, delay);
//   }).then(() => callback())
// }
// countWithDelay(1000, 5, 3000);



//TODO:====================04==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt('Paste value');
function checkValue(value) {
  return new Promise((resolve, reject) => {
    if (!value || isNaN(value)) {
      return reject("Error !!!");
    } 
    
    if (value % 2 === 0) {
      setTimeout(() => {
        resolve("even")
      },1000)
    } else {
      setTimeout(() => {
        resolve("odd")
      },2000)
    }
  })
  
}
checkValue(value).then(response => console.log(response)).catch(error => console.log(error)).finally(() => console.log("finally")
)