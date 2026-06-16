import { FiStar } from "react-icons/fi";
import "./Testimonials.css";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";

const feedback = [
  {
    text: "I booked a plumber in less than 15 minutes. Super easy and reliable service!",
    name: "Sarah K.",
    loc: "Lagos, Nigeria",
    img: testimonial1,
  },
  {
    text: "This platform helped me find amazing clients for my photography business. Highly recommended.",
    name: "John M.",
    loc: "Abuja, Nigeria",
    img: testimonial2,
  },
  {
    text: "Finally a place where i can trust service providers. The reviews really help.",
    name: "Daniel A.",
    loc: "Benin, Nigeria",
    img: testimonial3,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>

        <div className="testimonials-grid">
          {feedback.map((f, i) => (
            <div key={i} className="feedback-card">
              <span className="quote-mark">“</span>
              <p className="feedback-text">{f.text}</p>

              <div className="feedback-user">
                <img src={f.img} alt={f.name} className="testimonial-avatar" />
                <div>
                  <h4>{f.name}</h4>
                  <p>{f.loc}</p>
                </div>
                <div className="user-stars">
                  {[...Array(5)].map((_, sIndex) => (
                    <FiStar key={sIndex} className="star-filled" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
