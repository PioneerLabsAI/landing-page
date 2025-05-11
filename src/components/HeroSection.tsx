// src/components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Assuming your styled components are exported from this path
import { Button, Section, Container, Flex, Title, Subtitle, Badge } from '../styles/StyledComponents';

// If your image is in src/assets, import it:
// import heroSvg from '../assets/hero-image.svg';
// If it's in public/assets, the path "/assets/hero-image.svg" might be fine,
// but ensure your build setup handles this. For Vite, public assets are served from root.
// Using a placeholder if the actual image path is an issue during development.
const heroImageUrl = "/src/assets/hero-image.svg"; // Replace with imported image or correct public path

const HeroSection = () => {
  return (
    // Use the Section component, className "hero" applies specific hero styles
    <Section className="hero">
      {/* Container centers content and applies max-width and padding */}
      <Container>
        {/* Flex component for layout. 
            'responsive' makes it stack on smaller screens.
            'between' is for justify-content: space-between.
            'center-v' is for align-items: center.
            'gap-lg' adds a gap.
            The Flex component itself will take width: 100% of the Container.
        */}
        <Flex className="responsive between center-v gap-lg">
          {/* HeroContent now uses styled-components defined locally or imported */}
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge>AI-Powered Future</Badge>
              {/* Title and Subtitle components from StyledComponents */}
              <Title className="hero-title">Pioneering Conversational AI for the Modern Enterprise</Title>
              <Subtitle className="hero-subtitle">
                Transforming recruitment, customer engagement, and market research with intelligent AI agents that understand human conversation.
              </Subtitle>
              {/* Flex for buttons, with a small gap */}
              <ButtonContainer className="gap-sm center-h-mobile">
                <Button className="primary large">Get Started</Button>
                <Button className="outline large">Learn More</Button>
              </ButtonContainer>
            </motion.div>
          </HeroContent>
          
          {/* HeroImageContainer now uses styled-components defined locally or imported */}
          <HeroImageContainer>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }} // Ensure motion.div also behaves
            >
              <HeroImage src={heroImageUrl} alt="PioneerLabs AI" />
            </motion.div>
          </HeroImageContainer>
        </Flex>
      </Container>
    </Section>
  );
};

// Styled components specific to HeroSection or that might need overrides
// These ensure the flex children behave as intended.
const HeroContent = styled.div`
  flex: 1 1 50%; /* Allow shrinking, specify basis */
  max-width: 600px; /* Max width for the text content */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content within this div */

  @media (max-width: 768px) { /* Corresponds to tablet breakpoint */
    max-width: 100%;
    text-align: center; /* Center text on mobile */
    align-items: center; /* Center badge/buttons if they are block */
    order: 2; /* Image first on mobile */
    margin-bottom: 2rem;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1 1 50%; /* Allow shrinking, specify basis */
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px; /* Prevent image from becoming too small */

  @media (max-width: 768px) { /* Corresponds to tablet breakpoint */
    order: 1; /* Image first on mobile */
    margin-bottom: 2rem; /* Add space when stacked */
    width: 100%; /* Take full width when stacked */
    max-width: 400px; /* Limit image size on mobile for better appearance */
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

// Container for buttons to manage their layout, especially on mobile
const ButtonContainer = styled(Flex)` // Re-use Flex for convenience
  // Default to row layout from Flex props
  // Add any specific styling for the button group here
  // The className "gap-sm" will be applied from the props to Flex
  // The className "center-h-mobile" will center buttons on mobile

  &.center-h-mobile {
    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column; /* Stack buttons on mobile */
        align-items: center; /* Center stacked buttons */
        width: 100%;

        ${Button} { /* Target Button component directly if needed */
            width: auto; /* Let button size to content or set a max-width */
            min-width: 200px; /* Ensure buttons have a decent tap target */
            margin-bottom: 1rem; /* Space between stacked buttons */
             &:last-child {
                margin-bottom: 0;
            }
        }
    }
  }
`;


export default HeroSection;
