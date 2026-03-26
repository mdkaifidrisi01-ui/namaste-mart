import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    price: '',
    stock: '',
    category: '',
    description: '',
    image: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // ✅ Fetch products
  const loadProducts = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
      alert('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // ✅ Create product
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      if (!form.title || !form.price) {
        alert('Please fill in the title and price.');
        return;
      }
      await api.post('/products', {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock || 0),
      });
      alert('✅ Product added successfully!');
      setForm({
        title: '',
        price: '',
        stock: '',
        category: '',
        description: '',
        image: '',
      });
      loadProducts();
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error adding product. Try again.');
    } finally {
      setSaving(false);
    }
  };

  // ✅ Delete product
  const deleteProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await api.delete(`/products/${id}`);
      alert('🗑️ Product deleted.');
      loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="container-fluid my-4">
      <div className="row">
        {/* ---- Left: Product Form ---- */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">🛒 Add New Product</h3>
            <form onSubmit={createProduct}>
              <input
                className="form-control mb-2"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Stock"
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
              />
              <input
                className="form-control mb-2"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              <input
                className="form-control mb-2"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Description"
                rows="3"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              ></textarea>

              <button
                className="btn btn-primary w-100"
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save Product'}
              </button>
            </form>
          </div>
        </div>

        {/* ---- Right: Product Table ---- */}
        <div className="col-md-8">
          <div className="card shadow-sm p-3">
            <h3 className="text-success mb-3">📦 Products List</h3>

            {loading ? (
              <p className="text-center">Loading products...</p>
            ) : products.length === 0 ? (
              <div className="alert alert-info">No products found.</div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price (₹)</th>
                      <th>Stock</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p._id}>
                        <td>
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={p.title}
                              style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                          ) : (
                            <span className="text-muted">No Image</span>
                          )}
                        </td>
                        <td>{p.title}</td>
                        <td><strong>₹ {p.price.toFixed(2)}</strong></td>
                        <td>{p.stock}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteProduct(p._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
