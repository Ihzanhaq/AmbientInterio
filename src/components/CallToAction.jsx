import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <CTASection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Transform Your Space?</h2>
          <p>Schedule a free consultation with our design team today.</p>
          <Link to="/contact" className="btn">Get Started</Link>
        </motion.div>
      </div>
    </CTASection>
  );
};

const CTASection = styled.section`
  padding: 5rem 0;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .btn {
    background: white;
    color: var(--primary-color);
    
    &:hover {
      background: var(--accent-color);
      color: white;
    }
  }
`;

export default CallToAction;