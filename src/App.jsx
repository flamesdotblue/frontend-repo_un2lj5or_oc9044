import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
