import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row">
          {/* Brand / Description */}
          <div className="col-md-4 mb-4">
            <img
              src="/logo.png"
              alt="Namaste Mart Logo"
              style={{ maxWidth: "150px" }}
              className="mb-3"
            />
            <p className="text-light-50">
              Namaste Mart is a modern e-commerce platform built with MERN, offering
              seamless shopping and fast delivery.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3 fw-bold">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5 className="mb-3 fw-bold">Support</h5>
            <ul className="list-unstyled small">
              <li><a href="/help" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3 fw-bold">Contact Us</h5>
            <p className="small mb-1">Email: contact@namastemart.in</p>
            <p className="small mb-2">Phone: +91 91234 56789</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-4"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-light fs-4"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="d-flex justify-content-between flex-column flex-md-row text-center text-md-start small">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Namaste Mart. All Rights Reserved.
          </p>
          <p className="mb-0">
            Designed by <span className="text-light">MD Kaif Idrisi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
