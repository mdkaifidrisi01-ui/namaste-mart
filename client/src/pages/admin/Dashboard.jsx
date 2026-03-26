import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">🛠️ Admin Dashboard</h1>
        <p className="text-muted">
          Manage your store efficiently — view insights, handle products, and track orders from one place.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="row g-4">
        {/* Products Card */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="fa fa-cubes fa-3x text-primary mb-3"></i>
            <h4 className="fw-semibold mb-2">Manage Products</h4>
            <p className="text-muted">Add, edit, or remove items from your store’s inventory.</p>
            <Link to="/admin/products" className="btn btn-outline-primary btn-sm mt-2">
              Go to Products
            </Link>
          </div>
        </div>

        {/* Orders Card */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="fa fa-shopping-bag fa-3x text-success mb-3"></i>
            <h4 className="fw-semibold mb-2">Manage Orders</h4>
            <p className="text-muted">View and update customer orders and track their status.</p>
            <Link to="/admin/orders" className="btn btn-outline-success btn-sm mt-2">
              View Orders
            </Link>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center p-4">
            <i className="fa fa-line-chart fa-3x text-warning mb-3"></i>
            <h4 className="fw-semibold mb-2">Analytics</h4>
            <p className="text-muted">Get insights into your store’s sales and performance.</p>
            <Link to="/admin/analytics" className="btn btn-outline-warning btn-sm mt-2">
              View Analytics
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-5">
        <p className="text-secondary">
          Built with ❤️ using the <strong>MERN Stack</strong> — MongoDB, Express, React, and Node.js.
        </p>
      </div>
    </div>
  );
}
