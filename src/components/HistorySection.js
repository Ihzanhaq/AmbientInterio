import { motion } from 'framer-motion';
import styled from 'styled-components';

const HistorySection = () => {
  return (
    <HistoryContainer>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="history-content"
        >
          <h2>Our Journey</h2>
          <Timeline>
            <TimelineItem>
              <Year>2010</Year>
              <Content>
                <h3>Founded in a Small Studio</h3>
                <p>Started with residential projects in the local community, building our reputation one satisfied client at a time.</p>
              </Content>
            </TimelineItem>
            <TimelineItem>
              <Year>2014</Year>
              <Content>
                <h3>First Commercial Project</h3>
                <p>Expanded our services to commercial spaces with a boutique hotel redesign that won regional awards.</p>
              </Content>
            </TimelineItem>
            <TimelineItem>
              <Year>2018</Year>
              <Content>
                <h3>Moved to Larger Offices</h3>
                <p>Our growing team moved to a spacious new studio designed by our own team.</p>
              </Content>
            </TimelineItem>
            <TimelineItem>
              <Year>2023</Year>
              <Content>
                <h3>International Recognition</h3>
                <p>Featured in Design Magazine's "Top 50 Interior Design Firms to Watch".</p>
              </Content>
            </TimelineItem>
          </Timeline>
        </motion.div>
      </div>
    </HistoryContainer>
  );
};

const HistoryContainer = styled.section`
  padding: 5rem 0;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 50px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: var(--accent-color);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Year = styled.div`
  position: absolute;
  left: -50px;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Content = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

export default HistorySection;