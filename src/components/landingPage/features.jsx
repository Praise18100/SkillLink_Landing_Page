import { FiUser, FiCheck } from 'react-icons/fi';
import './Features.css';
import whyChoose from '../../assets/whyChoose.png'; 

const Features = () => {
  return (
    <section className="features" id="about">
      <div className="features-container">
        <div className="features-left">
          <h2>Why Choose SkillLink?</h2>
          
          <div className="feature-list">
            <div className="feature-item">
              <div className="f-icon-box"><FiUser /></div>
              <div>
                <h4>Verified & Trusted Professionals</h4>
                <p>All providers go through a verification process.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="f-icon-box"><FiUser /></div>
              <div>
                <h4>Secure Online Payments</h4>
                <p>Pay safely and conveniently through our payment platforms.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="f-icon-box"><FiUser /></div>
              <div>
                <h4>Fast Booking system</h4>
                <p>Book services in just a few minutes through our secure payment system.</p>
              </div>
            </div>

            <div className="feature-item">
             <div className="f-icon-box"><FiUser /></div>
              <div>
                <h4>24/7 Support</h4>
                <p>Our support team is always ready to help you.</p>
              </div>
            </div>

            <div className="feature-item">
             <div className="f-icon-box"><FiUser /></div>
              <div>
                <h4>Transparent Reviews & Ratings</h4>
                <p>Make informed decisions with real customers feedback.</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="features-right">
          <div className="growth-card">
            <h3>Grow Your Business with SkillLink</h3>
            <p>Join thousands of skilled professionals who are growing their business and reaching more customers everyday.</p>
            
            <ul className="growth-bullets">
              <li><FiCheck /> Create your profile</li>
              <li><FiCheck /> Showcase your skills</li>
              <li><FiCheck /> Get discovered</li>
              <li><FiCheck /> Manage bookings & earnings</li>
            </ul>

            <button className="provider-join-btn">Become a Provider</button>
          </div>
          <div className="growth-img-frame">
            <img src={whyChoose}  alt="Professional worker" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;