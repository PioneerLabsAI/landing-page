import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Flex, Title, Subtitle, Badge, Button } from '../styles/StyledComponents';

const ContactSection = () => {
  return (
    <ContactSectionWrapper id="contact">
      <Container>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Get In Touch</Badge>
            <Title className="section-title">Ready to Transform Your Business?</Title>
            <Subtitle style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Contact us today to learn how our AI agents can help your organization streamline processes and enhance customer experiences.
            </Subtitle>
          </motion.div>
        </SectionHeader>

        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfo>
              <ContactInfoItem>
                <ContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#6366F1"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>hello@pioneerlabs.ai</ContactValue>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#6366F1"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue>+1 (555) 123-4567</ContactValue>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#6366F1"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Location</ContactLabel>
                  <ContactValue>San Francisco, CA</ContactValue>
                </div>
              </ContactInfoItem>
              
              <SocialLinks>
                <SocialLink href="#" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="#6366F1"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6 7.9 6 7C6 6.1 6.8 5.3 7.7 5.3C8.6 5.3 9.4 6.1 9.4 7C9.4 7.9 8.6 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11.3C12.9 10.5 13.8 10 14.9 10C16.6 10 18 11.4 18 13.1V17Z" fill="#6366F1"/>
                  </svg>
                </SocialLink>
                <SocialLink href="#" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="#6366F1"/>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </ContactInfo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm>
              <FormGroup>
                <FormLabel>Name</FormLabel>
                <FormInput type="text" placeholder="Your name" />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput type="email" placeholder="Your email address" />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Company</FormLabel>
                <FormInput type="text" placeholder="Your company name" />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Message</FormLabel>
                <FormTextarea placeholder="How can we help you?" rows={5} />
              </FormGroup>
              
              <Button className="primary" style={{ width: '100%' }}>Send Message</Button>
            </ContactForm>
          </motion.div>
        </ContactGrid>
      </Container>
    </ContactSectionWrapper>
  );
};

const ContactSectionWrapper = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--light);
  border-radius: 0.5rem;
  padding: 2.5rem;
  height: 100%;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(99, 102, 241, 0.1);
`;

const ContactLabel = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.div`
  color: var(--gray);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    
    svg path {
      fill: white;
    }
  }
`;

const ContactForm = styled.form`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gray-light);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gray-light);
  border-radius: 0.375rem;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export default ContactSection;
