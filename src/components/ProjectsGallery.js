// src/components/ProjectsGallery.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../services/wordpressService';

const ProjectsGallery = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getPosts('projects', { per_page: 6, _embed: true });
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <GallerySection>
      <div className="container">
        <h2 className="section-title">Our Featured Projects</h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover="hover"
            >
              <Link to={`/projects/${project.slug}`}>
                <div className="image-container">
                  {project._embedded?.['wp:featuredmedia']?.[0] && (
                    <img 
                      src={project._embedded['wp:featuredmedia'][0].source_url} 
                      alt={project.title.rendered}
                    />
                  )}
                </div>
                <div className="project-info">
                  <h3>{project.title.rendered}</h3>
                  <p>{project.acf?.short_description || ''}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="view-all">
          <Link to="/projects" className="btn">View All Projects</Link>
        </div>
      </div>
    </GallerySection>
  );
};

const GallerySection = styled.section`
  padding: 5rem 0;
  background-color: white;
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .project-card {
    border-radius: 10px;
    overflow: hidden;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    
    .image-container {
      height: 250px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
    }
    
    .project-info {
      padding: 1.5rem;
      
      h3 {
        margin-bottom: 0.5rem;
        font-size: 1.3rem;
      }
      
      p {
        color: #666;
      }
    }
    
    &:hover {
      .image-container img {
        transform: scale(1.1);
      }
    }
  }
  
  .view-all {
    text-align: center;
  }
`;

export default ProjectsGallery;