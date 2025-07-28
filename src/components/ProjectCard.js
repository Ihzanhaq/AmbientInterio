import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  
  return (
    <CardContainer>
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
          <p className="category">{project.acf?.category || 'Interior Design'}</p>
          <div className="view-project">
            View Project
            <span className="arrow">→</span>
          </div>
        </div>
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  
  a {
    color: inherit;
  }
  
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
      color: var(--primary-color);
    }
    
    .category {
      color: var(--accent-color);
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .view-project {
      display: flex;
      align-items: center;
      color: var(--primary-color);
      font-weight: 600;
      transition: var(--transition);
      
      .arrow {
        margin-left: 0.5rem;
        transition: var(--transition);
      }
    }
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    .image-container img {
      transform: scale(1.1);
    }
    
    .view-project {
      color: var(--accent-color);
      
      .arrow {
        transform: translateX(5px);
      }
    }
  }
`;

export default ProjectCard;