import { FiCheckCircle, FiUsers, FiBriefcase, FiGrid, FiStar } from 'react-icons/fi';
import './Hero.css';
import heroImg from '../../assets/hero.png'; 


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Find Trusted Local<br />Professionals Near You <span className="highlight">Fast & Easy</span></h1>
          <p>
            Connect with verified artisans and freelancers in your area. From electricians and plumbers to designers and photographers. Hire the right expert in minutes.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Find a Service</button>
            <button className="btn-secondary">Become a Provider</button>
          </div>

          <div className="hero-badges">
            <span><FiCheckCircle className="badge-icon" /> Verified Professionals</span>
            <span><FiCheckCircle className="badge-icon" /> Secure Payments</span>
            <span><FiCheckCircle className="badge-icon" /> Real Customer Reviews</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper-hero">
             <img 
              src={heroImg} 
              alt="Local professional providing service" 
              className="hero-image" 
            />
          </div>
        </div>
      </div>

      <div className="stats-bar-container">
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-icon-box"><FiUsers /></div>
            <div><h3>5,000+</h3><p>Verified professionals</p></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-box"><FiBriefcase /></div>
            <div><h3>20,000+</h3><p>Jobs Completed</p></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-box"><FiGrid /></div>
            <div><h3>25+</h3><p>Service Categories</p></div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-box"><FiStar /></div>
            <div><h3>4.8/5</h3><p>Average Ratings</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;