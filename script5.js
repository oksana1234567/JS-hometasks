// Write code under this line

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function () {
//     return `login : ${this.login}, email: ${this.email}`
// };
// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

//2.
// Write code under this line
// const User = function (name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
// };

// User.prototype.getInfo = function () {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
// };

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo);
// // 'function'

// const poly = new User('Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
// 3.
// Write code under this line

// class Storage {
//     constructor(goods) {
//         this.items = goods;
//     }

//     getItems() {
//         console.log(this.items);
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         const index = this.items.indexOf(item);
//         if (index > 0) {
//             this.items.splice(index, 1);
//         }
//     }
// }

// console.log(typeof Storage);
// // 'function'

// const goods = [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор'
// ];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// Write code under this line
// 4.
// class StringBuilder {
//   constructor(_value) {
//     this._value = _value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = this._value + str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad = function (str) {
//     this.append(str);
//     this.prepend(str);
//   };
// }

// console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// 5.
// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//   }
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 } = {}) {
//     this.speed = speed;
//     this._price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price() { return this._price; }
//   set price(value) { this._price = value; }
//   turnOn() { this.isOn = true; }
//   turnOff() { this.isOn = false; this.speed = 0; }
//   accelerate(value) {
//     if (this.speed + value < this.maxSpeed) { this.speed += value; } else { this.speed = this.maxSpeed; }
//   }
//   decelerate(value) {
//     let newSpeed = this.speed - value;
//     if (this.speed - value >= 0) { this.speed = this.speed - value; } else { this.speed = 0; }
//   }
//   drive(hours) { this.distance += hours * this.speed; }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// // console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// // console.log(mustang.price); // 2000
// mustang.price = 4000;
// // console.log(mustang.price); // 4000