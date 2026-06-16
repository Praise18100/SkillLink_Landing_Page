import { FiStar, FiMapPin, FiHeart } from "react-icons/fi";
import "./Providers.css";
import provider1 from "../../assets/provider1.png";
import provider2 from "../../assets/provider2.png";
import provider3 from "../../assets/provider3.png";
import provider4 from "../../assets/provider4.png";

const providers = [
  {
    name: "David Okafor",
    role: "Photographer",
    rating: "4.8",
    reviews: "132",
    location: "Lagos, Nigeria",
    img: provider1,
  },
  {
    name: "Aisha Bello",
    role: "Tailor",
    rating: "4.9",
    reviews: "203",
    location: "Ikeja, Nigeria",
    img: provider2,
  },
  {
    name: "Emeka Joseph",
    role: "Electrician",
    rating: "4.7",
    reviews: "98",
    location: "Surulere, Nigeria",
    img: provider3,
  },
  {
    name: "Adora Chike",
    role: "Makeup Artist",
    rating: "4.9",
    reviews: "176",
    location: "Victoria Island, Nigeria",
    img: provider4,
  },
];

const Providers = () => {
  return (
    <section className="providers">
      <div className="providers-container">
        <div className="providers-header">
          <h2>Featured Service Providers</h2>
          <a href="#all" className="view-all">
            View All Providers &rarr;
          </a>
        </div>

        <div className="providers-grid">
          {providers.map((p, i) => (
            <div key={i} className="provider-card">
              <button className="favorite-btn">
                <FiHeart />
              </button>
              <img src={p.img} alt={p.name} className="provider-avatar" />
              <h3>{p.name}</h3>
              <p className="provider-role">{p.role}</p>

              <div className="provider-rating">
                <FiStar className="star-icon" />
                <span>
                  <strong>{p.rating}</strong> ({p.reviews} Reviews)
                </span>
              </div>

              <div className="provider-loc">
                <FiMapPin /> <span>{p.location}</span>
              </div>

              <button className="profile-btn">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providers;
