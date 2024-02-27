let products = [
  {
    id: 0,
    sale: 15,
    img: 'img/persik.png',
    inStock_count: 10,
    name: 'Fresh organic apricot',
    price: 21,
    count: 0,
    isLike: false
  },
  {
    id: 1,
    sale: 12,
    img: 'img/cucumber.png',
    inStock_count: 0,
    name: 'Cucumber',
    price: 25,
    count: 0,
    isLike: false
  },
  {
    id: 2,
    sale: 14,
    img: 'img/orex.png',
    inStock_count: 3,
    name: 'Hazelnuts filbert nut',
    price: 22,
    count: 0,
    isLike: false
  },
  {
    id: 3,
    sale: 17,
    img: 'img/broccoli.png',
    inStock_count: 0,
    name: 'Raw broccoli',
    price: 14,
    count: 0,
    isLike: false
  },
  {
    id: 4,
    sale: 8,
    img: 'img/fruit.png',
    inStock_count: 10,
    name: 'Organic quince',
    price: 10,
    count: 0,
    isLike: false
  },
],
  products_box = document.querySelector('.products'),
  like_count = document.querySelector('.like_count')

// true ? console.log('salom') : console.log('hello');


function read_products() {
  products_box.innerHTML = ``
  for (const obj of products) {
    products_box.innerHTML += `
      <div class="product">
        <div class="heading">
            <p> ${obj.sale}%Off</p>
            <button onclick='handleLike(${obj.id})'>
              ${obj.isLike ? ` <i class="fa-solid fa-heart"></i>` : `  <i class="fa-regular fa-heart"></i>`}
            </button>
        </div>
        <div class="img">
            <img src="${obj.img}" alt="">
        </div>
        <div class="description">
            <p style="color: ${obj.inStock_count > 0 ? "" : 'red'};" > ${obj.inStock_count > 0 ? "Available(in stock)" : ' <span>no_available(in stock)</span> '} </p>
            <h5> ${obj.name} </h5>
            <p class="del">$${(obj.price - (obj.price / 100) * obj.sale).toFixed(2)}  <del>$${obj.price} </del></p>
        </div>
        <div class="buttons">
            <div class="plus_minus">
                <button onclick='handleMinus(${obj.id})' >-</button>
                <h1> ${obj.count}  </h1>
                <button onclick='handlePlus(${obj.id})'>+</button>
            </div>
            <a href="#"><img src="img/Vector (1).png" alt=""></a>
        </div>
      </div>
    `
  }
}
read_products()
function handleLike(item_id) {
  // console.log(cevfjew);
  products = products.map(item => (
    item.id === item_id ? { ...item, isLike: !item.isLike } : item
  ))

  read_products()
  like_count_inner()
}

const like_count_inner = () => {
  like_count.innerHTML = products.filter(item => item.isLike === true).length
}
like_count_inner()




const handleMinus = (item_id) => {
  products = products.map(k => {
    return k.id === item_id && k.count > 0 ? { ...k, count: k.count - 1 } : k
  })
  read_products()
}
const handlePlus = (item_id) => {
  products = products.map(c => item_id === c.id && c.count < c.inStock_count ? { ...c, count: c.count + 1 } : c)
  read_products()

}

// products.map((item) => {
//   console.log(item);
// })

// console.log(products);

// let p = []
// for (const obj of products) {
//   if (obj.price > 15) {
//     p.push(obj)
//   }
// }