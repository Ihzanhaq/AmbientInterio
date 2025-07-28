import { motion } from 'framer-motion';
import styled from 'styled-components';

const Map = () => {
  return (
    <MapContainer
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3>Our Location</h3>
      <div className="map-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179042!2d-73.9878449241646!3d40.74844097138987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689874326789!5m2!1sen!2sus" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Design Haven Location"
        ></iframe>
      </div>
    </MapContainer>
  );
};

const MapContainer = styled(motion.div)`
  h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  
  .map-wrapper {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default Map;