let datas = [
  {
    rasm: "./img/rasm1.webp",
    like: false,
    skidka: 20,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.",
    oyiga_tolov: 19900,
    narx: 1500000
  },
  {
    rasm: "./img/rasm2.jpg",
    like: true,
    skidka: 15,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.",
    oyiga_tolov: 20900,
    narx: 1900000
  },
  {
    rasm: "./img/rasm3.webp",
    like: false,
    skidka: 17,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.",
    oyiga_tolov: 18000,
    narx: 2000000
  },
  {
    rasm: "./img/rasm4.jpg",
    like: false,
    skidka: 10,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.",
    oyiga_tolov: 19900,
    narx: 1700000
  },
  {
    rasm: "./img/rasm5.jpg",
    like: false,
    skidka: 15,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.",
    oyiga_tolov: 19900,
    narx: 1900000
  },
],
  cards = document.getElementsByClassName('cards')[0]

for (let i = 0; i < datas.length; i++) {
  const element = datas[i];
  cards.innerHTML += `
    <div class="card">
      <div class="rasm">
        <div class="like">
          ${element.like ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
        </div>
        <img src='${element.rasm}' alt="">
        <span class="skidka"> -${element.skidka}% </span>
      </div>
      <div class="card_text">
        <h1> ${element.description} </h1>
        <div class="kredit_muddat">
          dan ${element.oyiga_tolov} so'm/oyga
        </div>
        <div class="narx">
          <del> ${element.narx} so'm</del>
          <span class="card_qizil"> ${element.narx - ((element.narx / 100) * element.skidka)} so'm
          </span>
        </div>
        <div class="card_btn">
          <button> <i class="fa-solid fa-cart-shopping"></i> savatga </button>
        </div>
      </div>
    </div>
  `
}


