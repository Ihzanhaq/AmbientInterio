import { motion } from 'framer-motion';
import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Interior Design",
      description: "Complete interior design solutions tailored to your style and needs.",
      icon: "🎨"
    },
    {
      title: "Space Planning",
      description: "Optimize your space for functionality and aesthetic appeal.",
      icon: "📐"
    },
    {
      title: "Color Consultation",
      description: "Expert advice on color schemes to create the perfect mood.",
      icon: "🌈"
    },
    {
      title: "Furniture Selection",
      description: "Curated furniture pieces that complement your space perfectly.",
      icon: "🛋️"
    },
    {
      title: "Lighting Design",
      description: "Illuminate your space with strategic and beautiful lighting solutions.",
      icon: "💡"
    },
    {
      title: "Project Management",
      description: "End-to-end management of your design project from concept to completion.",
      icon: "📊"
    }
  ];

  return (
    <ServicesContainer>
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="subtitle"
            >
              Comprehensive design solutions for every space
            </motion.p>
          </div>
        </HeroSection>

        <ServicesGrid>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </ServicesGrid>

        <ProcessSection>
          <div className="container">
            <h2>Our Design Process</h2>
            <ProcessSteps>
              <ProcessStep>
                <span>1</span>
                <h3>Consultation</h3>
                <p>We discuss your vision, needs, and budget</p>
              </ProcessStep>
              <ProcessStep>
                <span>2</span>
                <h3>Concept Development</h3>
                <p>We create initial design concepts for your review</p>
              </ProcessStep>
              <ProcessStep>
                <span>3</span>
                <h3>Design Refinement</h3>
                <p>We refine the design based on your feedback</p>
              </ProcessStep>
              <ProcessStep>
                <span>4</span>
                <h3>Implementation</h3>
                <p>We bring the design to life with careful execution</p>
              </ProcessStep>
            </ProcessSteps>
          </div>
        </ProcessSection>
      </motion.div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://your-wordpress-site.com/wp-content/uploads/services-hero.jpg');
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessSection = styled.section`
  padding: 5rem 0;
  background-color: var(--light-color);
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: var(--accent-color);
    color: white;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 50px;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  p {
    color: #666;
  }
`;

export default Services;