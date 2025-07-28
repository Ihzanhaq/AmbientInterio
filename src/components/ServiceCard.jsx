import { motion } from 'framer-motion';
import styled from 'styled-components';

const ServiceCard = ({ service }) => {
  return (
    <CardContainer
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: var(--transition);
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
  
  &:hover {
    background: var(--primary-color);
    color: white;
    
    h3, p {
      color: white;
    }
  }
`;

export default ServiceCard;