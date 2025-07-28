// src/components/Hero.js
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 }
    }
  };

  return (
    <HeroSection>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1>Transform Your Space With Elegance</h1>
          <p>We create beautiful, functional spaces that reflect your personality and lifestyle.</p>
          <Link to="/projects" className="btn">View Our Work</Link>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src="http://interior-design.local/wp-content/uploads/2025/07/pexels-fotoaibe-1571460.jpg" alt="Luxury Interior Design" />
        </motion.div>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--light-color) 0%, #e6e6e6 100%);
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  
  .hero-content {
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      max-width: 500px;
      
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
  
  .hero-image {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    }
  }
`;

export default Hero;