import React from "react";

export default function About() {
  const teamMembers = [
    { name: "Kaif", role: "Founder & Full-Stack Developer" },
    { name: "Kaif", role: "Backend Developer (Node.js/MongoDB)" },
    { name: "Kaif", role: "Frontend Developer (React)" },
    { name: "Kaif", role: "UI/UX Designer" },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Namaste Mart 🛒</h1>
        <p className="lead text-secondary">
          Your trusted one-stop shop built with modern MERN technology.
        </p>
        <hr className="w-25 mx-auto" />
      </div>

      {/* Story Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
            alt="Namaste Mart"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "80%" }}
          />
        </div>

        <div className="col-md-6">
          <h3 className="fw-semibold text-primary">Our Story</h3>
          <p className="text-muted fs-5">
            Namaste Mart was created to demonstrate the potential of the{" "}
            <strong>MERN stack</strong> — bringing together MongoDB, Express,
            React, and Node.js to build a fast, scalable and modern e-commerce platform.
          </p>

          <h3 className="fw-semibold text-primary mt-4">Our Mission</h3>
          <p className="text-muted fs-5">
            To make online shopping smooth, fast and user-friendly — while helping
            students and developers learn real-world full-stack development.
          </p>

          <h3 className="fw-semibold text-primary mt-4">Technology Stack</h3>
          <ul className="text-muted fs-5">
            <li>⚙️ <strong>MongoDB</strong> – Powerful NoSQL database</li>
            <li>🚀 <strong>Express.js</strong> – Backend API framework</li>
            <li>💻 <strong>React</strong> – Fast UI for seamless UX</li>
            <li>🌐 <strong>Node.js</strong> – High-performance backend runtime</li>
          </ul>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="text-center mb-4">
        <h3 className="fw-semibold text-primary">Meet the Team</h3>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="row g-4">
        {teamMembers.map(({ name, role }, index) => (
          <div className="col-sm-6 col-md-3" key={index}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{ transition: "0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="card-body text-center">
                <h5 className="fw-semibold">{name}</h5>
                <p className="text-muted">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-muted mt-5">
        Designed & developed with ❤️ using the MERN stack.
      </p>
    </div>
  );
}
