import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "70vh",
          background:
            "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30') center/cover no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h1 className="fw-bold display-5">Welcome to Namaste Mart 🛒</h1>
          <p className="lead mb-4">
            Your trusted online store for all daily essentials & electronics.
          </p>
          <Link
            to="/shop"
            className="btn btn-warning btn-lg px-4 py-2 fw-bold shadow"
          >
            Start Shopping
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Why Shop With Us?</h2>

        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 shadow rounded">
              <h3>🚀 Fast Delivery</h3>
              <p>Get your products quickly with our reliable delivery system.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow rounded">
              <h3>💰 Best Prices</h3>
              <p>We offer high-quality products at affordable prices.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 shadow rounded">
              <h3>🔒 Secure Checkout</h3>
              <p>Your payment and personal details stay safe with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-dark text-white text-center py-5">
        <h2 className="fw-bold mb-3">Ready to Explore New Products?</h2>
        <Link
          to="/products"
          className="btn btn-outline-light btn-lg rounded-pill px-4"
        >
          Browse Products
        </Link>
      </div>
    </>
  );
}
