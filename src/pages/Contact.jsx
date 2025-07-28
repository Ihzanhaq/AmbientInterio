import { motion } from 'framer-motion';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';

const Contact = () => {
  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroSection>
          <div className="container">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="subtitle"
            >
              We'd love to hear about your project
            </motion.p>
          </div>
        </HeroSection>

        <ContactContent>
          <div className="container">
            <ContactFormSection>
              <h2>Send Us a Message</h2>
              <ContactForm />
            </ContactFormSection>

            <ContactDetails>
              <ContactInfo />
              <Map />
            </ContactDetails>
          </div>
        </ContactContent>
      </motion.div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://your-wordpress-site.com/wp-content/uploads/contact-hero.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .subtitle {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const ContactContent = styled.section`
  padding: 5rem 0;
`;

const ContactFormSection = styled.div`
  margin-bottom: 4rem;
  
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--primary-color);
  }
`;

const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Contact;