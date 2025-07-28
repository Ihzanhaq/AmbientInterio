import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from '../components/Hero';
import ProjectsGallery from '../components/ProjectsGallery';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <ProjectsGallery />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default Home;