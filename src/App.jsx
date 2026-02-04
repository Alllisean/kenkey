import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Champions from './components/Champions';
import Footer from './components/Footer';
import Academy from './pages/Academy';
import Enterprise from './pages/Enterprise';
import Spaces from './pages/Spaces';
import Ventures from './pages/Ventures';
import Kidz from './pages/Kidz';
import {
  PlatformSection,
  ImpactSection,
  PartnerSection,
  TestimonialSection,
  FAQSection,
  ContactSection
} from './components/AdditionalSections';
import { translations } from './utils/translations';

function App() {
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [highlightedActivity, setHighlightedActivity] = useState(null);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-black' : 'bg-zinc-50'}`}>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar lang={lang} setLang={setLang} t={t.nav} darkMode={darkMode} setDarkMode={setDarkMode} setHighlightedActivity={setHighlightedActivity} />
            <Hero t={t.hero} countries={t.countries} setHighlightedActivity={setHighlightedActivity} />

            {/* Content wrapper - full width */}
            <section className={`mt-[30px] py-20 pb-10 transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-zinc-50'}`}>
              <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                {t.champions.title}
              </h2>
              <Champions t={t.champions} darkMode={darkMode} />
            </section>

            {/* 6 New Sections */}
            {t && <PlatformSection t={t} darkMode={darkMode} highlightedActivity={highlightedActivity} setHighlightedActivity={setHighlightedActivity} />}
            {t.impact && <ImpactSection t={t.impact} darkMode={darkMode} />}
            {t.partners && <PartnerSection t={t.partners} darkMode={darkMode} />}
            {t.stories && <TestimonialSection t={t.stories} darkMode={darkMode} />}
            {t.faq && <FAQSection t={t.faq} darkMode={darkMode} />}
            {t.contact && <ContactSection t={t.contact} darkMode={darkMode} />}

            <Footer t={t.footer} />
          </>
        } />
        <Route path="/academy" element={<Academy darkMode={darkMode} />} />
        <Route path="/enterprise" element={<Enterprise darkMode={darkMode} />} />
        <Route path="/spaces" element={<Spaces darkMode={darkMode} />} />
        <Route path="/ventures" element={<Ventures darkMode={darkMode} />} />
        <Route path="/kidz" element={<Kidz darkMode={darkMode} />} />
      </Routes>
    </div>
  )
}

export default App
