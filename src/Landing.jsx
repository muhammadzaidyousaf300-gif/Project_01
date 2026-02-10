import React from "react";

const Landing = () => {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <h2 style={styles.logo}>MyBrand</h2>
        <nav style={styles.navLinks}>
          <a href="#features" style={styles.link}>Features</a>
          <a href="#items" style={styles.link}>Items</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>Beautiful Products for Modern Life</h1>
          <p style={styles.subtitle}>
            Simple, clean, and thoughtfully designed items that make your life better.
          </p>
          <button style={styles.primaryBtn}>Get Started</button>
        </div>
        <div style={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Product"
            style={styles.image}
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.card}>
            <h3>High Quality</h3>
            <p>Carefully crafted products made to last.</p>
          </div>
          <div style={styles.card}>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping worldwide.</p>
          </div>
          <div style={styles.card}>
            <h3>Secure Payment</h3>
            <p>Your transactions are safe and encrypted.</p>
          </div>
        </div>
      </section>

      {/* Items */}
      <section id="items" style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>Featured Items</h2>
        <div style={styles.itemsGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={styles.itemCard}>
              <img
                src={`https://source.unsplash.com/400x300/?product,${item}`}
                alt="Item"
                style={styles.itemImage}
              />
              <h4>Product Name</h4>
              <p>$49.99</p>
              <button style={styles.secondaryBtn}>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    color: "#111",
    lineHeight: 1.6
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #eee"
  },
  logo: { margin: 0 },
  navLinks: { display: "flex", gap: "20px" },
  link: { textDecoration: "none", color: "#333" },
  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "80px 40px",
    gap: "40px"
  },
  heroText: { flex: 1, minWidth: "280px" },
  heroImage: { flex: 1, minWidth: "280px" },
  title: { fontSize: "48px", marginBottom: "20px" },
  subtitle: { fontSize: "18px", marginBottom: "30px", color: "#555" },
  image: { width: "100%", borderRadius: "12px" },
  primaryBtn: {
    padding: "14px 28px",
    fontSize: "16px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  secondaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  section: { padding: "80px 40px" },
  sectionAlt: { padding: "80px 40px", backgroundColor: "#f9fafb" },
  sectionTitle: { fontSize: "32px", marginBottom: "40px", textAlign: "center" },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px"
  },
  card: {
    padding: "30px",
    border: "1px solid #eee",
    borderRadius: "12px",
    textAlign: "center"
  },
  itemsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px"
  },
  itemCard: {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
  },
  itemImage: { width: "100%", borderRadius: "10px", marginBottom: "15px" },
  footer: {
    padding: "30px",
    textAlign: "center",
    borderTop: "1px solid #eee",
    color: "#666"
  }
};

export default Landing;