
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import FleetSection from "@/components/FleetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1">
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection />
        <TeamSection />
        <FleetSection />
        <ContactSection scrollToSection={scrollToSection} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
