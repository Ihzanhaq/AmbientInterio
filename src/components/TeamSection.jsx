import { motion } from 'framer-motion';
import styled from 'styled-components';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      bio: "With over 15 years of experience, Sarah brings creativity and precision to every project.",
      image: "https://your-wordpress-site.com/wp-content/uploads/team1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Architect",
      bio: "Michael specializes in space planning and structural design solutions.",
      image: "https://your-wordpress-site.com/wp-content/uploads/team2.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Color Specialist",
      bio: "Emma has an exceptional eye for color palettes that transform spaces.",
      image: "https://your-wordpress-site.com/wp-content/uploads/team3.jpg"
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      bio: "David ensures every project runs smoothly from concept to completion.",
      image: "https://your-wordpress-site.com/wp-content/uploads/team4.jpg"
    }
  ];

  return (
    <TeamContainer>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>
        
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="team-card"
            >
              <div className="image-container">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </TeamGrid>
      </div>
    </TeamContainer>
  );
};

const TeamContainer = styled.section`
  padding: 5rem 0;
  background-color: var(--light-color);
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  
  .team-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .image-container {
      height: 300px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
    }
    
    .team-info {
      padding: 1.5rem;
      
      h3 {
        margin-bottom: 0.5rem;
        color: var(--primary-color);
      }
      
      .role {
        color: var(--accent-color);
        font-weight: 600;
        margin-bottom: 1rem;
      }
      
      .bio {
        color: #666;
        line-height: 1.6;
      }
    }
    
    &:hover {
      .image-container img {
        transform: scale(1.1);
      }
    }
  }
`;

export default TeamSection;