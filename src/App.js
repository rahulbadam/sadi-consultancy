import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';
import Catering from './components/Catering';
import Footer from './components/Footer';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Weddings from './components/Weddings';
import Parties from './components/Parties';
import Corporate from './components/Corporate';
import SpecialEvents from './components/SpecialEvents';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import About from './components/About';
import Planning from './components/Planning';
import CaseStudies from './components/CaseStudies';
import MoreInfo from './components/MoreInfo';

function App() {
  return (
    <div className="fade-in">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <MoreInfo />
            <Catering />
            <Home />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/parties" element={<Parties />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/special-events" element={<SpecialEvents />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
