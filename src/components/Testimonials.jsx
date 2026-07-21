import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      place: "Pune",
      rating: "★★★★★",
      review:
        "Travel Buddy made our Goa trip amazing. Everything was perfectly managed!",
    },
    {
      name: "Priya Patil",
      place: "Mumbai",
      rating: "★★★★★",
      review:
        "The booking process was simple, and the hotel was excellent. Highly recommended!",
    },
    {
      name: "Amit Verma",
      place: "Delhi",
      rating: "★★★★☆",
      review:
        "Affordable packages with great customer support. Will book again!",
    },
  ];

  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="profile-circle">
              {review.name.charAt(0)}
            </div>

            <h3>{review.name}</h3>
            <span>{review.place}</span>

            <div className="rating">{review.rating}</div>

            <p>"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;