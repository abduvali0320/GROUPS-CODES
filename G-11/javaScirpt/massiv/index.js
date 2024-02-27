// let ism = 'jasur'
// let son1 = 'karim'
// let son2 = 'islom'
// let son3 = 'ismoil'
// let son4 = 'doniyor'

// console.log(ism, son2, son2);
// let massiv => bir yoki bir necha qiymatlarni bir nomda saqlanishi
// let ismlar = [] // bosh massiv
// let ismlar = ['Jasur', 'Karim', 'Islom', 'Ismoil', 'Doniyor', undefined, true, false, NaN, null, 522]
// ismlar.push(10, 'salom') // massivni oxiriga yangi qiymat (qiymatlar) qo'shadi va yangi qiymat qaytaradi
// ismlar.unshift(10, 'salom') // massivni boshiga yangi qiymat (qiymatlar) qo'shadi va yangi qiymat qaytaradi
// ismlar.shift() massivni boshidan faqat bir qiymatni o'chiradi va yangi qiymat qaytaradi
// ismlar.pop() //massivni oxiridan faqat bir qiymatni o'chiradi va yangi qiymat qaytaradi
// let yangiIsmlar = ismlar.concat('salom', 'olma') // massivni oxirga yangi qiymatlar qo'shadi
// console.log(ismlar.reverse()); // massivni teskari massivga aylantiradi
// console.log(ismlar.join(' + ')); //massivni har bir qiymatiga yangi qiymat qo'shadi va natija stirngda qaytadi

// let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, doloribus.'
// let newMassiv = text.split(' ') // string methodi stringni massivga o'tkazish uchun ishlatiladi
// console.log(newMassiv[parseInt(Math.random() * newMassiv.length - 1)]);

// let array = ['a', 'p', 15, 'k', 'i', 'b', 'd', 10, 5]
// let sonArray = [25, 10, 1009, 70, 911, 98]
// console.log(array.sort());// masivning ichidagi stringlar uchun ishlaydi
// console.log(sonArray.sort((x, y) => x - y)); // massiv ichida sonlar uchun (number) to'g'ri sort funksiyasi

// let ismlar = ['Jasur', 777, 'Karim', 10, 70, 'Islom', 'Ismoil', 'Doniyor', 199, undefined, true, false, NaN, null, 522]
// // masala -> massiv
// let sonlar = []
// for (let a = 0; a < ismlar.length; a++) {
//   let har_bir_element = ismlar[a]
//   // console.log(har_bir_element);
//   if (typeof har_bir_element === 'number' && har_bir_element.toString() !== 'NaN') {
//     sonlar.push(har_bir_element)
//   }
// }
// console.log(sonlar.sort((a, y) => a - y));

// let ismlar = ['Jasur', 777, 'Karim']
// for (let i = 0; i < ismlar.length; i++) {
//   console.log(ismlar[i]);
// }
// console.log(ismlar[0]);
// console.log(ismlar[1]);
// console.log(ismlar[2]);
// console.log(ismlar[3]);
// console.log(ismlar[4]);
// console.log(ismlar[5]);