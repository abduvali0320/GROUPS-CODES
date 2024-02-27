// 22-misol
// let son = 745
// let yuzliklar = parseInt(son / 100)
// let onliklar = parseInt(son / 10) % 10
// let birliklar = son % 10

// console.log((yuzliklar + 1 === onliklar && onliklar + 1 === birliklar) || yuzliklar - 1 === onliklar && onliklar - 1 == birliklar);

// let x = 5, y = 8
// console.log(x < 0 && y > 0);

// 31-misol
// let a = 10, b = 3, c = 7
// console.log((a === b && a !== c) || (a === c && c !== b) || (b === c && b !== a));

// 32-misol
// pifagor teoremasi => a^2 + b^2 = c^2
// let a = 3, b = 4, c = 5
// console.log((a ** 2 + b ** 2 === c ** 2) || (c ** 2 + b ** 2 === a ** 2) || (a ** 2 + c ** 2 === b ** 2));

// let son = true
// if (son > 9 && son < 100) {
//   console.log('ikki xonali son');
// }
// else if (0 < son && son < 10) {
//   console.log('bir xonalik son');
// }
// else {
//   console.error('ERROR');
// }

// if()  => shart operatori bir yoki bir necha shartlar jamlanmasinign  natijasi qarab kiritlgan amal bajariladi
// else if() => if() sharti bajarilmasa keyn berilgan shart natijasiga qarab amal bajariladi
// else => if va else if sharti qanoatlantirilmasa (shart bajarilmasa) else ichidagi amal bajariladi

// 5 - misol
// let a = -1, b = 7, c = -9, musbat = 0
// if (a > 0) {
//   musbat = musbat + 1
// }
// if (b > 0) {
//   musbat = musbat + 1
// }
// if (c > 0) {
//   musbat = musbat + 1
// }
// console.log((3 - musbat) + ' ta manfiy son', musbat + ' ta musbat son');

// 24-misol
// let x = 10
// if (x > 0) {
//   console.log(2 * Math.sin(x));
// }
// else {
//   console.log(x - 6);
// }

// const myFunc = (...rest) => {
//   rest[10] = 'salom'
//   console.log(rest);
//   console.log(rest[10]);

// }
// myFunc(1, 2, 3, 5, 4)




// let raqam = 6
// switch (raqam) {
//   case 1: case 2: case 12: console.log('qish'); break;
//   case 3: case 4: case 5: console.log('bahor'); break;
//   case 6: case 7: case 8: console.log('yoz'); break;
//   case 9: case 10: case 11: console.log('kuz'); break;
// }
let yosh = 40
let onlik = parseInt(yosh / 10)
let soz = ''
switch (onlik) {
  case 1: soz = "o'n"; break;
  case 2: soz = "yigirma"; break;
  case 3: soz = "o'ttiz"; break;
  case 4: soz = "qirq"; break;
  case 5: soz = "ellik"; break;
  case 6: soz = "oltimish"; break;
}
let birlik = yosh % 10
switch (birlik) {
  case 1: soz = soz + " bir"; break;
  case 2: soz = soz + " ikki"; break;
  case 3: soz = soz + " uch"; break;
  case 4: soz = soz + " to'rt"; break;
  case 5: soz = soz + " besh"; break;
  case 6: soz = soz + " olti"; break;
  case 7: soz = soz + " yetti"; break;
  case 8: soz = soz + " sakkiz"; break;
  case 9: soz = soz + " to'qqiz"; break;
}
console.log(soz);