// 20-misol
// let son = 747, birlik = son % 10, onlik = parseInt(son % 100 / 10), yuzlik = parseInt(son / 100)
// console.log(birlik !== onlik && onlik !== yuzlik && birlik !== yuzlik);

// 21-22-misol

// let son = 888, birlik = son % 10, onlik = parseInt(son % 100 / 10), yuzlik = parseInt(son / 100)
// console.log((birlik - 1 === onlik && onlik - 1 === yuzlik) || (yuzlik - 1 === onlik && onlik - 1 === birlik));

// 23-misol
// let son = 888, birlik = son % 10, onlik = parseInt(son % 100 / 10), yuzlik = parseInt(son / 100)
// console.log(yuzlik === birlik);

// 36 - misol
// let x1 = 4, y1 = 1, x2 = 4, y2 = 6;
// console.log((x1 !== x2 && y1 === y2) || (y1 !== y2 && x1 === x2));


// // shart operatori
// let son = 105
// if (son > 0) {
//   son = son + 1
//   console.log(son);
// }
// else if (son == 0) {
//   son = 10
//   console.log(son);
// };
// if (son == 105) {
//   console.log('bir yuz besh');
// }
// else {
//   son = son - 2
//   console.log(son);
// }


// let son = 0 3-msiol
// if (son > 0){
//   son = son + 1 
//   console.log(son);

// }

// else if (son == 0){
// console.log(son = 10);
// }

// else {
//   console.log(son -2);
// }


// 4 va 5 masala

// let a = -5, b = -7, c = -3;
// if (a > 0) {
//   a = 1
// } else {
//   a = 0
// }
// if (b > 0) {
//   b = 1
// } else {
//   b = 0
// }
// if (c > 0) {
//   c = 1
// } else {
//   c = 0
// }
// console.log(`manfiy son ${3 - (a + b + c)} ta musbat son ${(a + b + c)} ta`,);

// 2 chi usul
// let a = 23
// let b = -2
// let c = -1
// let musbat = 0
// let manfiy = 0
// if(a > 0){
//   musbat ++
// }else {
//   manfiy ++
// }
// if(b > 0){
//   musbat ++
// }else {
//   manfiy ++
// }
// if(c > 0){
//   musbat ++
// }else {
//   manfiy ++
// }
// console.log(`musbat sonlar ${musbat} manfiy sonlar ${manfiy}`);

// 6-masala
// let a = 5, b = 1
// if (a > b){

// }

// if(b < a){

// }
// console.log(`katta son ${a++} kichik son ${b ++}` );


// for (let k = 0; k < 3; k++) {
//   setTimeout(() => {
//     console.log(k);
//   }, 1)
// }
// for (var k = 0; k < 3; k++) {
//   setTimeout(() => {
//     console.log(k);
//   }, 1)
// }

// const rusToLat = function (str) {
//   let ru = {
//     'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
//     'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
//     'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
//     'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
//     'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
//     'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
//     'ъ': 'ie', 'ь': '', 'й': 'i'
//   };
//   return [...str].map(l => {
//     let latL = ru[l.toLocaleLowerCase()];
//     if (l !== l.toLocaleLowerCase()) {
//       if (latL) {
//         latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
//       }
//       else {
//         latL = l;
//       }
//     } else if (!latL) {
//       latL = l;
//     }
//     return latL;
//   }).join('');
// }

// console.log(rusToLat('гугуртДЛТУА salom SALOM'));
