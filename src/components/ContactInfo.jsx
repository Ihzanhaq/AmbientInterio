import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <InfoContainer>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>Contact Information</h3>
        
        <InfoItem>
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <div className="content">
            <h4>Address</h4>
            <p>123 Design Street, Creative City, CD 12345</p>
          </div>
        </InfoItem>
        
        <InfoItem>
          <div className="icon">
            <FaPhone />
          </div>
          <div className="content">
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </InfoItem>
        
        <InfoItem>
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="content">
            <h4>Email</h4>
            <p>hello@designhaven.com</p>
          </div>
        </InfoItem>
        
        <InfoItem>
          <div className="icon">
            <FaClock />
          </div>
          <div className="content">
            <h4>Working Hours</h4>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
          </div>
        </InfoItem>
      </motion.div>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  .icon {
    width: 50px;
    height: 50px;
    background: var(--light-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-color);
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .content {
    h4 {
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    
    p {
      color: #666;
      line-height: 1.6;
      
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default ContactInfo;