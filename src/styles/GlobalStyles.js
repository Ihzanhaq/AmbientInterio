// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2a3a4a;
    --secondary-color: #e8b4a8;
    --accent-color: #d97a56;
    --light-color: #f5f5f5;
    --dark-color: #1a1a1a;
    --transition: all 0.3s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--light-color);
    color: var(--dark-color);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50%;
      height: 3px;
      background: var(--accent-color);
    }
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default GlobalStyles;