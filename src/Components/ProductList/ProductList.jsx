import React from "react";
import Filters from "../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";
let Products = [
  {
    title: "Tesla",
    image:
      "https://i.pinimg.com/564x/66/62/af/6662af5359c558c563fee6f8fdaf3c5f.jpg",
    price: "6000$",
    id: 1,
  },
  {
    title: "BMW",
    image:
      "https://i.pinimg.com/564x/9d/99/5e/9d995eb3c0fe07dc425c58eff07b7b73.jpg",
    price: "9000$",
    id: 2,
  },
  {
    title: "Mers",
    image:
      "https://i.pinimg.com/564x/58/3a/a5/583aa5d1c6168f0c122a263cc04d6e80.jpg",
    price: "6000$",
    id: 3,
  },
  {
    title: "Audi",
    image:
      "https://i.pinimg.com/736x/c2/c2/04/c2c204c7235834a9e75e6c596a82d4df.jpg",
    price: "8000$",
    id: 4,
  },
  {
    title: "Porshe",
    image:
      "https://i.pinimg.com/564x/f1/b9/f4/f1b9f407c86c2a5474bcdfe9a60a73bd.jpg",
    price: "7000$",
    id: 5,
  },
  {
    title: "Sport Car",
    image:
      "https://i.pinimg.com/564x/97/51/fa/9751fa21d11f41522da20ea48a32a924.jpg",
    price: "50000$",
    id: 6,
  },
  {
    title: "Tayota",
    image:
      "https://i.pinimg.com/564x/c5/82/af/c582af5c13feb7efc9e2428df8ba1025.jpg",
    price: "5000$",
    id: 6,
  },
];
const ProductList = () => {
  return (
    <div>
      <Filters />
      <div className="d-flex justify-content-between container mt-5">
        {Products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
