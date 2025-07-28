import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectFilter = ({ activeFilter, handleFilter, categories }) => {
  return (
    <FilterContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <FilterList>
          {categories.map((category) => (
            <FilterItem 
              key={category}
              active={activeFilter === category}
              onClick={() => handleFilter(category)}
            >
              {category}
            </FilterItem>
          ))}
        </FilterList>
      </motion.div>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  padding: 2rem 0;
  background: white;
  position: sticky;
  top: 80px;
  z-index: 100;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
`;

const FilterItem = styled.li`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 600;
  transition: var(--transition);
  background: ${props => props.active ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--dark-color)'};
  border: 2px solid ${props => props.active ? 'var(--accent-color)' : '#ddd'};
  
  &:hover {
    background: ${props => props.active ? 'var(--accent-color)' : 'var(--light-color)'};
  }
`;

export default ProjectFilter;