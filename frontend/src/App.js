import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { isDark } = require('./contexts/ThemeContext').useTheme();
  
  return (
    <div className={`App ${isDark ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <Navbar />
      <Hero />
      <ClientsSection />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
