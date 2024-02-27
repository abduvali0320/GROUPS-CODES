// let x = 5, y = 15, d = 25

// if(x <= d && y >= d){
//   console.log(" son orasida yotadi");
// }
// else{
//   console.log( "orasida yotmaydi" );
// }

// let x = -5
// // 2-misol
// if(x > 0){
//   console.log(++x);
// }
// else {
//   x = x - 2
//   x -=2
//   console.log(x);
// }

// let x = 10
// if(x > 0) {
//   console.log(++x);
// }
// else if( x < 0 ) {
//   console.log(x-=2);
// }

// else {
//   x = 10
//   console.log(x);
// }

// let x = 10, l = 11

// if( x > l ) {
//   console.log(`kattasi x = ${x}`);
// }
// else if(l > x) {
//   console.log(`kattasi l = ${l}`);
// }
// else {
//   console.log("sonlar teng bo'lib qoldi");
// }

// 11 - misol
// let a = 0, b = 5, c 
// if(a > b) {
//   c = b
//   b = a 
//   a = c
//   console.log(`b = ${b} a = ${a}`);
// }
// else if(a < b) {

//   console.log(`b = ${b} a = ${a}`);
// }
// else {
//   console.log("sonlar teng bo'lib qoldi");
// }

// 13 - misol
// const kattaniTop = (a , b, c) => {
//   parseInt(a); parseInt(b); parseInt(c)
//   if((a < b && a > c) || (a > b && a < c) ){
//     console.log("o'rtadagi son a = " + a);
//   }
//   else if ( (b < c && b > a) || (b > c && b < a) ) {
//     console.log("o'rtadagi son b = " + b);
//   } 
//   else if ( (c < b && c > a) || (c > b && c < a) ) {
//     console.log("o'rtadagi son c = " + c);
//   } 
//   else if(a == b  && b == c && c == a){
//     console.log("sonlar o'zaro teng ");
//   }
//   else if( typeof(a) === "string" || typeof(b) === "string" || typeof(c) === "string" ){
//     console.log("kechirasiz siz number tipiga tegishli malumot kiritmadingiz");
//   }
//   else {
//     console.log("sonlardan ikkitasi teng bolib qoldi");
//   }  
// }

// kattaniTop(14, 5, 7)
// kattaniTop( 5, 5 , 105 )
// 15 - misol 
// let x = 5, b = -4, c = 0
// console.log(`x = ${x}, b = ${b}, c = ${c}`);
// if( (x + c) > (b + c)) {
//   console.log(`katta yig'indini x = ${x} va c = ${c} tashkil qiladi yig'indi ${x + c} ` );
// }
// else if((x + b) > (c + b)) {
//   console.log(`katta yig'indini x = ${x} va b = ${b} tashkil qiladi yig'indi ${x + b}`);
// }
// else if( (b + c) > (x + c)) {
//   console.log(`katta yig'indini b = ${b} va c = ${c} tashkil qiladi yig'indi ${b + c}`);
// }
// else {
//   console.log("kiritilgan sonlar teng");
// }

// 16 - misol
// let x = 5, b = 6, c = 5
// console.log(`x = ${x}, b = ${b}, c = ${c}`);
// if(x < c && b < c && b > x) {
//   console.log( ` 2x = ${x * 2} 2b = ${b * 2} 2c = ${c * 2} ` );
// }
// else{
//   console.log( ` x = ${x * -1} b = ${b * -1} c = ${c * -1} ` );
// }

// 17 - misol
// let x = 7, b = 8, c = 8
// console.log(`x = ${x}, b = ${b}, c = ${c}`);
// if((x < c && b < c && b > x) || (x > b && x > c && b > c)) {
//   console.log( ` 2x = ${x * 2} 2b = ${b * 2} 2c = ${c * 2} ` );
// }
// else{
//   console.log( ` x = ${x * -1} b = ${b * -1} c = ${c * -1} ` );
// }

// 18 - misol
// let x = 101, b = 101, c = 11
// console.log(`x = ${x}, b = ${b}, c = ${c}`);
// if( x === b && x !== c && b !== c ) {
//   console.log(`x = ${x}, b = ${b} sonlar o'zaro teng 3-raqamdagi son farqli c = ${c} `);
// }
// else if( b === c && b !== x && x !== c){
//   console.log(`c = ${c}, b = ${b} sonlar o'zaro teng 1-raqamdagi son farqli x = ${x} `);
// }
// else if(x === c && b !== c && b !== x){
//   console.log(`c = ${c}, x = ${x} sonlar o'zaro teng 2-raqamdagi son farqli b = ${b}`);
// }
// else {
//   console.log("hamma sonlar o'zaro teng bo'lib qoldi");
// }

// 19 - misol
// let x = 101, b = 101, c = 11, y = 11
// console.log(`x = ${x}, b = ${b}, c = ${c} y = ${y}`);
// if( x === b && b === y && x !== c && b !== c && y !==c ) {
//   console.log(`x = ${x}, b = ${b} y = ${y} sonlar o'zaro teng 3-raqamdagi son farqli c = ${c} `);
// }
// else if( b === c && b === y && b !== x && x !== c &&  y !== x){
//   console.log(`c = ${c}, b = ${b} y = ${y} sonlar o'zaro teng 1-raqamdagi son farqli x = ${x} `);
// }
// else if(x === c && x === y && b !== c && b !== x && b !== y){
//   console.log(`c = ${c}, x = ${x} y = ${y} sonlar o'zaro teng 2-raqamdagi son farqli b = ${b}`);
// }
// else if(x === c && x === b && x !== y && b !== y && c !== y){
//   console.log(`c = ${c}, x = ${x} b = ${b} sonlar o'zaro teng 4-raqamdagi son farqli y = ${y}`);
// }
// else {
//   console.log("uchta son tengligi topilmadi");
// }

// 20 - misol
// let a = -7, b = -7, c = -7
// console.log( `a = ${a}, b = ${b}, c = ${c}` );
// if(Math.abs( a - b ) > Math.abs( a - c ) && a !== c){
//   console.log(`a = ${a} nuqataga eng yaqini c = ${c} nuqta, masofa ${Math.abs(a - c)} ga teng`);
// }
// else if(Math.abs( a - b ) < Math.abs( a - c ) && a !== b){
//   console.log(`a = ${a} nuqataga eng yaqini b = ${b} nuqta, masofa ${Math.abs(a - b)} ga teng`);
// }
// else if( a === b && b !== c){
//   console.log(`b = ${b} nuqta a = ${a} nuqtani ustida` );
// }
// else if( a === c && b !== c){
//   console.log( `c = ${c} nuqta a = ${a} nuqtani ustida` );
// }
// else {
//   console.log("nuqtalar ustma-ust tushdi");
// }

// 21 - misol
// let x1 = 5, y1 = 0
// if(x1 === 0 && y1 === 0){
//   console.log(0);
// }
// else if(x1 === 0 && y1 !== 0) {
//   console.log(2);
// }
// else if(x1 !== 0 && y1 === 0) {
//   console.log(1);
// }
// else {
//   console.log(3);
// }

// 22 - misol
// let x1 = 5, y1 = -2
// if( x1 > 0 && y1 > 0 ){
//   console.log("1 - chorak");
// }
// else if( x1 > 0 && y1 < 0) {
//   console.log("3 - chorak");
// }
// else if (x1 < 0 && y1 < 0){
//   console.log("4 - chorak");
// }
// else if(x1 < 0 && y1 > 0) {
//   console.log("2 - chorak");
// }
// else {
//   console.log("siz kiritgan nuqta kordinata o'qiga tegishli");
// }

// 29 - 30 birlashma - misol
// let son = 3
// if(son > 0 && parseInt(son / 100) > 0 && son % 2 === 0) {
//   console.log(`kiritilgan son ${son} bo'lib uch xonali musbat juft son `);
// }
// else if (son > 0 && parseInt(son / 100) > 0 && son % 2 !== 0){
//   console.log(` kiritilgan son ${son} bo'lib uch xonali musbat toq son `);
// }
// else if(son < 0 && Math.abs(parseInt(son / 100)) > 0 && son % 2 === 0){
//   console.log(` kiritilgan son ${son} bo'lib uch xonali manfiy juft son `);
// }
// else if(son < 0 && Math.abs(parseInt(son / 100)) > 0 && son % 2 !== 0){
//   console.log(` kiritilgan son ${son} bo'lib uch xonali manfiy toq son `);
// }
// else if(son > 0 && parseInt(son / 10) > 0 && son % 2 === 0){
//   console.log(` kiritilgan son ${son} bo'lib ikki xonali musbat juft son `);
// }
// else if(son > 0 && parseInt(son / 10) > 0 && son % 2 !== 0){
//   console.log(`kiritilgan son ${son} bo'lib ikki xonali musbat toq son `);
// }
// else if(son < 0 && Math.abs(parseInt(son / 10)) > 0 && son % 2 === 0){
//   console.log(` kiritilgan son ${son} bo'lib ikki xonali manfiy juft son `);
// }
// else if(son < 0 && Math.abs(parseInt(son / 10)) > 0 && son % 2 !== 0){
//   console.log(`kiritilgan son ${son} bo'lib ikki xonali manfiy toq son `);
// }
// else if(son > 0 && son < 10 && son % 2 === 0){
//   console.log(` kiritilgan son ${son} bo'lib bir xonali musbat juft son `);
// }
// else if(son > 0 && son < 10 && son % 2 !== 0){
//   console.log(`kiritilgan son ${son} bo'lib bir xonali musbat toq son `);
// }
// else if(son < 0 && son > -10 && son % 2 === 0){
//   console.log(` kiritilgan son ${son} bo'lib bir xonali manfiy juft son `);
// }
// else if(son < 0 && son > -10 && son % 2 !== 0){
//   console.log(`kiritilgan son ${son} bo'lib bir xonali manfiy toq son `);
// }
// else {
//   console.log("son nol ga teng");
// }


