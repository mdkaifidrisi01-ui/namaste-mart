import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null);

  // Fetch orders from API
  const loadOrders = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/orders');
      setOrders(data);
    } catch (err) {
      console.error('Error loading orders:', err);
      alert('Failed to load orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // Update order status
  const updateStatus = async (id, status) => {
    try {
      setUpdating(id);
      await api.patch(`/orders/${id}/status`, { status });
      await loadOrders();
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Could not update order status.');
    } finally {
      setUpdating(null);
    }
  };

  // Status badge color logic
  const getStatusBadge = (status) => {
    const colors = {
      pending: 'warning',
      paid: 'info',
      shipped: 'primary',
      completed: 'success',
      cancelled: 'danger',
    };
    return (
      <span className={`badge bg-${colors[status] || 'secondary'}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  if (loading) {
    return <p className="text-center mt-5">Loading orders...</p>;
  }

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4 text-primary">🧾 Manage Orders</h2>

      {orders.length === 0 ? (
        <div className="alert alert-info">No orders found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle shadow-sm">
            <thead className="table-light">
              <tr>
                <th>Customer</th>
                <th>Total (₹)</th>
                <th>Status</th>
                <th>Placed On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o._id}>
                  <td>
                    <strong>{o.user?.name}</strong>
                    <br />
                    <small className="text-muted">{o.user?.email}</small>
                  </td>
                  <td><strong>{o.total.toFixed(2)}</strong></td>
                  <td>{getStatusBadge(o.status)}</td>
                  <td>{new Date(o.createdAt).toLocaleString()}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      value={o.status}
                      onChange={(e) => updateStatus(o._id, e.target.value)}
                      disabled={updating === o._id}
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="shipped">Shipped</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
