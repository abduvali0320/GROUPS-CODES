let data = [
  {
    id: 1,
    rasm: "../assets/img/i (1).webp",
    name: "product name ",
    price: 120000,
    count: 3,
  },
  {
    id: 2,
    rasm: "../assets/img/i (2).webp",
    name: "product name ",
    price: 170000,
    count: 2,
  },
  {
    id: 3,
    rasm: "../assets/img/i (3).webp",
    name: "product name ",
    price: 120000,
    count: 1,
  },
  {
    id: 4,
    rasm: "../assets/img/i (4).webp",
    name: "product name ",
    price: 190000,
    count: 1,
  },
  {
    id: 5,
    rasm: "../assets/img/i (5).webp",
    name: "product name ",
    price: 150000,
    count: 1,
  },
  {
    id: 6,
    rasm: "../assets/img/i (6).webp",
    name: "product name ",
    price: 1450000,
    count: 1,
  },
  {
    id: 7,
    rasm: "../assets/img/i (7).webp",
    name: "product name ",
    price: 110000,
    count: 1,
  },
  {
    id: 8,
    rasm: "../assets/img/rasm1.jpeg",
    name: "product name ",
    price: 130000,
    count: 1,
  },
  {
    id: 9,
    rasm: "../assets/img/rasm2.jpg",
    name: "product name ",
    price: 200000,
    count: 1,
  },
  {
    id: 10,
    rasm: "../assets/img/rasm3.jpg",
    name: "product name ",
    price: 100000,
    count: 1,
  },
];
for (let i = 0; i < data.length; i++) {
  const element = data[i]; //massiv ichidagi har bir object ga teng
  // console.log(element.price);
  let otaElement = document.getElementsByClassName("card_box")[0];
  otaElement.innerHTML += `
    <div class="card">
      <figure>
        <img src="${element.rasm}" alt="${element.name}">
      </figure>
      <h1>product name ${i + 1}</h1>
      <p>${element.price} so'm</p>
      <div class="btn">
        <button onclick="addToCart('${element.id}')" >add to cart</button>
      </div>
    </div>
  `;
}
let showCart = () => {
  let karzinka_container = document.querySelector(".karzinka_container");
  karzinka_container.style.display = "flex";
  document.body.style.overflow = "hidden";
};
let closeCart = () => {
  let karzinka_container = document.querySelector(".karzinka_container");
  karzinka_container.style.display = "none";
  document.body.style.overflow = "auto";
};

let cart = [];
let cartCount = document.querySelector(".cart_box span");
cartCount.innerHTML = cart.length;
const addToCart = (text) => {
  let yangiElement = data.find((item) => item.id == text);

  if (!cart.find((c) => c.id === yangiElement.id)) {
    cart.push(yangiElement);
  } else {
  }

  cartCount.innerHTML = cart.length;
  cartToRender();
  handleTotalPrice();
};

const cartToRender = () => {
  let cartBoxer = document.querySelector(".cartBoxer");
  cartBoxer.innerHTML = "";
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      cartBoxer.innerHTML += `
        <div class="cartBox">
          <div class="cart">
            <div class="cart_flex">
              <figure>
                <img src="${element.rasm}" alt="">
              </figure>
              <h1>product name1 </h1>
            </div>
            <div class="narx">
            ${element.price * element.count}
            </div>
            <div class="btns">
              <button onclick='handleMinus(${element.id})' >-</button>
              <p id='id${element.id}' > ${element.count} </p>
              <button onclick='handlePlus(${element.id})'>+</button>
            </div>
          </div>
        </div>
      `;
    }
  } else {
    cartBoxer.innerHTML = "hozircha saqlangan malumotlar yo'q";
  }
};

cartToRender();
const funksiyaniBekorQil = (e) => {
  e.stopPropagation();
};

// reduce funksiya bilan ishlash.
// reduce => massiv ichidagi har bir elementni bir biriga qo'shib beradi, va yangi bir qiymat qaytaradi

function handleTotalPrice() {
  let totalPrice = document.querySelector(".totalPrice");
  totalPrice.innerHTML =
    cart.reduce((a, b) => a + b.price * b.count, 0) + "so'm";
}
handleTotalPrice();

let handleMinus = (ID) => {
  cart = cart.map((p) => {
    if (p.id === ID && cart.find((i) => i.id === ID).count > 0) {
      return { ...p, count: p.count - 1 };
    } else {
      return p;
    }
  });
  cart = cart.filter((c) => c.count > 0);
  let item = cart.find((c) => c.id === ID);
  if (item) {
    document.getElementById(`id${ID}`).innerHTML = item.count;
  } else {
    cartToRender();
    console.log("render");
  }
  handleTotalPrice();
};

let handlePlus = (ID) => {
  cart = cart.map((c) => {
    if (c.id === ID) {
      return { ...c, count: c.count + 1 };
    } else {
      return c;
    }
  });
  cartToRender();
  handleTotalPrice();
};
