
// let h1 = document.getElementsByTagName('h1')[0]

// for (let i = 0; i < h1.length; i++) {
//   h1[i].innerText = ` ${(i + 1)}.<i> hello </i>`
// }

// h1.innerHTML += ' olam'
// a = a + 2
// a += 2

// h1.style.color = 'red'
// h1.style.fontSize = '15px'

// let p = [20, 54, 78, 70, 62]
// let random = parseInt(Math.random() * (p.length - 1))
// h1.style.cssText = `
//   color: red;
//   font-size: ${p[random]}px;
// `

// let btn = document.querySelector('button')

// let position = [{
//   x: 700, y: 300,
// }, { x: 100, y: 500, }, {
//   x: 600, y: 100,
// }, { x: 100, y: 100 }]


// const change_position = () => {
//   let random = parseInt(Math.random() * 200)
//   let random2 = parseInt(Math.random() * 400)
//   btn.style.cssText = `
//     position: relative;
//     top: ${position[random].y}px;
//     left: ${position[random].x}px;
//   `
// }


// let box = document.querySelector('.box')

// let son = 0
// let son2 = 0
// window.addEventListener('keydown', (e) => {
//   if (e.key === 'w' && son > 0) {
//     son = son - 10
//   }
//   if (e.key === 's' && son < 700) {
//     son = son + 10
//   }
//   if (e.key === 'a' && son2 > 0) {
//     son2 = son2 - 10
//   }
//   if (e.key === 'd' && son2 < 1400) {
//     son2 = son2 + 10
//   }
//   box.style.marginTop = son + 'px'
//   box.style.marginLeft = son2 + 'px'
// })

// let inputs = document.querySelectorAll('input')
// let btn = document.querySelector('button')
// let ul = document.querySelector('ul')

// btn.addEventListener('click', () => {
//   for (const input of inputs) {
//     // ul.innerHTML = ul.innerHTML + input.value
//     console.log();
//     ul.innerHTML = ul.innerHTML + `
//       <li> ${input.placeholder}: ${input.value} </li>
//     `
//   }
// })
