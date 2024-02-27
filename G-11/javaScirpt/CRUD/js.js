let inputs = document.querySelectorAll('input'),
  textarea = document.querySelector('textarea'),
  form = document.querySelector('form'),
  tbody = document.querySelector('tbody'),
  input_value = {},
  datas = [];
inputs = [...inputs, textarea];



form.addEventListener('submit', (e) => {
  e.preventDefault()
  for (const input of inputs) {
    if (input.getAttribute('type') !== 'submit') {
      // console.log(input.getAttribute('name'));
      input_value = {
        ...input_value,
        [input.getAttribute('name')]: input.value
      }
    }
  }

  datas.push(input_value)
  tbody_gaYoz()
  e.target.reset()
})


// let person = {
//   name: 'Ravshan',
//   yosh: 14
// }
// person['name'] = 'Jasur'
// console.log();


function tbody_gaYoz() {
  tbody.innerHTML = '';
  if (datas.length > 0) {
    for (const index in datas) {
      let obj = datas[index]
      tbody.innerHTML += `
        <tr>
          <th> ${+index + 1} </th>
          <td> ${obj.nomi} </td>
          <td><del> ${obj.narxi}$</del> ${obj.narxi - ((obj.narxi / 100) * obj.chegirma)}$</td>
          <td> ${obj.vazni}kg </td>
          <td> ${obj.chegirma}% </td>
          <td> ${obj.malumot} </td>
        </tr>
      `
    }
  }
  else {
    tbody.innerHTML = `
        <tr>
          <td colspan='15' > No data ... </td>
        </tr>
      `
  }
}
tbody_gaYoz()