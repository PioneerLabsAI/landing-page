import { Fragment } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import styled from 'styled-components';

const MainWithPadding = styled.main`
  padding-top: 80px; /* Adjust this based on the actual height of your Navbar */
  width: 100%;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <MainWithPadding>
        <HeroSection />
        <ProductSection />
        <AboutSection />
        <ContactSection />
      </MainWithPadding>
      <Footer />
    </Fragment>
  );
}

export default App;

