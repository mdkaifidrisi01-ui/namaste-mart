import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    API.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error loading product:", err));
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {product.image && (
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          )}
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted fs-5">₹{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
