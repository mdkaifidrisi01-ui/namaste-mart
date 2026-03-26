import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api"; // Make sure API is correctly set

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products from backend
  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-warning" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-dark">
        🛍 Explore Our Products
      </h2>

      {products.length === 0 ? (
        <div className="alert alert-info text-center shadow-sm">
          No products available yet.
        </div>
      ) : (
        <div className="row g-4">
          {products.map((p) => (
            <div key={p._id} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden"
                style={{
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 3px 10px rgba(0,0,0,0.1)";
                }}
              >
                {/* PRODUCT IMAGE */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                ) : (
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ height: "200px" }}
                  >
                    <span className="text-muted">No Image</span>
                  </div>
                )}

                {/* PRODUCT DETAILS */}
                <div className="card-body text-center">
                  <h6 className="card-title fw-semibold text-dark text-truncate">
                    {p.title}
                  </h6>

                  <p className="text-success fw-bold mb-3">
                    ₹{p.price?.toLocaleString()}
                  </p>

                  <Link
                    to={`/products/${p._id}`}
                    className="btn btn-outline-primary btn-sm w-100 rounded-pill"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
