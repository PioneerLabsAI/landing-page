import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Flex, Title, Subtitle, Badge } from '../styles/StyledComponents';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarWrapper scrolled={scrolled}>
      <Container>
        <NavbarContent>
          <Logo>
            <LogoText>PioneerLabs</LogoText>
          </Logo>
          
          <NavLinks className={isOpen ? 'active' : ''}>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavButton href="#contact">Get Started</NavButton>
          </NavLinks>
          
          <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </NavbarContent>
      </Container>
    </NavbarWrapper>
  );
};

interface NavbarWrapperProps {
  scrolled: boolean;
}

const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.scrolled ? '0.75rem 0' : '1.25rem 0'};
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 6px rgba(0, 0, 0, 0.05)' : 'none'};
  transition: all 0.3s ease;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;           
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    
    &.active {
      right: 0;
    }
  }
`;

const NavLink = styled.a`
  color: var(--dark);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const NavButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--dark);
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
