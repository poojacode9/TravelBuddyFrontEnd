import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Travel Buddy</h2>
          <p>
            Travel Buddy helps you discover amazing destinations,
            book affordable tour packages, and create unforgettable memories.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Tour Packages</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 9876543210</p>
          <p>📧 support@travelbuddy.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <p>📘 Facebook</p>
          <p>📸 Instagram</p>
          <p>🐦 Twitter</p>
          <p>💼 LinkedIn</p>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 Travel Buddy. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;