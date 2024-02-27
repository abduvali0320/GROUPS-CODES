let meva = 'olma',
  meva1 = 'nok',
  meva2 = 'shaftoli',
  meva3 = 'banan'
// console.log(meva, meva1, meva2, meva3);

// let mevalar = []  //=> bosh massiv

// massiv => bir yoki bir necha qiymatlarni bir nomga o'zlashtirilishi massiv deyiladi
// console.log(mevalar[1].includes('n'));
// console.log(mevalar[0]);
// console.log(mevalar[1]);
// console.log(mevalar[2]);
// console.log(mevalar[3]);

// let mevalar = ['olma', 'nok', 'shaftoli', 'banan']
// for (let i = 0; i < mevalar.length; i++) {
//   if (mevalar.at(i).length > 4) {
//     console.log(mevalar[i]);
//   }
// }

// let mevalar = ['olma', 'nok', 'shaftoli', 'banan', 'anor', 'apelsin', 'anjir', 'ananas', 'behi']
// console.log(mevalar.at(-1)); massivning berilgan indexdagi qiymatni qaytaradi
// console.log(mevalar.includes('nok')); // berilgan qiymatni massiv ichida bor yoki yo'qligini tekshiradi

// console.log(mevalar.indexOf('66')); // berilgan qiymat massiv ichida borlgini va uni indexni qaytaradi, yo'q bolsa -1 qaytaradi
// console.log(mevalar.slice(3, 5)); // berilgan index bo'yicha massivni qirqib beradi
// console.log(mevalar.splice(3, 2)); // berilgan index bo'yicha nechta qiymat bolsa shunchasini qaytaradi
// console.log(mevalar.reverse()); // massivni teskariga aylantrb beradi
// mevalar.unshift('qovun', 'tarvuz', 'qovoq') // massivning boshiga qiymat qo'shadi
// mevalar.shift() // massivning boshidan qiymat oladi
// mevalar.pop() // massivning oxridan qiymat oladi
// mevalar.push('qovun', 'tarvuz', 'qovoq') // massivning oxriga qiymat qo'shadi
// console.log(mevalar);
// mevalar = mevalar + 'tarvuz'
// console.log(mevalar);

// let malumotlar = [NaN, undefined, 15, 21, 'salom', 'olma', true, false, 'hello', 78, null]
// // console.log(malumotlar);
// console.log(typeof malumotlar[malumotlar.length - 1]);


// 1-misol
// let massiv = ['salom', 15, '105', '75', 71, 'frg', 84, true, false, 'FKJERG', undefined, NaN, null, 'hello']
// function stringAjrat(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string' && (array[i] * 1).toString() === "NaN") {
//       console.log(array[i]);
//     }
//   }
// }
// stringAjrat(massiv)

// 3-misol
// let array = [12, 78, 105, 34, 9465, 321, 321, 654]
// function juftSon(nimadr) {
//   for (let i = 0; i < nimadr.length; i++) {
//     if (nimadr[i] % 2 === 1 && nimadr[i] !== 0 && typeof nimadr[i] === 'number') {
//       console.log(nimadr[i]);
//     }
//   }
// }
// juftSon(array)


// let telefon = {} // bosh object

// let telefon = {
//   faceId: true,
//   camere: '4k',
//   batareya: 4500,
//   nomi: 'samsung',
//   rangi: 'qora',
//   asosiyrasm: 'fregf.png',
//   rasm: ['rasm.png', 'rasm1.png', 'rasm2.svg'],
//   // rasm1: 'rasm.png',
//   // rasm2: 'rasm2.png',
//   // rasm3: 'rasm3.png',
// }
// 1-usul
// console.log(telefon.rasm);
// 2-usul
// console.log(telefon['rasm2']);


// const sonAniqla = function (param) {
//   // console.log('salom');
//   return param
// }
// console.log(sonAniqla('hello'));

// sonAniqla()
// function sonAniqla() {
//   console.log('salom');
// }
// let sonAniqla = (param) => {
//   return param
// }
// console.log(sonAniqla('hello world'));
// console.log(sonAniqla('hello world'));


// let avtomobil = {
//   asilNarx: 17900,
//   nomi: 'gentra',
//   tezligi: 220,
//   otKuchi: 120,
//   yili: 2022,
//   urlgan: false,
//   narxi: function () {
//     if (this.urlgan) {
//       return this.asilNarx - 2000
//     }
//     else {
//       return this.asilNarx
//     }
//   }
// }
// console.log(avtomobil.tezligi, avtomobil.otKuchi, avtomobil.narxi());
let talabalar = [
  {
    name: 'Shaxriyor',
    age: 17,
    height: 180,
    weight: 74,
    hairColor: 'black',
    gender: 'erkak'
  },
  {
    name: 'Muhammadjon',
    age: 13,
    height: 160,
    weight: 42,
    hairColor: 'black',
    gender: 'erkak'
  },
  {
    name: 'Mirjahon',
    age: 17,
    height: 186,
    weight: 70,
    hairColor: 'yellow',
    gender: 'erkak'
  },
  {
    name: 'Maftuna',
    age: 18,
    height: 160,
    weight: 50,
    hairColor: 'black',
    gender: 'ayol'
  },
]

// console.log(talabalar[1].age, talabalar[1].name);
// console.log(talabalar.name);



// let erkaklar = []
// let ayollar = []
// for (let i = 0; i < talabalar.length; i++) {
//   // console.log(`name: ${talabalar[i].name}, yoshi: ${talabalar[i].age}`);
//   if (talabalar[i].gender === 'erkak') {
//     erkaklar.push(talabalar[i])
//   }
//   else {
//     ayollar.push(talabalar[i])
//   }
// }
// console.log(ayollar);