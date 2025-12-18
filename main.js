// let num = 20;
// let thousand = 1000;
// let thousand = 1_000;
// let billion = 1_000_000_000;
// 100 = 1x10^2 ==> 100
// let thousand = 1e3;
// let seventyFiveThousand = 7.5e3;
// console.log(seventyFiveThousand);

// const ten = 2583; // 2x10^3+5x10^2+8x10^1+3x10^0
// const bi = 0b01001100; // 0100 1100 => 0x2^7 + 1x2^6 + 2^3+2^2 => 64+8+4
// console.log(bi);
// const oc = 0o1573; //1x8^3+5x8^2+7x8^1+3x8^0
// const hex = 0xff; // fx16^1+fx16^0 => 15x16+15 = 255
// // 0-9, a=>10, b=>11, c=>12, d=>13, e=>14, f=>15

// const bi = 0b01001100;
// const num = 256;
// const r = bi.toString();
// console.log(r);

// const num = -9.9;
// const r = Math.floor(num);
// console.log(r);
// const c = Math.ceil(num);
// // console.log(c);
// const round = Math.round(num);
// // console.log(round);
// const t = Math.trunc(num);
// console.log(t);

// 100 => 1
// 345
// const point = Math.floor(345/100)

// toFixed: convert number to string with digit
// Intl
// const n = 123;
// const r = n.toFixed(3);
// console.log(r);

// const r = isFinite(1 / 0);
// console.log(r);

// const isNotANumber = isNaN(null);
// console.log(isNotANumber);

// const random = Math.random(); // 0 - 0.9999999999999
// const dice = Math.ceil(Math.random() * 6); // 0 - 5.9999999999999999; 0-0.999, 1-1.999
// console.log(dice); // 1, 2, 3, 4, 5, 6

// const max = Math.max(1, 6, 3, 8, 9, 78, 3, 2, 54, 77, 333); //
// const min = Math.min(0, -9, 4, 7, -4);

// Math.cos()
// const s2 = Math.sqrt(4);
// console.log(s2);

// console.log(Math.PI);
// console.log(Math.PI * Math.pow(10, 2));

// i'm a hero
// const message = "i'm a hero \n my name: \t\t\t john"; // ',". \clg
// console.log('&lt;');

// const a = 'Hello';
// // console.log(a.length);
// a[1] = 'z';
// console.log(a[1]);

// convert first character to uppercase
// const name1 = 'jame';
// const result = name1[0].toUpperCase();
// console.log(result);

// const message = 'say good bye';
// // console.log(message.charAt(0));
// for (let c of message) {
//   console.log(c);
// }
// #1 c => 's'
// #2 c => 'a'

// const position = 'accounting';
// console.log(position.toUpperCase());
// const letter = 'BeIn';
// console.log(letter.toLowerCase());

// const m = 'Hello my friend Hello Welcome';
// const result = m.indexOf('Hello');
// const lastResult = m.lastIndexOf('Hello');
// const isIn = m.includes('friend', 10);
// console.log(result);
// console.log(lastResult);
// console.log(isIn);

// const person = 'jonathan';
// const start = person.startsWith('jhon');
// const end = person.endsWith('thani');
// console.log(start);
// console.log(end);

// const m = 'Hello world';
// const result = m.slice(0, 2);
// const result = m.slice(-3, -1);

// const result = m.substring(2, 4);

// const result = m.substr(1, 4);
// console.log(result);

// const a = '98'; // '00098'
// console.log(a.padStart(5, '0'));

// const phone = '0814325678';
// const p = '081-234-9876';
// const result = p.replaceAll('-', '');
// console.log(result);

// SET
// const arr = [2, 5, 4];
// const arr1 = new Array(2, 5, 4);

// const set = new Set([4, 7, 2, 4, 2]);
// const size = set.size;
// console.log(size);

// // add data to set
// set.add(0);
// console.log(set);
// set.add(7);
// console.log(set);
// // remove data from set
// // const r = set.delete(9);
// // console.log(set, r);
// // remove all data
// // set.clear();
// // console.log(set);
// // check if data exist in set
// const isExist = set.has(3);
// console.log(isExist);
// for (let data of set) {
//   console.log(data);
// }

// const result = set.keys();
// const result1 = set.values();
// const result2 = set.entries();
// console.log(result);
// console.log(result1);
// console.log(result2);

// const onlineUser = new Set();
// onlineUser.add('1');
// onlineUser.add('1');

// onlineUser.delete('1');

// onlineUser.has('id')

// MAP
// object 1.plain js object, 2.instance of a class
// const obj = {
//   name: 'jo',
//   birthDate: '1 jan 2022'
// };
// const map = new Map([
//   ['name', 'jo'],
//   ['birthDate', '1 jan 2022']
// ]);
// // console.log(obj);
// console.log(map);

// // map size
// console.log(map.size);

// // add data to map
// map.set('email', 'a@mail.com');
// console.log(map);

// remove data from map
// map.delete('name');
// console.log(map);

// // claear all data
// // map.clear();
// // console.log(map);

// // check if key exist in map
// const r = map.has('name');
// console.log(r);

// get data from key
// console.log(map.get('name'));

// const result = map.keys();
// const result1 = map.values();
// const result2 = map.entries();
// console.log(result);
// console.log(result1);
// console.log(result2);

// map.set(true, 'test boolean key');
// map.set(null, 'test null key');
// console.log(map);

// table
// '65' => 'A'
// '66' => 'B'

// card 52
// heart, spade, daimond, club
// A, 2, 3, ... , Jack, Queen, King
// 2Spade Biggest, 3Club Smallest
// const cardMap = new Map();
// cardMap.set(0, '3 Club');
// cardMap.set(1, '3 Diamond'),
//   cardMap.set(2, '3 Heart'),
//   // ...
//   cardMap.set(4, '4 Club');
// cardMap.set(50, '2 Heart');
// cardMap.set(51, '2 Spade');

// const cards = Array.from({ length: 52 }).map((el, i) => i);
// console.log(cards);
// function shuffleArray() {}

// const players = new Map([
//   [0, []],
//   [1, []],
//   [2, []],
//   [3, []]
// ]);
// console.log(players);

// let index = 0;
// for (let el of cards) {
//   if (index % 4 === 0) {
//     const oldCards = players.get(0);
//     oldCards.push(el);
//     players.set(0, oldCards);
//   }
//   index++;
// }

// console.log(players);
// for (let el of players.get(0)) {
//   console.log(cardMap.get(el));
// }

// for (let char of 'Hello') {
//   console.log(char);
// }

// const set = new Set([3, 7, 2, 6]);
// for (let value of set.values()) {
//   console.log(value);
// }
// const setValues = set.values();
// setValues.indexOf(7);

// const arrayLike = {
//   0: 'Test',
//   length: 1
// };

// const r = Array.from(arrayLike);
// console.log(r[0]);
// r.map(console.log);

// [1].map(cb); // #1 cb(1)
// [1].map(console.log); // #1 console.log(1, 0, [1])
// [1].map(el => console.log(el)) // #1 (el => console.log(el))(1)

// const arr = [0, 1, 0, 3, 2, 1, 0]; // [0, 1, 3, 2]
// const set = new Set(arr); // { 0, 1, 3, 2 }
// const iterable = set.values();
// // const result = Array.from(iterable);
// const result = Array.from(new Set(arr).values());
// console.log(result);

// create new Array from 0 => 51
// const arrayLike = { length: 52 };
// const result = Array.from(arrayLike).map((el, i) => i);
// console.log(result);

// const arrayLike = { length: 5 };
// const result = Array.from(arrayLike).map((el, i) => i + 10);
// console.log(result);

// function generatePaginationArrays(total, current) {
//   return Array.from({ length: total }).map((el, i) => i + current);
// }

// const mobilPagination = generatePaginationArrays(3, 2);
// console.log(mobilPagination);
// console.log((desktopPagination = generatePaginationArrays(5, 4)));
// console.log(desktopPagination);

// // ['a', 'a', 'a']
// console.log(Array.from({ length: 100 }).fill('a'));

// const message = 'mr.redrum';
// const arr = message.split('');
// console.log(arr);
// const arr1 = Array.from(message);
// console.log(arr1);

// Map, Set (get, set, delete, has)
// Date object
// timestamps ==> millisecond since 1 January 1970 00.00.00.000 UTC
// (Thailand UTC+7)
// console.log(d);
// const newYear = new Date(2025, 0, 31, 1, 30, 25, 456); // specified year, month, date, ... ,ms (at least two parameter)
// console.log(newYear);
// const d1 = new Date(0); // only one number parameter ==> timestamps
// console.log(d1);
// const d2 = new Date('2025-12-03:09:15:00:123z'); // string parameter => ISO8601 ==> parse date string to object
// console.log(d2);
// const d3 = new Date('2025/01/09');
// console.log(d3);

// const now = new Date(); // now
// method startwith get ex. getDate, getMonth, getFullYear, getHours, ... , getMilliseconds
// console.log(now.getDay()); // 0 - 6
// console.log(now.getTime());

// const before = new Date().getTime(); // timestime before for loop
// for (let i = 0; i < 10_000_000_000; i++) {}
// const after = new Date().getTime(); // timestime after for loop
// const diff = after - before;
// console.log(diff / 1000);

// const now = new Date();
// console.log(now.getUTCHours());

// set value: setFullYear, setMonth, setDate
// const now = new Date();
// // now.setHours(0);
// // now.setMinutes(0)
// // now.setSeconds(0)
// now.setHours(0, 0, 0);
// console.log(now);

// const now = new Date();
// const expireYear = now.getFullYear() + 1;
// // now.setFullYear(expireYear);
// console.log(now.toLocaleDateString()); // Fri 18 Dec 25
// const monthMap = new Map([
//   [0, 'January'],
//   [1, 'February'],
//   [11, 'December']
// ]);
// const dayMap = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday'
// ];

// console.log(now.getMonth());
// console.log(
//   dayMap[now.getDay()].slice(0, 3) +
//     ' ' +
//     now.getDate() +
//     ' ' +
//     monthMap.get(now.getMonth())
// );

// Do not re invent the wheel
// Intl
// const now = new Date();
// const r = new Intl.DateTimeFormat('th-TH', {
//   hour12: true,
//   timeStyle: 'full'
// });
// console.log(r.format(now));

// lib: moment, dayjs, date-fns

// Autocorrection
// const d = new Date(2025, 11, 31);
// d.setDate(d.getDate() + 5);
// console.log(d);
// const isPassed = d < new Date();
// console.log(isPassed);

// const aa = new Date().getTime();
// const a = Date.now();
// console.log(a == aa);

// const expiresDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
// console.log(expiresDate);

// const result = Date.parse('2025-09-01');
// const result = Date.parse('blablabla');
// console.log(result);

// JSON
// const o = {
//   name: 'Pepsi',
//   price: 50,
//   isEmpty: true,
//   description: null,
//   isNotDefined: undefined,
//   getName() {
//     return this.name;
//   },
//   size: ['330ml', '500ml', '1000ml'],
//   distribution: {
//     name: 'a coltd',
//     address: 'bangkok'
//   }
// };

// const data = JSON.stringify(o);
// console.log(o);
// console.log(data, typeof data);
// console.log(JSON.stringify(['tesss']));

// const json = '{ "name": "fanta", "price": true }';
// console.log(JSON.parse(json));

// const a = '12345';
// a.toFixed();

// try {

//   const data = fetchDataFromDatabase() // connect to database
// } catch (error) {
//   // error occured from database
//   // save error to logged file
// }

// try .. catch
// try {
//   const a = '12345';
//   a.toFixed();
// } catch (error) {
//   // console.log('Error occured');
//   console.log(error);
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.cause);
//   // if error occured in try block, errro caught by catch block
// }

// console.log('run after error');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     const e = new Error('invalid input, input must be a number'); //
//     // throw e;
//     // throw 20;
//   }
//   return a + b;
// }

// try {
//   console.log(sum(3, undefined));
// } catch (error) {
//   console.log('error occured');
//   console.log(error.message);
// }

// try {
//   // try this code
// } catch (error) {
//   // error handling
// } finally {

// }

// REST PARAMETER (...)
// Math.max(2, 7, 3, 6, 9, 12, 34, 23, 37,11)
// max(2, 7, 3, 6, 9, 12, 34, 23, 37, 11, 80, 75, 43, 23);
// function max(...input) {
//   console.log(input);
// } // input => [2, 7, 3, 6, 9, 12, 34, 23, 37, 11]

// [3, 4, 5, 7, 2].splice(1, 2, 'b', 'a', 'c')
// splice(1, 5, '1', 'f', 'g', 'h'); // index ==> 1, deleteCount ==> 5,
// addedElement ==> ['1', 'f', 'g', 'h']
// function splice(index, deleteCount, ...addedElement) {}

// function rest(a, ...restParams, c, d, ) {} // rest must be last in param list

// SPREAD SYNTAX (...)
// const obj = {
//   a: 1,
//   b: 'hello'
// };

// const cloneObj = { ...obj }; // { a: 1, b: 'hello' }
// const copyObjPart = { ...obj, c: 25, d: null }; // { a: 1, b: 'hello', c: 25, d: null }
// const duplicateKey = { ...obj, a: 500 }; // { a: 1, b: 'hello', a: 500 } ==> { b: 'hello', a: 500 }
// console.log(duplicateKey);

// const product = {
//   name: 'Lay',
//   price: 30,
//   description: 'aaaaa',
//   image: 'img'
// };
// function updateProduct(newValue) {
//   const updatedProduct = { ...product, ...newValue };
//   //   { name: 'Lay', price: 32, description: 'aaaaa', image: 'img' }
// }

// updateProduct({ price: 32 });

// const arr = ['hello', 'welcome'];
// const clone = [...arr]; // ['hello', 'welcome']
// const newAddedArray = [...arr, 'hi']; // ['hello', 'welcome', 'hi']
// const anotherArr = ['thank you', 'sawasdee'];
// const concatArray = [...arr, ...anotherArr]; // ['hello', 'welcome', 'thank you', 'sawasdee']

// const nums = [2, 7, 5, 6, 9, 0, 3, 4, 7];
// const max = Math.max(...nums); // Math.max(2, 7, 5, 6, 9, 0, 3, 4, 7)
// console.log(max);
// const set = new Set([4, 7, 8, 4, 3]);
// const arr = [...set];
// console.log(arr);
// const map = new Map([
//   [1, 'One'],
//   [2, 'Two']
// ]);
// console.log([...map]);

// DESTRUCTURING
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 25,
//   isActive: true,
//   address: {
//     district: 'Phayathai',
//     province: 'Bangkok',
//     postalCode: '10100'
//   }
// };

// const {
//   firstName: fname,
//   lastName,
//   address: { district, province, postalCode = '00000' },
//   email = 'guest@mail.com'
// } = person;
// // const { firstName, lastName } = { firstName: 'John', lastName: 'Doe', ... }

// // console.log(firstName);
// console.log(fname);
// console.log(lastName);
// console.log(district);
// console.log(province);
// console.log(email);
// console.log(postalCode);

// // const fname = person.firstName;
// // const lastName = person.lastName;
// // const district = person.address.district;
// // const province = person.address.province;

// const arr = ['john', 'doe', 67, 'a@mail.com'];
// // const [firstName, lastName, age, email, gender = 'unknown'] = arr;
// const [, , age, email, gender = 'unknown'] = arr;
// console.log(gender);
// // const firstName = arr[0];
// // const lastName = arr[1];
// // const age = arr[2];
// // const email = arr[3];

// const profile = {
//   id: 1,
//   image: ['url1', 'url2', 'url3'],
//   wishlish: [
//     { name: 'MacBook', price: 3900, tag: ['Notebook', 'IT'] },
//     { name: 'Lenovo', price: 399, tag: ['Notebook', 'Lightweight'] }
//   ]
// };

// const {
//   // wishlish: [
//   //   { price: macBookPrice },
//   //   {
//   //     tag: [, lighweigth]
//   //   }
//   // ]
//   address: { province }
// } = profile;
// console.log(address);
// console.log(macBookPrice, lighweigth);
// console.log(mainProfileImage, secondProfileImage);
// const macBookPrice = 3900
// const mainProfileImage = profile.image[0]; // url1

const registerInput = {
  email: 'a@mail.com',
  password: '123456',
  firstName: 'john',
  birthDate: new Date('2000-09-03')
};

// const { password, email, ...value } = registerInput;
// // value ==> {  firstName: 'john', birthDate: new Date('2000-09-03')}
// console.log(value);

const { gender: sex = 'unknown' } = registerInput;

function test({ name, age }) {
  console.log(name);
  console.log(age);
}

test({ name: 'jack', age: 32 });
