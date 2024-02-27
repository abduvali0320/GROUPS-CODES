// my_func()

// function -> biror bajarilishi kerak bo'lgan amalni, (biror amalni) bir nomga o'zlashtirish holatiga funksiya deyiladi
// let son = 10
// Function Declaration => o'zidan oldin chaqirlsa ham ishlay oladigan funksiya hisoblanadi
// function my_func() {
//   son = 'salom'
// }

// my_func() // son = 'salom'
// console.log(son);
// son = 'salom'

// var son = 99
// Function Expression => o'zidan oldin chaqirlsa xatolik bo'ladi, anonymous funksiya ham deb ataladi
// const my_func = function () {
//   var son = 100
// }
// my_func()
// console.log(son);


// callback function (o'qli funksiya) arrow-function bu ham o'zidan oldin ishlatilsa hatolik bo'ladi
// const my_func = () => {
//   let a = 8, b = 10
//   let c = a * b
//   // console.log(c);
//   return c;
// }



// pametrlik funksiya -> har bir funkisya paramter qabul qila oladi va shu parametr ustida amal bajaradi (ishlatishdan maqsan funksiyani umumiy qilish)
// function daraja(a, b) {
//   let c = a ** b
//   return c
// }

// console.log(daraja(10, 3) + 25);

// const isJuft = (param) => {
//   if (param % 2 === 0) {
//     return 'juft'
//   }
//   else {
//     return 'toq'
//   }
// }

// console.log(isJuft(18));

