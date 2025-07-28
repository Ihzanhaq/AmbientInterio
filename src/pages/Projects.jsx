import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getPosts } from '../services/wordpressService';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getPosts('projects', { per_page: 12, _embed: true });
      setProjects(data);
      setFilteredProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.acf?.category === filter
      );
      setFilteredProjects(filtered);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <ProjectsContainer>
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
              Our Portfolio
            </motion.h1>
          </div>
        </HeroSection>

        <ProjectFilter 
          activeFilter={activeFilter}
          handleFilter={handleFilter}
          categories={['All', 'Residential', 'Commercial', 'Hospitality', 'Office']}
        />

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://your-wordpress-site.com/wp-content/uploads/projects-hero.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  
  h1 {
    font-size: 4rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Projects;