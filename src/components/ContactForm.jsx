// src/components/ContactForm.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Here you would typically send the data to your WordPress backend
    // For example using the Contact Form 7 plugin's REST API
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    focus: {
      borderColor: 'var(--accent-color)',
      boxShadow: '0 0 0 2px rgba(217, 122, 86, 0.2)'
    }
  };

  return (
    <FormContainer>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="success-message"
        >
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <label htmlFor="name">Name</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="email">Email</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="phone">Phone</label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="message">Message</label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              whileFocus="focus"
              variants={inputVariants}
            />
          </FormGroup>
          
          <motion.button
            type="submit"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      )}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  
  .success-message {
    text-align: center;
    padding: 2rem;
    
    h3 {
      color: var(--accent-color);
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--primary-color);
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
    }
  }
  
  textarea {
    resize: vertical;
  }
`;

export default ContactForm;