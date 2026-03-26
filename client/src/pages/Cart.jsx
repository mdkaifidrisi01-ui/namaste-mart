import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(stored);
  }, []);

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Remove item
  const remove = (idx) => {
    const next = cart.filter((_, i) => i !== idx);
    setCart(next);
    localStorage.setItem('cart', JSON.stringify(next));
  };

  // Clear cart
  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
      localStorage.removeItem('cart');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">🛍️ Your Cart</h2>

      <div className="table-responsive shadow-sm">
        <table className="table align-middle table-bordered">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td className="text-center">₹ {item.price}</td>
                <td className="text-center">{item.qty}</td>
                <td className="text-center">₹ {(item.price * item.qty).toFixed(2)}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => remove(index)}
                    title="Remove item"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table-light">
            <tr>
              <td colSpan="3" className="text-end">
                <strong>Total:</strong>
              </td>
              <td colSpan="2">
                <strong>₹ {total.toFixed(2)}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="btn btn-success" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
