// let son = 17.55
// console.log(Math.round(son)); // to'g'ri yaxlitlab beradi
// console.log(Math.ceil(son)); // yuqoriga yaxlitlab beradi
// console.log(Math.floor(son)); // pastga yaxlitlab beradi
// console.log(Math.random()); // 0 dan boshlab 1 gacha ixtiyoriy sonlarni chiqarib beradi

// // string methodlari
// let text = '   salom olam hello world   '
// console.log(text.toLowerCase()); // harflarni katta va kichik ga o'tkazib beradi
// console.log(text.length); // stringni uzunligini topib beradi
// console.log(text.slice(2, 3)); stringni index bo'yicha qirqib beradi
// console.log(text.includes('m')); // berilgan stringni kiritlgan qiymat bor bo'lsa true aksincha bolsa false qaytaradi
// console.log(text.lastIndexOf('l'));  berilgan qiymatni stringni ichidan index sonini qaytaradi

// console.log(text.at(-4)); // berilgan index bo'yicha stringni ichidan harf qidirib beradi agar yo'q bolsa -1 qaytaradi

// console.log(text.trim()); berilgan stringni boshidan va oxridan bo'sh joylarni tashlab beradi

// mantiqiy amallar

// console.log(1 < 2 < 3);
// 1 < 3
// console.log(1 > 1);
// console.log(!false);
// console.log(5 !== 5);

// (=) o'zlashtrsh operatori, (==) solishtrish operatori, (===) type gacha solishtrish operatori, (!) mantiqiy qiymatni teskariga qiymatga aylantiradi
// (!=) teng emas, (!==) typegacha teng emas,

// (||) yoki amali, (&&) va amali

// dizyunkisya => ||
// 1 + 1 = 1
// 1 + 0 = 1
// 0 + 1 = 1
// 0 + 0 = 0

// konyuksiya => &&
// 1 * 1 = 1
// 1 * 0 = 0
// 0 * 1 = 0
// 0 * 0 = 0

// let a = 7
// console.log(Math.abs(a) % 2 == 1);

// 4-misol
// let a = 7, b = 10
// console.log(a > 2 && b <= 3);

// amaliy ish  5, 8, 9 , 10 ,11

// 8-misol
// let a = 9, b = 7
// console.log(a % 2 == 1 && b % 2 == 1);

// 9-misol
// let a = 20, b = 10
// console.log(a % 2 == 1 || b % 2 == 1);

// 10 - misol
// let a = 911, b = 10
// console.log((a % 2 === 1 && b % 2 === 0) || (b % 2 === 1 && a % 2 === 0));

// 11 - misol
// let a = 91, b = 12
// console.log((a % 2 === 1 && b % 2 === 1) || (a % 2 === 0 && b % 2 === 0));

// parseFloat()
// Math.ceil
