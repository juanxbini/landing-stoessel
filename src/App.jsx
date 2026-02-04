import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import { CTASection, Footer } from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemsSection />
      <SolutionSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
