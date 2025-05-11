import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Flex, Title, Subtitle, Card, Badge, Button } from '../styles/StyledComponents';

const ProductSection = () => {
  return (
    <ProductSectionWrapper id="products">
      <Container>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Our Products</Badge>
            <Title className="section-title">Intelligent AI Solutions</Title>
            <Subtitle style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Our conversational AI agents are designed to transform how businesses interact with candidates, customers, and communities.
            </Subtitle>
          </motion.div>
        </SectionHeader>

        <ProductsGrid>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard>
              <ProductIcon>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="rgba(99, 102, 241, 0.1)" />
                  <path d="M32 16H16C14.9 16 14 16.9 14 18V30C14 31.1 14.9 32 16 32H32C33.1 32 34 31.1 34 30V18C34 16.9 33.1 16 32 16ZM32 30H16V18H32V30ZM19 21H29V23H19V21ZM19 25H29V27H19V25Z" fill="#6366F1" />
                </svg>
              </ProductIcon>
              <ProductTitle>Jupiter</ProductTitle>
              <ProductDescription>
                An AI recruiter agent that conducts technical interviews, evaluates candidates, and provides detailed feedback to hiring teams.
              </ProductDescription>
              <ProductFeatures>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Technical skill assessment</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Behavioral interview questions</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Detailed candidate reports</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Seamless ATS integration</span>
                </Feature>
              </ProductFeatures>
              <Button className="primary">Learn More</Button>
            </ProductCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProductCard className="coming-soon">
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
              <ProductIcon>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="rgba(16, 185, 129, 0.1)" />
                  <path d="M32 14H16C14.9 14 14 14.9 14 16V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V16C34 14.9 33.1 14 32 14ZM20 30H18V24H20V30ZM25 30H23V20H25V30ZM30 30H28V26H30V30Z" fill="#10B981" />
                </svg>
              </ProductIcon>
              <ProductTitle>Survey Agent</ProductTitle>
              <ProductDescription>
                Multilingual AI agents that conduct surveys over phone calls in local languages, gathering valuable market insights with natural conversation.
              </ProductDescription>
              <ProductFeatures>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Multiple language support</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Natural conversational flow</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Real-time data collection</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Advanced sentiment analysis</span>
                </Feature>
              </ProductFeatures>
              <Button className="outline">Join Waitlist</Button>
            </ProductCard>
          </motion.div>
        </ProductsGrid>
      </Container>
    </ProductSectionWrapper>
  );
};

const ProductSectionWrapper = styled.section`
  padding: 5rem 0;
  background-color: var(--light);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  
  &.coming-soon {
    border: 2px solid var(--secondary);
  }
`;

const ComingSoonBadge = styled.div`
  position: absolute;
  top: 12px;
  right: -30px;
  background-color: var(--secondary);
  color: white;
  padding: 0.25rem 2rem;
  font-size: 0.75rem;
  font-weight: 600;
  transform: rotate(45deg);
`;

const ProductIcon = styled.div`
  margin-bottom: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
`;

const ProductFeatures = styled.div`
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const FeatureIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  font-size: 0.75rem;
  margin-right: 0.75rem;
`;

export default ProductSection;
