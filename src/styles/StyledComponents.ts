import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &.primary {
    background-color: var(--primary);
    color: white;
    border: none;
    
    &:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.secondary {
    background-color: var(--secondary);
    color: white;
    border: none;
    
    &:hover {
      background-color: #0ea271;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.outline {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    
    &:hover {
      background-color: var(--primary);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
  
  &.small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const Section = styled.section`
  padding: 5rem 0;
  width: 100%; // Ensure section takes full width to allow container to center within it
  
  &.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f0f4ff 0%, #e6f7ff 100%);
  }
  
  &.dark {
    background-color: var(--dark);
    color: var(--light);
  }
  
  &.light {
    background-color: var(--light);
    color: var(--dark);
  }
  
  &.gradient {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
  }
`;

export const Container = styled.div`
  /* keeps the content centred in the viewport */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;          /* centres the block itself */
  padding: 0 1.5rem;       /* side-gutters */

`;

export const Flex = styled.div`
  display: flex;
  width: 100%; // Ensure Flex takes full width of its parent (Container)
  
  &.column {
    flex-direction: column;
  }
  
  &.center {
    align-items: center;
    justify-content: center;
  }
  
  &.between {
    justify-content: space-between;
  }
  
  &.gap-sm {
    gap: 1rem;
  }
  
  &.gap-md {
    gap: 2rem;
  }
  
  &.gap-lg {
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    &.responsive {
      flex-direction: column;
      align-items: center; // Center items in responsive mode too
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  width: 100%; // Ensure Grid takes full width
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  width: 100%; // Ensure card can be centered if it's a direct child of Container
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  &.feature {
    text-align: center;
    padding: 2.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center; // Default to center, can be overridden
  
  &.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  &.section-title {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--gray);
  margin-bottom: 2rem;
  text-align: center; // Default to center, can be overridden
  max-width: 700px; // Add max-width for better readability of centered text
  margin-left: auto;
  margin-right: auto;

  &.hero-subtitle {
    font-size: 1.5rem;
    max-width: 600px;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  margin-bottom: 1rem;
`;

