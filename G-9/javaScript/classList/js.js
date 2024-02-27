// let box = document.getElementsByClassName('box')

// let box = document.querySelectorAll('div') // berilgan Classdagi yoki berilgan holatga qarab shularni hammasini chaqiradi

// let box = document.querySelector('#div') // berilgan Classdagi yoki berilgan holatga qarab eng birinchidagini chaqiradi


// console.log(box.ClassList);

// box.ClassList.add('boxer') // berilgan elementga Class qoshib beradi
// box.ClassList.remove('boxer') // berilgan elementga Classni o'chirib beradi

// console.log(box.ClassList.contains('boxer2')); // berilgan Class bor yoki yo'qligini aniqlab beradi

// box.ClassList.replace('box', 'yangiBoxer') // mavjud bo'lgan Classni berilgan classga alishitirb beradi

// box.classList.toggle('boxer') // berilgan class bor bo'lsa olib tashlaydi aks holda bolsa shu classni qoshib qo'yadi

let box = document.querySelector('.box')

let ranglar = ['red', 'brown', 'blue', 'lime', 'yellow', 'black', 'green']
let changeStyle = () => {
  let randomSon = parseInt(Math.random() * ranglar.length)
  // console.log(ranglar[randomSon]);
  box.style.backgroundColor = ranglar[randomSon]
}

// box.style.backgroundColor = 'black'
// box.style.color = 'black'
// box.style.fontSize = '28px'

box.style.cssText = `
  font-size:30px;
  text-shadow: 0 0 5px black;
`