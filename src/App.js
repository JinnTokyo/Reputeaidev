import React from 'react';
import {Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import Navbar from './components/Navigation';
import ContactPage from './Pages/Contact';
import FeaturesPage from './Pages/Features';
import PricingPage from './Pages/Pricing';
import SignUpPage from './Pages/SignUp';
import Resources from './Pages/Resources';
import FAQ from './Pages/FAQ';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Features" element={<FeaturesPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </>
  );
};

export default App;
