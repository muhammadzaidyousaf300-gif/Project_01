import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div>

      {/* ---------------- HEADER ---------------- */}
      <header className="header">
        <div className="logo">
          <img src="https://sl.bing.net/gKuAaspGhjg" alt="Logo" />
          <h2 style={{ color: "#ffffff" }}>Website</h2>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="nav-menu-icon">
          <i className="fa fa-bars"></i>
        </div>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Best <span>Landing Page </span>
          </h1>

          <p>
            Not all landing page design companies out there have the expertise
            or experience needed to drive conversion and growth. Check out our
            carefully selected top design agencies and make an informed choice today!
          </p>

          <button className="btn-main">Learn More</button>
        </div>

        <div className="hero-right">
          <img src="/illustration.png" alt="Illustration" />
        </div>
      </section>

      {/* Background Curve */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h3>etweb</h3>
            <p>
              We build high-converting landing pages that help businesses grow
              faster and smarter in the digital world.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#service">Service</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: support@etweb.com</p>
            <p>Phone: +92 300 0000000</p>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} etweb. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Landing;
