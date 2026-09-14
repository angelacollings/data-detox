import React, { useLayoutEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import ProjectPositioning from './components/ProjectPositioning';
import Stats from './components/Stats';
import DatabaseCleaning from './components/DatabaseCleaning';
import WhyDataDetox from './components/WhyDataDetox';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import LegalPage, { getLegalPage } from './components/LegalPage';
import ServicePage, { getServicePage } from './components/ServicePage';
import SiteMeta from './components/SiteMeta';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const page =
    window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '') || 'home';
  const legalPage = getLegalPage(page);
  const isAboutPage = page === 'about';
  const servicePage = getServicePage(page);

  useLayoutEffect(() => {
    if (page !== 'home' || !window.location.hash) {
      return;
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(targetId);

    if (target && typeof target.scrollIntoView === 'function') {
      target.scrollIntoView();
    }
  }, [page]);

  return (
    <div className="site">
      <SiteMeta page={page} />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      {legalPage ? (
        <LegalPage page={page} />
      ) : isAboutPage ? (
        <About />
      ) : servicePage ? (
        <ServicePage page={page} />
      ) : (
        <main id="main-content" tabIndex="-1">
          <Hero />
          <Results />
          <ProjectPositioning />
          <Services />
          <Stats />
          <DatabaseCleaning />
          <WhyDataDetox />
          <HowItWorks />
          <Testimonials />
          <ContactForm />
        </main>
      )}
      <Footer />
    </div>
  );
}
