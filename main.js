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
const obj = {
  name: 'jo',
  birthDate: '1 jan 2022'
};
const map = new Map([
  ['name', 'jo'],
  ['birthDate', '1 jan 2022']
]);
// console.log(obj);
console.log(map);

// map size
console.log(map.size);

// add data to map
map.set('email', 'a@mail.com');
console.log(map);

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
