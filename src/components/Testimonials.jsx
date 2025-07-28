// src/components/Testimonials.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { getPosts } from '../services/wordpressService';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getPosts('testimonial', { per_page: 5, _embed: true });
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <div>Loading...</div>;

  return (
    <TestimonialsSection>
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <div className="testimonial-container">
          <button className="nav-btn prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="testimonial"
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <div 
                className="content" 
                dangerouslySetInnerHTML={{ __html: testimonials[currentIndex]?.content?.rendered || '' }}
              />
              <div className="author">
                {testimonials[currentIndex]?._embedded?.['wp:featuredmedia']?.[0] && (
                  <img 
                    src={testimonials[currentIndex]._embedded['wp:featuredmedia'][0].source_url} 
                    alt={testimonials[currentIndex].title.rendered}
                  />
                )}
                <div>
                  <h4>{testimonials[currentIndex]?.title?.rendered}</h4>
                  <p>{testimonials[currentIndex]?.acf?.position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button className="nav-btn next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        
        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--primary-color);
  color: white;

  .section-title {
    color: white;

    &::after {
      background: var(--accent-color);
    }
  }

  .testimonial-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .testimonial {
    max-width: 800px;
    text-align: center;
    padding: 2rem;
    position: relative;

    .quote-icon {
      font-size: 3rem;
      color: var(--accent-color);
      opacity: 0.2;
      position: relative;
      text-align: left;
      margin-bottom: 1rem;
    }

    .content {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid var(--accent-color);
      }

      h4 {
        margin-bottom: 0.3rem;
      }

      p {
        opacity: 0.8;
        font-size: 0.9rem;
      }
    }
  }

  .nav-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--accent-color);
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      border: none;
      cursor: pointer;
      transition: var(--transition);

      &.active {
        background: var(--accent-color);
        transform: scale(1.2);
      }
    }
  }
`;

export default Testimonials;