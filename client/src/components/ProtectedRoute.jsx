import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../services/auth';

export default function ProtectedRoute({ children, role }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    try {
      const u = getUser();
      setUser(u);
    } catch (err) {
      console.error('Error fetching user:', err);
      setUser(null);
    } finally {
      setChecking(false);
    }
  }, []);

  // ✅ While checking auth (prevents flicker)
  if (checking) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  // ✅ Not logged in → Redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // ✅ Role-based protection (single or multiple roles)
  if (role) {
    if (Array.isArray(role)) {
      if (!role.includes(user.role)) return <Navigate to="/" replace />;
    } else if (user.role !== role) {
      return <Navigate to="/" replace />;
    }
  }

  // ✅ Authorized → Render children
  return children;
}
