 // src/components/Footer.js
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-about">
            <h3>DesignHaven</h3>
            <p>Creating beautiful spaces that inspire and delight. Our team of expert designers brings your vision to life.</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>123 Design Street, Creative City</li>
              <li>hello@designhaven.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} DesignHaven. All rights reserved.</p>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: var(--primary-color);
  color: white;
  padding: 4rem 0 1rem;
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    
    h3, h4 {
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50px;
        height: 3px;
        background: var(--accent-color);
      }
    }
    
    p, li {
      opacity: 0.8;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    a {
      color: white;
      
      &:hover {
        color: var(--accent-color);
      }
    }
  }
  
  .footer-about {
    p {
      max-width: 300px;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
      
      a {
        font-size: 1.2rem;
        transition: var(--transition);
        
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
  }
  
  .footer-links {
    ul {
      list-style: none;
      
      li {
        margin-bottom: 0.8rem;
      }
    }
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

export default Footer;