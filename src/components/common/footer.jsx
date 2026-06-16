import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <h3>SkillLink</h3>
          <p>Connecting you with trusted local professionals to get the job done.</p>
          <div className="social-links">
            <a href="#fb"><FiFacebook /></a>
            <a href="#tw"><FiTwitter /></a>
            <a href="#ig"><FiInstagram /></a>
            <a href="#li"><FiLinkedin /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <a href="#explore">Explore Services</a>
          <a href="#popular">Popular Categories</a>
          <a href="#works">How it Works</a>
          <a href="#provider">Become a provider</a>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <a href="#help">Help Center</a>
          <a href="#safety">Safety Center</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>

        <div className="footer-col newsletter-col">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates and offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;