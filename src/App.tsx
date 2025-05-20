import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import InfoBanner from './components/InfoBanner';
import PromoCard from './components/PromoCard';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  // Update page title
  document.title = "Neoenergia - Energia que transforma";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <InfoBanner />
        <PromoCard />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;