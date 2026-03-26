import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { getToken } from '../services/auth';

export default function Checkout() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = async () => {
    setError('');

    if (!getToken()) {
      alert('⚠️ Please login first.');
      navigate('/login');
      return;
    }

    if (!address.trim()) {
      setError('Please enter a shipping address.');
      return;
    }

    setLoading(true);

    try {
      const items = cart.map((c) => ({
        product: c.product,
        qty: c.qty,
        price: c.price,
      }));

      await api.post('/orders', { items, shippingAddress: address });

      localStorage.removeItem('cart');
      alert('✅ Order placed successfully! (Payment integration coming soon)');
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Something went wrong while placing your order.');
    } finally {
      setLoading(false);
    }
  };

  if (!cart.length) return <p className="text-center mt-4">🛒 Your cart is empty.</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Checkout</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="card p-3 shadow-sm">
        <h5>Shipping Address</h5>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Enter your complete address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <h5 className="mt-3">Order Summary</h5>
        <ul className="list-group mb-3">
          {cart.map((item) => (
            <li
              key={item.product}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {item.title} × {item.qty}
              </span>
              <strong>₹{item.price * item.qty}</strong>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <strong>Total</strong>
            <strong>₹{total.toFixed(2)}</strong>
          </li>
        </ul>

        <button
          className="btn btn-primary w-100"
          onClick={placeOrder}
          disabled={loading}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
}
