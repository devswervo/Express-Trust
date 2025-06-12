import { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Services id="services" />
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
