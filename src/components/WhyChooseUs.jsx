import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "✈️",
      title: "Best Tour Packages",
      description: "Affordable domestic and international tour packages."
    },
    {
      icon: "🏨",
      title: "Premium Hotels",
      description: "Comfortable stays with top-rated hotels."
    },
    {
      icon: "🛡️",
      title: "Safe Travel",
      description: "Secure bookings and trusted travel partners."
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our support team is available anytime to help you."
    }
  ];

  return (
    <section className="why-section">
      <h2>Why Choose Travel Buddy?</h2>

      <div className="feature-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;