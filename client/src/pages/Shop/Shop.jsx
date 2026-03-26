import React from "react";
import ShopCard from "../../components/ShopCard";


export default function Shop() {
  const products = [
    { name: "Smartphone", price: 12999, image: "https://via.placeholder.com/300" },
    { name: "Headphones", price: 1999, image: "https://via.placeholder.com/300" },
    { name: "Shoes", price: 1499, image: "https://via.placeholder.com/300" },
    { name: "Watch", price: 2499, image: "https://via.placeholder.com/300" },
    { name: "Laptop", price: 49999, image: "https://via.placeholder.com/300" },
    { name: "Keyboard", price: 999, image: "https://via.placeholder.com/300" },
    { name: "Mouse", price: 699, image: "https://via.placeholder.com/300" },
    { name: "Bag", price: 899, image: "https://via.placeholder.com/300" },
    { name: "T-shirt", price: 499, image: "https://via.placeholder.com/300" },
    { name: "Jacket", price: 1999, image: "https://via.placeholder.com/300" },
    { name: "Sunglasses", price: 799, image: "https://via.placeholder.com/300" },
    { name: "Speaker", price: 1299, image: "https://via.placeholder.com/300" },
    { name: "Powerbank", price: 1399, image: "https://via.placeholder.com/300" },
    { name: "USB Cable", price: 199, image: "https://via.placeholder.com/300" },
    { name: "Charger", price: 499, image: "https://via.placeholder.com/300" },
    { name: "Cap", price: 299, image: "https://via.placeholder.com/300" },
    { name: "Wallet", price: 399, image: "https://via.placeholder.com/300" },
    { name: "Camera", price: 15999, image: "https://via.placeholder.com/300" },
    { name: "Tripod", price: 699, image: "https://via.placeholder.com/300" },
    { name: "Microphone", price: 999, image: "https://via.placeholder.com/300" },
    { name: "Earbuds", price: 1499, image: "https://via.placeholder.com/300" },
    { name: "Air Cooler", price: 4999, image: "https://via.placeholder.com/300" },
    { name: "Fan", price: 1299, image: "https://via.placeholder.com/300" },
    { name: "LED Light", price: 199, image: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold text-center">Shop Products</h2>

      <div className="row">
        {products.map((p, index) => (
          <ShopCard
            key={index}
            name={p.name}
            price={p.price}
            image={p.image}
            onAddToCart={() => alert(p.name + " added to cart")}
            onBuyNow={() => alert("Buying " + p.name)}
          />
        ))}
      </div>
    </div>
  );
}
