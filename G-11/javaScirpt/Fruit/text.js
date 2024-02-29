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
    },
  ],
  products_2 = [
    {
      id: 100,
      sale: 17,
      img: "img/bapple.png",
      inStock_count: 4,
      name: "Fresh organic apricot",
      price: 21,
      count: 0,
      isLike: false,
    },
    {
      id: 101,
      sale: 12,
      img: "img/capsculm.png",
      inStock_count: 0,
      name: "Red apple",
      price: 25,
      count: 0,
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
      isLike: false,
    },
  ],
  products_3 = [
    {
      id: 1000,
      sale: 17,
      img: "img/ginger.png",
      inStock_count: 4,
      name: "Ginger",
      price: 21,
      count: 0,
      isLike: false,
    },
    {
      id: 1001,
      sale: 12,
      img: "img/figs.png",
      inStock_count: 0,
      name: "Two fresh figs",
      price: 25,
      count: 0,
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
      isLike: false,
    },
  ],
  like_count = document.querySelector(".like_count");

function read_product(data, element) {
  document.querySelector(element).innerHTML = ``;
  for (const obj of data) {
    document.querySelector(element).innerHTML += `
      <div class="product">
        <div class="heading">
            <p> ${obj.sale}%Off</p>
            <button onclick='handleLike(${obj.id},${JSON.stringify(
      data
    )}, "${element}")'>
              ${
                obj.isLike
                  ? ` <i class="fa-solid fa-heart"></i>`
                  : `<i class="fa-regular fa-heart"></i>`
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
        : " <span>no_available(in stock)</span>"
    } </p>
            <h5> ${obj.name} </h5>
            <p class="del">$${(
              obj.price -
              (obj.price / 100) * obj.sale
            ).toFixed(2)}  <del>$${obj.price} </del></p>
        </div>
        <div class="buttons">
            <div class="plus_minus">
                <button onclick='handleMinus(${obj.id},${JSON.stringify(
      data
    )}, "${element}")'>-</button>
                <h1 id='id_${obj.id}'> ${obj.count}</h1>
                <button onclick='handlePlus(${obj.id},${JSON.stringify(
      data
    )}, "${element}")'>+</button>
            </div>
            <a href="#"><img src="img/Vector (1).png" alt=""></a>
        </div>
      </div>
    `;
  }
}

read_product(products, ".products");
read_product(products_2, ".vf");
read_product(products_3, ".new_p");

const like_count_inner = () => {
  like_count.innerHTML = [...products, ...products_2, ...products_3].filter(
    (item) => item.isLike === true
  ).length;
};
like_count_inner();

function handleLike(item_id, massiv, k) {
  massiv = massiv.map((item) =>
    item.id === item_id ? { ...item, isLike: !item.isLike } : item
  );
  like_count_inner();
  read_product(massiv, k);
}

const handleMinus = (item_id, massiv, k) => {
  array = massiv.map((c) => {
    return c.id === item_id && c.count > 0 ? { ...c, count: c.count - 1 } : k;
  });
  read_product(massiv, k);
};

const handlePlus = (item_id, massiv, k) => {
  massiv = massiv.map((c) => {
    return c.id === item_id && c.inStock_count > c.count
      ? { ...c, count: c.count + 1 }
      : c;
  });
  read_product(massiv, k);
};
