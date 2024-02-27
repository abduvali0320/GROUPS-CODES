// let son = 17 / 5
// console.log(17 - parseInt(son) * 5 ); // qoldiqni topish uchun
// console.log(17 % 5); // qoldiqni topish uchun

// let text = '5.5 kg olma bor'
// let son = 75.5615465489
// console.log(son.toFixed(11));

// let son = 275
// console.log(parseInt(son / 100) + 'm');

// let son2 = 1478
// console.log(parseInt(son2 / 1000) + 'tonna');

// 10-misol
// let a = 145
// // let birlik = a / 10 // 1-usul
// // console.log(a - parseInt(birlik) * 10);
// let onlik = a % 100
// console.log(parseInt(onlik / 10) + ' onlik xonadagi son');
// // 2-usul
// // let birlik = a % 10
// // console.log(birlik);

// 11-misol
// let son = 975
// let birlik = son % 10,
//   onlik = parseInt(son % 100 / 10),
//   yuzlik = parseInt(son / 100);
// console.log(birlik + onlik + yuzlik);



// parseInt => sonning butun qismini ajratib beradi
// parseFloat => sonning kasr ko'rinishida qiymat qaytaradi beradi;
// toFixed => kasr sonnig nuqtadan keyinggi nechta sonni chiqarishni belgilab beradi\


let a = 10, b = 15, c = null

console.log('a = ' + a, 'b = ' + b);
c = a;
a = b;
b = c;
console.log('a = ' + a, 'b = ' + b);