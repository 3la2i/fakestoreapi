const serverData = [];
const main = document.getElementById("main");

function Product(title, price, description, image) {
  this.title = title;
  this.description = description;
  this.image = image;
  this.price = price;
}
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const newData = [];

    console.log("data server", products);

    products.forEach((data) => {
      const item = new Product(
        data.title,
        data.price,
        data.description,
        data.image
      );
      newData.push(item);
    });

    console.log(newData);

    newData.forEach((data) => {
      const productCard = document.createElement("div");

      const title = document.createElement("h2");
      title.innerText = data.title;
      productCard.appendChild(title);
      main.appendChild(productCard);

      const price = document.createElement("h3");
      price.innerText = data.price;
      productCard.appendChild(price);
      main.appendChild(productCard);

      const description = document.createElement("p");
      description.innerText = data.description;
      productCard.appendChild(description);
      main.appendChild(productCard);

      const image = document.createElement("img");
      image.setAttribute("src", data.image);

      productCard.appendChild(image);
      main.appendChild(productCard);
    });
  });

// console.log(product);
