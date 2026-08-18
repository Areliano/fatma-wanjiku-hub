import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Services from "@/components/portfolio/Services";
import SocialMedia from "@/components/portfolio/SocialMedia";
import Certifications from "@/components/portfolio/Certifications";
import CV from "@/components/portfolio/CV";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <SocialMedia />
      <Certifications />
      <CV />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
