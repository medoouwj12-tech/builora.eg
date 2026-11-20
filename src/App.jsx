import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import { ExtraSolutions, Integrations } from './components/Solutions';
import ProjectBooking from './components/ProjectBooking';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ConsultationModal from './components/ConsultationModal';
import InstallAppPrompt from './components/InstallAppPrompt';

function MainLayout() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [prefilledReference, setPrefilledReference] = useState('');

  const scrollToBooking = () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  const openConsultation = () => setConsultationOpen(true);

  return (
    <div className="relative min-h-screen bg-[#F4F6FB] text-slate-900 selection:bg-brand-500 selection:text-white">
      <Navbar onOpenConsultation={openConsultation} onOpenInstallModal={() => setInstallModalOpen(true)} />

      <main className="relative">
        <Hero onOpenConsultation={openConsultation} />
        <Services
          onSelectServiceForBooking={(title) => {
            setPreselectedService(title);
            scrollToBooking();
          }}
        />
        <Portfolio
          onStartProjectWithReference={(ref) => {
            setPrefilledReference(ref);
            scrollToBooking();
          }}
        />
        <About />
        <Process onOpenConsultation={openConsultation} />
        <ExtraSolutions />
        <Integrations />
        <ProjectBooking preselectedService={preselectedService} prefilledReference={prefilledReference} />
        <Testimonials />
        <FAQ />
      </main>

      <Footer onOpenConsultation={openConsultation} />
      <FloatingWhatsApp />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
      <InstallAppPrompt isOpen={installModalOpen} onClose={() => setInstallModalOpen(false)} />
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
