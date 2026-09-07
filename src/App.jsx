import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import ProjectBooking from './components/ProjectBooking';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ConsultationModal from './components/ConsultationModal';
import InstallAppPrompt from './components/InstallAppPrompt';

function MainLayout() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [prefilledReference, setPrefilledReference] = useState('');

  const handleSelectServiceForBooking = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProjectWithReference = (referenceText) => {
    setPrefilledReference(referenceText);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070B14] text-slate-100 selection:bg-cyan-500 selection:text-black transition-colors duration-200">
      {/* Interactive Ambient Cyber Background */}
      <BackgroundEffect />

      {/* Sticky Navigation with Language Toggle & App Modal Trigger */}
      <Navbar 
        onOpenConsultation={() => setConsultationOpen(true)} 
        onOpenInstallModal={() => setInstallModalOpen(true)} 
      />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 2. Trust & Animated Statistics */}
        <TrustStats />

        {/* 3. About Buildora & Enterprise Vision */}
        <About onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 4. 9 Comprehensive Services & Specifications */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 5. Filterable Portfolio Showcase & Case Studies */}
        <Portfolio onStartProjectWithReference={handleStartProjectWithReference} />

        {/* 6. 7-Step Engineering Process Timeline */}
        <Process />

        {/* 7. Why Choose Buildora (10 Enterprise Pillars) */}
        <WhyChooseUs />

        {/* 8. Modern Technology Stack Matrix */}
        <TechStack />

        {/* 9. Dedicated Project Request & WhatsApp Booking System */}
        <ProjectBooking 
          preselectedService={preselectedService} 
          prefilledReference={prefilledReference} 
        />

        {/* 10. Testimonials & Client Partnerships */}
        <Testimonials />

        {/* 11. Frequently Asked Questions (Accordion) */}
        <FAQ />

        {/* 12. Direct Contact & Fast Inquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Free Consultation Booking Modal */}
      <ConsultationModal 
        isOpen={consultationOpen} 
        onClose={() => setConsultationOpen(false)} 
      />

      {/* Mobile App & PWA Install Prompt & Modal */}
      <InstallAppPrompt 
        isOpen={installModalOpen} 
        onClose={() => setInstallModalOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
