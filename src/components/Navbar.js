// src/components/Navbar.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "var(--accent-color)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <NavContainer scrolled={scrolled}>
      <Container
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <Logo>
          <Link to="/">
            Ambience<span>Interior</span>
          </Link>
        </Logo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Hamburger>

        <NavLinks isOpen={isOpen}>
          {["Home", "Projects", "Services", "About", "Contact"].map((item) => (
            <motion.li key={item} variants={linkVariants} whileHover="hover">
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </NavLinks>
      </Container>
    </NavContainer>
  );
};
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  background: ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  box-shadow: ${(props) =>
    props.scrolled ? "0 5px 20px rgba(0, 0, 0, 0.1)" : "none"};
  transition: var(--transition);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;

  a {
    color: var(--primary-color);
  }

  span {
    color: var(--accent-color);
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 1001;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin-left: auto;

  li a {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    clip-path: circle(
      ${(props) => (props.isOpen ? "100% at 50% 50%" : "0% at 90% 5%")}
    );
    transition: clip-path 0.8s ease-in-out;
    z-index: 1000;

    li {
      opacity: ${(props) => (props.isOpen ? "1" : "0")};
      transition: opacity 0.5s ease ${(props) => (props.isOpen ? "0.5s" : "0s")};

      a {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Navbar;
