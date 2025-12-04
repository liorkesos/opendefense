import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;