import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Catalog from './components/Catalog';
import FinalCTA from './components/FinalCTA';
import ThankYou from './components/ThankYou';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Features />
    <Benefits />
    <FAQ />
    <Testimonials />
    <Catalog />
    <FinalCTA />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/obrigado" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;