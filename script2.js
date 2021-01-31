// 1.
// const getItemsString = function (array) {
//     'use strict';
//     // Write code under this line

//     let result = '';
//     if (array.length === 0) {
//         return result;
//     }
//     else for (let i = 0; i <= array.length - 1; i += 1) {
//         result += `${i + 1} - ${array[i]}\n`;
//     }
//     return result;

// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// /*
// '1 - Mango
// 2 - Poly
// 3 - Ajax
// 4 - Lux
// 5 - Jay
// 6 - Kong
// '
// */

// console.log(getItemsString([5, 10, 15]));
// /*
// '1 - 5
// 2 - 10
// 3 - 15
// '
// */
// 2.
// const calculateEngravingPrice = function (
//   message = '',
//   pricePerWord = 0, // Write code in this line
// ) {
//   let messageSplited = message.split(' ');
//   let quantity = messageSplited.length;
//   let allPhrasePrise = quantity * pricePerWord;
//   return allPhrasePrise;
// };
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );
// 3.
// const findLongestWord = function (string = '') {
//   // Write code under this line

//   let words = string.split(' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'
// 4.

// const formatString = function (string, maxLength = 40) {
//   // Write code under this line
//   let message = '';

//   if (string.length < maxLength) {
//     message = string;
//   } else {
//     message = string.slice(0, maxLength);
//     message = `${message}...`;
//   }
//   return message;
// };

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );

//5.
// const checkForSpam = function (str) {
//     'use strict';
//     // Write code under this line

//     const string = str.toLowerCase();
//     const checkedForSpam = string.includes('spam') || string.includes('sale') ? true : false;
//     return checkedForSpam;
// }

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
//6.
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его числами из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.По завершению перебора массива array возвращается массив numbers.
// 1. Напиши функцию mapArray(array) с одним параметром array -  массив чисел.
// 2. numbers = числами из массива array умноженными на 10
// 3. for для новых значений
// 4. return numbers
// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]
//6.
// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]
//7.
// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line

//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

//9.
// function isLoginValid(login, min = 4, max = 16) {
//     // Write code under this line

//     let checkLogin = login.length >= min && login.length <= max;
//     return checkLogin;
// }

// function isLoginUnique(allLogins, login) {
//     'use strict';
//     // Write code under this line

//     let checkUniqueLogin = true;
//     for (let i = 0; i < allLogins.length; i += 1) {
//         if (login === allLogins[i]) { checkUniqueLogin = false; }
//     };
//     return checkUniqueLogin;
// }

// function addLogin(allLogins, login) {
//     'use strict';
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;
//     // Write code under this line

//     if (!isLoginValid(login)) {
//         message = ERROR;
//     }
//     else if (!isLoginUnique(allLogins, login)) {
//         message = REFUSAL;
//     }
//     else {
//         allLogins.push(login);
//         message = SUCCESS;
//     }
//     return message;

// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Poly'));
// // 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles'));
// // 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'
