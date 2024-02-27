// mantiqiy 39-misol
// let x1 = 2, y1 = 4, x2 = 5, y2 = 4
// console.log(Math.abs(x2 - x1) === Math.abs(y2 - y1) || ((x1 === x2) && (y1 !== y2)) || ((x1 !== x2) && (y1 === y2)));

// shart operatori

// 5-misol
// let a = 1, b = -1, c = 0, musbat = 0, manfiy = 0, javob = ''
// // a ni tekshirish
// if (a > 0) {
//   musbat = musbat + 1
// }
// else if (a === 0) {
//   // console.log('a nolga teng');
//   javob = 'a nolga teng'
// }
// else {
//   manfiy = manfiy + 1
// }

// // b ni tekshirish
// if (b > 0) {
//   musbat = musbat + 1
// }
// else if (b === 0) {
//   // console.log('b nolga teng');
//   javob = 'b nolga teng'
// }
// else {
//   manfiy = manfiy + 1
// }

// // c ni tekshirish
// if (c > 0) {
//   musbat = musbat + 1
// }
// else if (c === 0) {
//   // console.log('c nolga teng');
//   javob = 'c nolga teng'
// }
// else {
//   manfiy = manfiy + 1
// }
// console.log(`musbat son ${musbat} ta, manfiy son ${manfiy} ta, ${javob}`);

// 9 misol
// let c = 'cola', f = 'fanta', s = ''
// if (c !== 'cola' && f !== 'fanta') {
//   s = c
//   c = f
//   f = s
//   console.log(` c = ${c}, f = ${f}`);
// }
// else {
//   console.log(` c = ${c}, f = ${f}`);
// }

// 15 - misol
// let a = 0, b = 0, c = 0
// if (a < b && a < c) {
//   console.log(`b + c = ${b + c}`);
// }
// else if (b < a && b < c) {
//   console.log(`a + c = ${a + c}`);
// }
// else if (c < a && c < b) {
//   console.log(`a + b = ${a + b}`);
// }
// else if (a == b || a == c || b === c) {
//   console.log('ikta o\'zgaruvchi teng boldi');
// }

// 27-misol
// let x = 1
// if ((0 <= x && x < 1) || (2 <= x && x < 3)) {
//   x = 1
//   console.log(x);
// }
// else if (x < 0) {
//   x = 0
//   console.log(x);
// }
// else if ((1 <= x && x < 2) || (3 <= x && x < 4)) {
//   x = -1
//   console.log(x);
// }

// tanlash operatori
// let amal = 'ayir', a = 4, b = 2, javob = '';
// switch (amal) {
//   case 'plus':
//     javob = ` a + b = ${a + b} `;
//     break;
//   case 'ayir':
//     javob = ` a - b = ${a - b} `;
//     break;
//   case 'kopaytr':
//     javob = ` a * b = ${a * b} `;
//     break;
//   case 'bolish':
//     javob = ` a / b = ${a / b} `;
//     break;
//   default: javob = 'bunday amal yo`q';
// }
// console.log(javob);

// 6 - misol
// let son = 170, holat = 4, natija = ''
// switch (holat) {
//   case 1:
//     natija = `${son} detsimetr ${son / 10}metr ga teng`; break;
//   case 2:
//     natija = `${son} kilometr ${son * 1000}metr ga teng`; break;
//   case 3:
//     natija = `${son} metr ${son}metr ga teng`; break;
//   case 4:
//     natija = `${son} millimetr ${son / 1000}metr ga teng`; break;
//   default: natija = 'bunday o\'chov birligi yo\'q';
// }
// console.log(natija);


// let oySoni = 2, yil = 2013
// switch (oySoni) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log('oy 31 kunlik'); break;
//   case 4: case 6: case 9: case 11:
//     console.log('oy 30 kunlik'); break;
//   case 2:
//     let n = yil % 4
//     switch (n) {
//       case 1: case 2: case 3:
//         console.log(`oy 28 kunlik, ${yil}-yil kabisa yili emas`); break;
//       default:
//         console.log(`oy 29 kunlik, ${yil}-yil kabisa yili`); break;
//     }
//   // if (yil % 4 === 0) {
//     // console.log(`oy 29 kunlik, ${yil}-yil kabisa yili`); break;
//   // }
//   // else {
//     // console.log(`oy 28 kunlik, ${yil}-yil kabisa yili emas`); break;
//   // }
// }




// son = son + 2
// son += 2
// console.log(son);
// son++
// console.log(son--);
// console.log(son);
// 18-misol
// let son = 412, text = '';
// let yuzlik = parseInt(son / 100), onlik = parseInt((son % 100) / 10), birlik = son % 10
// switch (yuzlik) {
//   case 1: text += 'bir yuz'; break;
//   case 2: text += 'ikki yuz'; break;
//   case 3: text += 'uch yuz'; break;
//   case 4: text += 'tort yuz'; break;
//   case 5: text += 'besh yuz'; break;
//   case 6: text += 'olti yuz'; break;
//   case 7: text += 'yetti yuz'; break;
//   case 8: text += 'sakkiz yuz'; break;
//   case 9: text += 'to\'qqiz yuz'; break;
//   default: text += ''
// }
// switch (onlik) {
//   case 1: text += " o'n"; break;
//   case 2: text += " yigirma"; break;
//   case 3: text += ' o`ttiz'; break;
//   case 4: text += ' qirq'; break;
//   case 5: text += ' ellik'; break;
//   case 6: text += ' oltimish'; break;
//   case 7: text += ' yettimish'; break;
//   case 8: text += ' sakson'; break;
//   case 9: text += ' toqson'; break;
//   default: text += ' '
// }
// switch (birlik) {
//   case 1: text += ' bir'; break;
//   case 2: text += ' ikki'; break;
//   case 3: text += ' uch'; break;
//   case 4: text += ' tort'; break;
//   case 5: text += ' besh'; break;
//   case 6: text += ' olti'; break;
//   case 7: text += ' yetti'; break;
//   case 8: text += ' sakkiz'; break;
//   case 9: text += ' to\'qqiz'; break;
//   default: text += ' '
// }
// console.log(text);