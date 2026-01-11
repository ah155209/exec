import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SolvingRealProblems from '@/components/SolvingRealProblems';
import Expertise from '@/components/Expertise';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
// import Testimonials from '@/components/Testimonials';
import CalendarSection from '@/components/CalendarSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SolvingRealProblems />
      <Expertise />
      <Skills />
      <Projects />
      <FAQ />
      {/* <Testimonials /> */}
      <CalendarSection />
      <Contact />
      <Footer />
    </main>
  );
}
