import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import WhoWeAreSection from './components/WhoWeAreSection';
import ServicesSection from './components/ServicesSection';
import WhoWeServeSection from './components/WhoWeServeSection';
import FitEvaluation from './components/FitEvaluation';
import TestimonialsSection from './components/TestimonialsSection';
import RevenueEngineCTA from './components/RevenueEngineCTA';
import Footer from './components/Footer';
import ContactFormModal from './components/ContactFormModal';
import CustomCursor from './components/CustomCursor';
import FadeInSection from './components/FadeInSection';
import ScrollProgressBar from './components/ScrollProgressBar';
import { ServiceCategory } from './types';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleOpenContactModal = (topic?: string) => {
    setSelectedTopic(topic || '');
    setContactModalOpen(true);
  };

  const handleSelectService = (service: ServiceCategory) => {
    handleOpenContactModal(service.title);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#121417] flex flex-col selection:bg-[#F5B82E] selection:text-stone-950 relative overflow-x-hidden">
      
      {/* Top Viewport Subtle Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Subtle Static Atmosphere for Body Sections (Animated BG is ONLY in Hero Section) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#E5EEE4]/25 blur-3xl" />
        <div className="absolute top-[40%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-[#EAF2E9]/20 blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#F3EFE4]/30 blur-3xl" />
      </div>

      {/* Top Navigation with Home, About, Services and CONTACT CTA */}
      <Navbar
        onContactNow={() => handleOpenContactModal('General Inquiry')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookCall={() => handleOpenContactModal('Strategy Consultation')}
        />

        {/* 2. Key Metrics & Stats Bar */}
        <FadeInSection delay={0.05} yOffset={24}>
          <StatsBar />
        </FadeInSection>

        {/* 3. Who We Are (About NIS Global Marketing) */}
        <FadeInSection delay={0.1} yOffset={32}>
          <WhoWeAreSection
            onBookCall={() => handleOpenContactModal('Pillar Alignment Inquiry')}
          />
        </FadeInSection>

        {/* 4. Core Services & Systems (All 8 Categories) */}
        <FadeInSection delay={0.1} yOffset={32}>
          <ServicesSection
            onSelectService={handleSelectService}
            onBookCall={() => handleOpenContactModal('Service Engagement')}
          />
        </FadeInSection>

        {/* 5. Who We Serve (Target Market Segments) - with greenish accent text */}
        <FadeInSection delay={0.1} yOffset={32}>
          <WhoWeServeSection
            onBookCall={() => handleOpenContactModal('Market Segment Growth')}
          />
        </FadeInSection>

        {/* 6. Fit Evaluation & Transparent Qualification - with greenish accent text */}
        <FadeInSection delay={0.1} yOffset={32}>
          <FitEvaluation
            onBookCall={() => handleOpenContactModal('Partnership Evaluation')}
          />
        </FadeInSection>

        {/* 7. Client Testimonials & Results */}
        <FadeInSection delay={0.1} yOffset={32}>
          <TestimonialsSection
            onBookCall={() => handleOpenContactModal('Client Results Inquiry')}
          />
        </FadeInSection>

        {/* 8. Let's Build Your Revenue Engine CTA */}
        <FadeInSection delay={0.15} yOffset={36}>
          <RevenueEngineCTA
            onBookCall={() => handleOpenContactModal('Revenue Engine Consultation')}
          />
        </FadeInSection>
      </main>

      {/* 9. Footer with full NIS GLOBAL MARKETING, LLC contact details */}
      <FadeInSection delay={0.1} yOffset={20}>
        <Footer />
      </FadeInSection>

      {/* Contact Pop-up Form (dispatches inquiries directly to info@nisglobalmarketing.com) */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        serviceInquiry={selectedTopic}
      />

    </div>
  );
}
