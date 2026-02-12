import React from "react";
import "./Landing.css";

const items = [
  { id: 1, title: "Item 1", description: "Details about item 1" },
  { id: 2, title: "Item 2", description: "Details about item 2" },
  { id: 3, title: "Item 3", description: "Details about item 3" },
  { id: 4, title: "Item 4", description: "Details about item 4" },
];

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Our Landing Page</h1>
        <p>Explore our amazing items below</p>
      </header>

      <section className="landing-items">
        {items.map((item) => (
          <div key={item.id} className="landing-item-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <footer className="landing-footer">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
