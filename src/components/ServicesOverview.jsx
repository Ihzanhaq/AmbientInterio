import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      title: "Interior Design",
      description: "Complete design solutions tailored to your style and space.",
      icon: "🎨"
    },
    {
      title: "Space Planning",
      description: "Optimize your layout for functionality and flow.",
      icon: "📐"
    },
    {
      title: "Color Consultation",
      description: "Expert guidance on perfect color schemes.",
      icon: "🌈"
    }
  ];

  return (
    <ServicesSection>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions for every space</p>
        </motion.div>

        <ServicesGrid>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </ServicesGrid>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="view-all"
        >
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </motion.div>
      </div>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: white;

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  .service-card {
    background: var(--light-color);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .service-icon {
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
  }
`;

export default ServicesOverview;