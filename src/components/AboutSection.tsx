import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Flex, Title, Subtitle, Badge, Button } from '../styles/StyledComponents';

const AboutSection = () => {
  return (
    <AboutSectionWrapper id="about">
      <Container>
        <Flex className="responsive between gap-lg">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <Badge>About Us</Badge>
            <Title>PioneerLabs</Title>
            <Subtitle>
              We're a team of AI researchers, engineers, and designers passionate about creating conversational AI that feels natural and delivers real value.
            </Subtitle>
            <AboutText>
              At PioneerLabs, we believe that AI should enhance human capabilities, not replace them. Our mission is to build AI agents that make businesses more efficient while creating better experiences for everyone involved.
            </AboutText>
            <AboutText>
              Founded by experts in natural language processing and machine learning, we're focused on pushing the boundaries of what's possible with conversational AI technology.
            </AboutText>
            <Button className="primary">Join Our Team</Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image"
          >
            <AboutImageContainer>
              <AboutImage src="/src/assets/about-image.svg" alt="PioneerLabs Team" />
            </AboutImageContainer>
          </motion.div>
        </Flex>
      </Container>
    </AboutSectionWrapper>
  );
};

const AboutSectionWrapper = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
  
  .about-content, .about-image {
    flex: 1;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
`;

const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export default AboutSection;
