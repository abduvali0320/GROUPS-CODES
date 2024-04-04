// let k = "salom, olam";

// console.log(k.split("").reverse().join(""));

// let son = 115.99999999999999999999999999999999;
// console.log(Math.floor(son));
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(BigInt(50));

// console.log(Math.round(20.5));

// let son = BigInt(5444);
// console.log(son);

// Number;
// String;
// BigInt;
// undefined;
// Boolean;

// let k_1 = Symbol("salom");
// let k_2 = Symbol("salom");
// console.log(k_1 === k_2);

// console.log(typeof null);

// let m = [10, 4, 5, "salom", "hello", false, [], {}];
// let m_1 = m.map((_, i) => {
//   return i;
// });

// console.log(m_1);
// let m_2 = m.forEach((index) => {
//   return index;
// });

// console.log(m_2);
// console.log(m.forEach());

// let m2 = ["salom", true, false, "yigirma", "hello", false, [], {}]; //[10, 4, 5, "salom", "hello", false, [], {}, ["salom", true, false, "yigirma", "hello", false, [], {}]];
// // let m_2 = m.concat(m2);
// m.push(...m2)
// console.log(m);

// let people = [
//   {
//     yosh: 17,
//     ism: "Karim",
//   },
//   {
//     yosh: 15,
//     ism: "Abdulaziz",
//   },
//   {
//     yosh: 21,
//     ism: "Abror",
//   },
// ];

// let k = people.find((value) => value.yosh === 2);

// if(k) {
//     console.log(k);
// }
// else {
//     console.log('qiymat topilmadi');
// }

// if(0) {
//     console.log('son bor');
// }

// const person = {
//   age: 17,
//   name: "abror",
//   city: "Namangan",
//   phone: ["65435465", "54654654"],
// };

// console.log('salom');
// // 0 1 2 3 4
// for (let k in person) {
//   console.log(person[key]); // age, name, city, phone
// }

// let kalit = "age";
// console.log(person[kalit]);

// person.age
// person.phone
// person.name

// for (const k of "5555") {
//   console.log(k);
// }

// let btns = document.querySelectorAll("button");
// console.log(btns);

// function removeAttr() {
//   btns.forEach((btn) => {
//     // btn.classList.remove("active");
//     btn.removeAttribute("class");
//   });
// }

// btns.forEach((btn) => {
//   btn.onclick = function (e) {
//     removeAttr();
//     // e.target.classList.add("active");
//     // e.target.getAttribute ("class", "active");
//     e.target.setAttribute("class", "active");
//     console.log(e.target.getAttribute("class"));
//   };
// });

// bnts[0].onclick = function () {
//   console.log("salom");
// };
// bnts[1].onclick = function () {
//   console.log("salom");
// };
// bnts[2].onclick = function () {
//   console.log("salom");
// };
// bnts[3].onclick = function () {
//   console.log("salom");
// };

// const hodisa = (param, ...p) => {
//   p[p.length - 1] = "hello";
//   console.log(param, p);
// };

// hodisa(5, 58, "salom", "dfewf", "few", "fef");

// let obj = {
//   name: "john",
//   age: 19
// }

// let m = [55, 5, true, false, undefined, NaN]
// for of //  value

// rest;
// const sayName = (...a) => {
//     console.log(a);
// };
// sayName(55, 88, 588);

