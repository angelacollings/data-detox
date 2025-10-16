import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
