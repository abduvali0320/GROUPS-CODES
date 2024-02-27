// let h1_tag = document.getElementsByTagName('h1')
// // console.log(h1_tag);

// for (let i = 0; i < h1_tag.length; i++) {
//   // console.log(h1_tag[i]);
//   // h1_tag[i].innerHTML = "<i> salom" + (i + 1) + '</i>'
//   h1_tag[i].textContent = "   <i>   salom" + (i + 1) + '</i>  '
// }
// console.log(h1_tag[0].innerHTML);
// console.log(h1_tag[0].textContent);

let talabalar = [
  {
    name: 'Shaxriyor',
    age: 17,
    height: 180,
    weight: 74,
    hairColor: 'black',
    gender: 'erkak'
  },
  {
    name: 'Muhammadjon',
    age: 13,
    height: 160,
    weight: 42,
    hairColor: 'black',
    gender: 'erkak'
  },
  {
    name: 'Mirjahon',
    age: 17,
    height: 186,
    weight: 70,
    hairColor: 'yellow',
    gender: 'erkak'
  },
  {
    name: 'Maftuna',
    age: 18,
    height: 160,
    weight: 50,
    hairColor: 'black',
    gender: 'ayol'
  },
  {
    name: 'Abdulaziz',
    age: 18,
    height: 188,
    weight: 75,
    hairColor: 'black',
    gender: 'erkak'
  },
]
let tbody = document.getElementsByClassName('tbody')[0]
for (let i = 0; i < talabalar.length; i++) {
  // console.log(talabalar[i].name);
  tbody.innerHTML += `
    <tr>
      <th> ${i + 1} </th>
      <td>${talabalar[i].name} </td>
      <td>${talabalar[i].age}</td>
      <td>${talabalar[i].height}</td>
      <td>${talabalar[i].weight}</td>
      <td>${talabalar[i].hairColor}</td>
      <td>${talabalar[i].gender}</td>
    </tr>
  `
}

let a = 15
// a = a + 21
// a += 21
console.log(a);