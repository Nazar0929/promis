// Завдання 1

// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.



// const delay = ms => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// delay(2000).then(logger);
// delay(1000).then(logger);
// delay(1500).then(logger);





// Завдання 2

// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала всього два параметри allUsers і userName і повертала проміс.



// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//     return new Promise ((resolve) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   resolve(updatedUsers);
//     })

// };


// const logger1 = updatedUsers => console.table(updatedUsers);

// /*
//  * Зараз працює так
//  */
// toggleUserState(users, 'Mango', logger1);
// toggleUserState(users, 'Lux', logger1);

// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, 'Mango').then(logger1);
// toggleUserState(users, 'Lux').then(logger1);





// Завдання 3

// Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError, а приймала всього один параметр transaction і повертала проміс.



// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//     return new Promise ((resolve, reject) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;
// console.log(canProcess);

//     if (canProcess) {
//       resolve(transaction.id, delay);
//     } else {
//       reject(transaction.id);
//     }
//   }, delay);
//     })

// };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };


// /*
//  * Повинно працювати так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);










// const f1Drivers = [
//   "Max Verstappen",
//   "Lewis Hamilton",
//   "Charles Leclerc",
//   "Lando Norris",
//   "Fernando Alonso",
//   "Carlos Sainz",
//   "Sergio Perez",
//   "George Russell",
//   "Oscar Piastri",
//   "Valtteri Bottas"
// ];


// function run(racer) {
//   return new Promise (resolve => {
//     const time = Math.floor(Math.random() * 5000) + 1000;
//     setTimeout(() => {
//       resolve ({racer, time})
//     }, time)
//   })
// }

// // run(f1Drivers [0]).then(result => console.log(result))

// const arrayPromise = f1Drivers.map(driver => run(driver));
// // Promise.all(arrayPromise).then(result => {console.log(result)
// // })


// Promise.race(arrayPromise).then((result => {console.log(result);
// }))





// Завдання 2

// "Змагання промісів"



// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.



// Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.



// function randomDelay(value) {
//   const delay = Math.floor(Math.random) * (5000 - 1000 + 1) + 1000;
//   return new Promise (resolve => {
//     setTimeout(() => {
//     resolve({value, delay}) 
//     },delay)
//   })
// }

// randomDelay("123").then(result => console.log(result));

// const promise = [
//   randomDelay("1"),
//     randomDelay("2"),
//       randomDelay("3"),
//         randomDelay("4"),
//           randomDelay("5"),
// ]

// Promise.all(promise).then(result => console.log(result))