import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProFeature from './pages/ProFeature';

import SaasLandingPage from './pages/landing/SaasLandingPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ProFeature />} />
            <Route path="/about" element={<ProFeature />} />
            <Route path="/contact" element={<ProFeature />} />
            <Route path="/blog" element={<ProFeature />} />
            <Route path="/blog/:id" element={<ProFeature />} />


            {/* Landing Pages */}
            <Route path="/landing/saas" element={<SaasLandingPage />} />
            <Route path="/landing/mobile-app" element={<ProFeature />} />
            <Route path="/landing/agency" element={<ProFeature />} />
            <Route path="/landing/ebook" element={<ProFeature />} />
            <Route path="/landing/webinar" element={<ProFeature />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
