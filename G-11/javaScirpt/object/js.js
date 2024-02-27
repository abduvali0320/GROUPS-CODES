// let person = {} // bosh object

// object -> nomning xususiyatlar to'plamini saqlab turgan muhit object deyiladi

// object key va value lardan tashkil topadi(uning keylari orqali value larini tutib olinadi)

// let person = {
//   ism: 'Ismoil',
//   'familya': 'Erkinboyev',
//   'yosh': 22,
//   sochRangi: 'qora',
//   tugilganSana: 2002,
//   tugilganJoy: {
//     shahar: 'Toshkent',
//     tuman: 'Chilonzor'
//   },
//   telefonNomer: ['+998995550202', '+998997541010'],
//   rasm: ['rasm.png', 'img.png'],
// }
// let key_name = 'familya'
// console.log(person.yosh);

// console.log(person.telefonNomer[1]);
// person.ism = 'Doniyor'
// person.familya = 'Shavkatovich'
// console.log(person);

// person.telefonNomer[2] = '+998995550101'
// person.tugilganJoy = 'Namangan'

// let sonArray = [25, 10, 1009, 70, 911, 98]

// for in funksiyasi faqat obejct uchun ishlaydi va u keylarni qaytaradi
// for in funksiyasi obejct va array uchun ishlaydi va u qiymatlarni qaytaradi

// for (let i of sonArray) {
//   // console.log(person[i]);
//   console.log(sonArray[i]);
// }


// 1.  functionning parametriga boshlangich, oxirgi nuqtalar va qadam berilgan, shu parametrlar bo'yicha tsikl xosil qiladigan funksiya tuzing
// example: my_tsikl_func(1, 15, 5);
// rezult: 1
//         6
//         11

// 2.ixtiyoriy massivning ichidan number tipidagi qiymatlarni ajratib va yangi massvida chiqarib beruvchi pametrlik funksiya tuzing
// example_1: pull_to_number(['salom', 10, 88, 'frenf', NaN, 'frfreg', NaN, undefined, null, 55]);
// example_2: pull_to_number(['hello', 'kifreg', NaN, 77, NaN, undefined, 12, 11, null, 11]);
// rezult_1: [10, 88, 55]
// rezult_2: [77, 12, 11, 11]

// 3.ixtiyoriy massining o'rtasiga yangi qiymat qo'shadigan funksya tuzing;  // push_to_middle(array, qiymat)

// example_1: push_to_middle(['salom', 'hello', 10, 18, undefined], ['salom', 'olam']);
// example_2: push_to_middle(['hello', 'kifreg', 12, 11, null, 11], [NaN, 77, NaN, undefined]);

// rezult_1: ['salom', 'hello', 'salom', 'olam', 10, 18, undefined];
// rezult_2: ['hello', 'kifreg', NaN, 77, NaN, undefined, 12, 11, null, 11]


// function k(a = 1, b = 10, p = 1) {
//   for (let i = a; i <= b; i += p) {
//     console.log(i);
//   }
// }

// // k(5, 70, 9)
// k()

// let tel = {
//   memory: 64,
//   RAM: 12,
//   device: "samsung",
//   color: "black",
//   xotira: function () {
//     return (`ram : ${this.RAM} memory: ${this.memory}`)
//   },
// }

// tel = { ...tel, name: 'salom' }


// let iphone = new Object(tel)

// iphone = {
//   ...iphone,
//   krjngkr: 128
// }

// console.log(iphone.xotira());

// let m = [12, 10]
// let m1 = [55, 70]

// m = [...m, ...m1]
// console.log(m);