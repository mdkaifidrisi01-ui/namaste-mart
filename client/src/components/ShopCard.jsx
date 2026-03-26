import React from "react";

export default function ShopCard({ name, price, image, onAddToCart, onBuyNow }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>

          <p className="card-text fw-bold text-success">
            ₹{price.toFixed(2)}
          </p>

          <div className="d-grid gap-2 mt-auto">
            <button className="btn btn-primary" onClick={onAddToCart}>
              Add to Cart
            </button>

            <button className="btn btn-success" onClick={onBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
