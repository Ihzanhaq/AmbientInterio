import { motion } from 'framer-motion';
import styled from 'styled-components';

const ValuesSection = () => {
  const values = [
    {
      title: "Creativity",
      description: "We approach each project with fresh eyes and innovative thinking.",
      icon: "✨"
    },
    {
      title: "Quality",
      description: "Only the finest materials and craftsmanship for our clients.",
      icon: "🏆"
    },
    {
      title: "Collaboration",
      description: "We work closely with you to bring your vision to life.",
      icon: "🤝"
    },
    {
      title: "Sustainability",
      description: "Environmentally responsible design is at our core.",
      icon: "🌱"
    }
  ];

  return (
    <ValuesContainer>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        
        <ValuesGrid>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </ValuesGrid>
      </div>
    </ValuesContainer>
  );
};

const ValuesContainer = styled.section`
  padding: 5rem 0;
  background-color: var(--light-color);
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  
  .value-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .icon {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    
    h3 {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }
    
    p {
      color: #666;
      line-height: 1.6;
    }
  }
`;

export default ValuesSection;