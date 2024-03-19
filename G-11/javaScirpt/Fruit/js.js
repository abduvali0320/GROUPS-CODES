let products = [
    {
      id: 0,
      sale: 15,
      img: "img/persik.png",
      inStock_count: 10,
      name: "Fresh organic apricot",
      price: 21,
      count: 0,
      isLike: false,
      category_id: "products",
    },
    {
      id: 1,
      sale: 12,
      img: "img/cucumber.png",
      inStock_count: 0,
      name: "Cucumber",
      price: 25,
      count: 0,
      isLike: false,
      category_id: "products",
    },
    {
      id: 2,
      sale: 14,
      img: "img/orex.png",
      inStock_count: 3,
      name: "Hazelnuts filbert nut",
      price: 22,
      count: 0,
      isLike: false,
      category_id: "products",
    },
    {
      id: 3,
      sale: 17,
      img: "img/broccoli.png",
      inStock_count: 0,
      name: "Raw broccoli",
      price: 14,
      count: 0,
      isLike: false,
      category_id: "products",
    },
    {
      id: 4,
      sale: 8,
      img: "img/fruit.png",
      inStock_count: 10,
      name: "Organic quince",
      price: 10,
      count: 0,
      isLike: false,
      category_id: "products",
    },
  ],
  products_2 = [
    {
      id: 100,
      sale: 17,
      img: "img/bapple.png",
      inStock_count: 4,
      name: "Fresh organic apricot",
      isLike: false,
      price: 21,
      count: 0,
      category_id: "products_2",
    },
    {
      id: 101,
      sale: 12,
      img: "img/capsculm.png",
      inStock_count: 0,
      name: "Red apple",
      price: 25,
      count: 0,
      category_id: "products_2",
      isLike: false,
    },
    {
      id: 102,
      sale: 14,
      img: "img/pear.png",
      inStock_count: 3,
      name: "Pear fruit",
      price: 22,
      count: 0,
      category_id: "products_2",
      isLike: false,
    },
    {
      id: 103,
      sale: 17,
      img: "img/blueberry.png",
      inStock_count: 0,
      name: "Blueberry",
      price: 14,
      count: 0,
      category_id: "products_2",
      isLike: false,
    },
    {
      id: 104,
      sale: 8,
      img: "img/strawberry.png",
      inStock_count: 10,
      name: "Fresh raspberry",
      price: 10,
      count: 0,
      category_id: "products_2",
      isLike: false,
    },
  ],
  products_3 = [
    {
      id: 1000,
      sale: 17,
      isLike: false,
      img: "img/ginger.png",
      inStock_count: 4,
      name: "Ginger",
      price: 21,
      count: 0,
      category_id: "products_3",
    },
    {
      id: 1001,
      sale: 12,
      img: "img/figs.png",
      inStock_count: 0,
      name: "Two fresh figs",
      price: 25,
      count: 0,
      category_id: "products_3",
      isLike: false,
    },
    {
      id: 1002,
      sale: 14,
      img: "img/strawberry.png",
      inStock_count: 3,
      name: "Strawberry",
      price: 22,
      count: 0,
      category_id: "products_3",
      isLike: false,
    },
    {
      id: 1003,
      sale: 17,
      img: "img/eggplant.png",
      inStock_count: 0,
      name: "eggplant",
      price: 14,
      count: 0,
      category_id: "products_3",
      isLike: false,
    },
    {
      id: 1004,
      sale: 8,
      img: "img/egg.png",
      inStock_count: 10,
      name: "egg",
      price: 10,
      count: 0,
      category_id: "products_3",
      isLike: false,
    },
  ],
  like_count = document.querySelector(".like_count"),
  savatcha = [],
  cart_box = document.querySelector(".cart_box"),
  savatcha_box = document.querySelector(".savatcha"),
  cart_btn = document.querySelector(".cart_btn");

// true ? console.log('salom') : console.log('hello');

function read_product(data, element, cart = true) {
  const el = document.querySelector(element);
  el.innerHTML = ``;
  for (const obj of data) {
    el.innerHTML += `
      <div class="product">
        <div class="heading">
            <p> ${obj.sale}%Off</p>
            <button onclick='handleLike(${obj.id} ,${JSON.stringify(
      data
    )}, "${element}")'>
              ${
                obj.isLike
                  ? ` <i class="fa-solid fa-heart"></i>`
                  : `  <i class="fa-regular fa-heart"></i>`
              }
            </button>
        </div>
        <div class="img">
            <img src="${obj.img}" alt="">
        </div>
        <div class="description">
            <p style="color: ${obj.inStock_count > 0 ? "" : "red"};" > ${
      obj.inStock_count > 0
        ? "Available(in stock)"
        : " <span>no_available(in stock)</span> "
    } </p>
            <h5> ${obj.name} </h5>
            <p class="del">$${(
              obj.price -
              (obj.price / 100) * obj.sale
            ).toFixed(2)}  <del>$${obj.price} </del></p>
        </div>
        ${
          cart
            ? `
        <div class="buttons">
        <div class="plus_minus">
            <button onclick='handleMinus(${obj.id},${JSON.stringify(
                data
              )}, "${element}")' >-</button>
            <h1> ${obj.count}</h1>
            <button onclick='handlePlus(${obj.id},${JSON.stringify(
                data
              )}, "${element}")'>+</button>
        </div>
        <button onclick='add_to_cart(${obj.id}, ${JSON.stringify(data)})'>
          <i class="fa-solid fa-cart-plus"></i>
        </button>
    </div> 
        `
            : ` ${obj.count} `
        }
      </div>
    `;
  }
}

read_product(products, ".products");
read_product(products_2, ".vf");
read_product(products_3, ".new_p");

// read_products();
function handleLike(item_id, massiv, class_nomi) {
  massiv = massiv.map((item) =>
    item.id === item_id
      ? {
          ...item,
          isLike: !item.isLike,
        }
      : item
  );
  read_product(massiv, class_nomi);
}

const like_count_inner = () => {};

const handleMinus = (item_id, massiv, class_nomi) => {
  console.log(item_id, massiv, class_nomi);
  massiv = massiv.map((k) => {
    return k.id === item_id ? { ...k, count: k.count - 1 } : k;
  });
  read_product(massiv, class_nomi);
};
const handlePlus = (item_id, array, class_nomi) => {
  array = array.map((c) =>
    item_id === c.id && c.count < c.inStock_count
      ? { ...c, count: c.count + 1 }
      : c
  );
  // console.log(item_id, array, class_nomi);
  read_product(array, class_nomi);
};

// let qiymat = true
// if(qiymat) {
//   console.log('salom');
// }

const add_to_cart = function (ID, array) {
  let obj = array.find((c) => c.id === ID);
  // savatcha.push(item)

  if (!savatcha.find((p) => p.id === ID) && obj.inStock_count > 0) {
    savatcha.push(obj);
  } else {
    // alert('savatcha mahsulot mavjud')
    savatcha = savatcha.map((item) =>
      item.id === ID ? { ...item, count: item.count + 1 } : item
    );
  }

  document.querySelector(".cart_count").innerHTML = savatcha.length;

  // savatcha = [...savatcha, item]
  // savatcha = savatcha.concat(item);
  console.log(savatcha);
  read_product(savatcha, ".savatcha", false);
};

cart_btn.addEventListener("click", function () {
  document.body.style.overflow = "hidden";
  cart_box.style.top = "0";
  // cart_box.style.opacity = "1";
});

const close_modal = function () {
  document.body.style.overflow = "auto";
  cart_box.style.top = "-100vh";
  // cart_box.style.opacity = "0";
};
