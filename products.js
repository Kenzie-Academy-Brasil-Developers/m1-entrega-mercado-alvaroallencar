const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

// Simulando a adição de novos produtos para
// serem renderizados de forma dinâmica:

products.push({
  title: "Banana",
  price: 5.69,
  category: "Frutas",
  image: "./img/products/product_2.svg",
  imageDescription: "",
});

products.push({
  title: "Sabonete",
  price: 8.99,
  category: "Higiene",
  image: "./img/products/product_9.svg",
  imageDescription: "",
});

products.push({
  title: "Vinho",
  price: 8.99,
  category: "Bebidas",
  image: "./img/products/product_6.svg",
  imageDescription: "",
});

function fruitsCategory(container) {

  let productsSectionFruits = document.createElement("section");

  productsSectionFruits.classList.add("products-section");

  container.appendChild(productsSectionFruits);

  let fruitsTitle = document.createElement("h1");

  fruitsTitle.innerText = "Frutas";

  productsSectionFruits.appendChild(fruitsTitle);

  let productContentFruits = document.createElement("main");

  productContentFruits.classList.add("products-content", "fruits");

  productsSectionFruits.appendChild(productContentFruits);

  let ulFruits = document.createElement("ul");

  productContentFruits.appendChild(ulFruits);

  addProductsToFruitsCategory(products, ulFruits);

}

function drinksCategory(container) {

  let productsSectionDrinks = document.createElement("section");

  productsSectionDrinks.classList.add("products-section");

  container.appendChild(productsSectionDrinks);

  let drinksTitle = document.createElement("h1");

  drinksTitle.innerText = "Bebidas";

  productsSectionDrinks.appendChild(drinksTitle);

  let productContentDrinks = document.createElement("main");

  productContentDrinks.classList.add("products-content", "drinks");

  productsSectionDrinks.appendChild(productContentDrinks);

  let ulDrinks = document.createElement("ul");

  productContentDrinks.appendChild(ulDrinks);

  addProductsToDrinksCategory(products, ulDrinks);

}

function hygieneCategory(container) {

  let productsSectionHygiene = document.createElement("section");

  productsSectionHygiene.classList.add("products-section");

  container.appendChild(productsSectionHygiene);

  let hygieneTitle = document.createElement("h1");

  hygieneTitle.innerText = "Higiene";

  productsSectionHygiene.appendChild(hygieneTitle);

  let productContentHygiene = document.createElement("main");

  productContentHygiene.classList.add("products-content", "hygiene");

  productsSectionHygiene.appendChild(productContentHygiene);

  let ulHygiene = document.createElement("ul");

  productContentHygiene.appendChild(ulHygiene);

  addProductsToHygieneCategory(products, ulHygiene);

}

function addProductsToFruitsCategory(productsList, ulFruits) {

  for (let i = 0; i < productsList.length; i++) {

    if (productsList[i].category === "Frutas") {

      let li = document.createElement("li");

      li.classList.add("product");

      ulFruits.appendChild(li);

      productCard(productsList, li, i);

    }

  }
}

function addProductsToDrinksCategory(productsList, ulDrinks) {

  for (let i = 0; i < productsList.length; i++) {

    if (productsList[i].category === "Bebidas") {

      let li = document.createElement("li");

      li.classList.add("product");

      ulDrinks.appendChild(li);

      productCard(productsList, li, i);

    }

  }
}

function addProductsToHygieneCategory(productsList, ulHygiene) {

  for (let i = 0; i < productsList.length; i++) {

    if (productsList[i].category === "Higiene") {

      let li = document.createElement("li");

      li.classList.add("product");

      ulHygiene.appendChild(li);

      productCard(productsList, li, i);

    }

  }
}

function productCard(productsList, li, i) {

  let img = document.createElement("img");

  li.appendChild(img);

  img.setAttribute("alt", productsList[i].imageDescription);

  img.setAttribute("title", productsList[i].title);

  img.classList.add("product-img");

  if (productsList[i].image === undefined) {

    img.setAttribute("src", "./img/products/no-img.svg");

  } else {

    img.setAttribute("src", productsList[i].image);

  }

  let mainProduct = document.createElement("main");

  mainProduct.classList.add("product-main");

  li.appendChild(mainProduct);

  let productTitle = document.createElement("h1");

  productTitle.classList.add("product-title");

  productTitle.innerText = productsList[i].title;

  mainProduct.appendChild(productTitle);

  let productCategory = document.createElement("h5");

  productCategory.classList.add("product-category");

  productCategory.innerText = productsList[i].category;

  mainProduct.appendChild(productCategory);

  let productPrice = document.createElement("strong");

  productPrice.classList.add("product-price");

  productPrice.innerText = `R$ ${productsList[i].price.toFixed(2)}`;

  mainProduct.appendChild(productPrice);

}

function renderScope() {

  let body = document.body;

  let mainContainer = document.createElement("main");

  mainContainer.classList.add("container");

  body.appendChild(mainContainer);

  fruitsCategory(mainContainer);

  drinksCategory(mainContainer);

  hygieneCategory(mainContainer);

}

renderScope();



