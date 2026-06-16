import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-box">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Find trusted professionals to grow your service business today.</p>
          </div>
          <div className="cta-actions">
            <button className="cta-btn-white">Find a Service</button>
            <button className="cta-btn-outline">Join as Provider</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;