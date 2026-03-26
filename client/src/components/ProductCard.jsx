import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  if (!product) return null; // Safety check in case product is undefined

  return (
    <div className="card shadow-sm border-0 h-100">
      <Link to={`/products/${product._id}`} className="text-decoration-none text-dark">
        <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title || 'Product'}
              className="card-img-top object-fit-cover"
              style={{ height: '200px', objectFit: 'cover' }}
            />
          ) : (
            <span className="text-muted">No Image</span>
          )}
        </div>
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text text-muted mb-3">₹ {product.price?.toLocaleString('en-IN')}</p>

        <Link
          to={`/products/${product._id}`}
          className="btn btn-primary mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
