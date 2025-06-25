
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Kontakt = () => {
  useEffect(() => {
    document.title = "Kontakt - HOLZEL GmbH";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Direkter Kontakt für Anfragen, Rückfragen und Angebote – telefonisch oder über das Kontaktformular. Kontaktieren Sie HOLZEL GmbH.');
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      {/* Hero Section for Contact Page */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="section-container">
          <div className="section-content text-center">
            <h1 className="mb-8">Kontakt</h1>
            <p className="text-body-large max-w-4xl mx-auto text-slate-600">
              Direkter Kontakt für Anfragen, Rückfragen und Angebote – telefonisch oder über das Kontaktformular.
            </p>
          </div>
        </div>
      </section>

      <div className="flex-1">
        <ContactSection scrollToSection={scrollToSection} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Kontakt;
