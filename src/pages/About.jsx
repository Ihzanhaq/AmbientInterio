import { motion } from 'framer-motion';
import styled from 'styled-components';
import TeamSection from '../components/TeamSection';
import HistorySection from '../components/HistorySection';
import ValuesSection from '../components/ValuesSection';

const About = () => {
  return (
    <AboutContainer>
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
              Our Story
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="subtitle"
            >
              Creating beautiful spaces since 2010
            </motion.p>
          </div>
        </HeroSection>
        
        <HistorySection />
        <ValuesSection />
        <TeamSection />
      </motion.div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://your-wordpress-site.com/wp-content/uploads/about-hero.jpg');
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

export default About;