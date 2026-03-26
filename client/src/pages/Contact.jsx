import React, { useState } from 'react';
import api from '../services/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [ok, setOk] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setOk(false);
    setError('');
    setLoading(true);

    try {
      await api.post('/contact', form);
      setOk(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          'Failed to send message. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Contact Us 📩</h2>

          {ok && (
            <div className="alert alert-success text-center">
              ✅ Thanks! We received your message.
            </div>
          )}

          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}

          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="col-md-6 mt-5 mt-md-0">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.0!2d72.8777!3d19.0760"
            className="w-100 rounded shadow-sm"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
