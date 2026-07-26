import "./NeedHelp.css";

function NeedHelp() {
  return (
    <div className="help-page">

      {/* Hero Section */}

      <section className="help-hero">

        <h1>Help Center</h1>

        <p>
          Find answers to frequently asked questions about Travel Buddy.
        </p>

      </section>



      {/* FAQ Section */}

      <section className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-card">
          <h3>🧳 How do I book a tour package?</h3>
          <p>
            Browse the available tour packages, choose your preferred
            destination, select the travel date, and complete your booking
            by making the payment.
          </p>
        </div>

        <div className="faq-card">
          <h3>💳 Which payment methods are supported?</h3>
          <p>
            Travel Buddy supports UPI, debit cards, credit cards,
            net banking, and digital wallets through Razorpay.
          </p>
        </div>

        <div className="faq-card">
          <h3>❌ Can I cancel my booking?</h3>
          <p>
            Yes. Cancellation is available according to the cancellation
            policy of the selected tour package.
          </p>
        </div>

        <div className="faq-card">
          <h3>🎫 Where can I find my booked ticket?</h3>
          <p>
            After a successful booking, your ticket will be available
            in the <strong>Issued Ticket</strong> section of your account.
          </p>
        </div>

        <div className="faq-card">
          <h3>📅 Can I change my travel date?</h3>
          <p>
            Travel date changes depend on package availability.
            Contact our support team for assistance.
          </p>
        </div>

        <div className="faq-card">
          <h3>👤 How can I update my profile?</h3>
          <p>
            Go to <strong>My Profile</strong> after logging in and
            update your personal information.
          </p>
        </div>

      </section>



      {/* Emergency Support */}

      <section className="support-box">

        <h2>Still Need Help?</h2>

        <p>
          If you couldn't find the answer you're looking for,
          our support team is happy to assist you.
        </p>

        <div className="support-details">

          <p>
            📧 support@travelbuddy.com
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            🕘 Monday - Saturday | 9:00 AM - 6:00 PM
          </p>

        </div>

      </section>

    </div>
  );
}

export default NeedHelp;