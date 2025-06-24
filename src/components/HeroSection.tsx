
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="section-container">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-8">
            Holzel Transporte –<br />
            <span className="text-slate-700 font-bold">Stark auf der Straße, flexibel im Einsatz</span>
          </h1>
          <p className="text-body-large max-w-4xl mx-auto mb-12">
            Wir bewegen, was andere nicht bewegen können – mit Containerlogistik, Walking-Floor-Systemen und zuverlässiger Holzverwertung in der Region Eifel, Mosel und Hunsrück.
          </p>
          <div className="space-y-6">
            <Button 
              onClick={() => scrollToSection('kontakt')}
              size="lg"
              className="text-lg px-12 py-6"
            >
              Jetzt Container anfragen
            </Button>
            <p className="text-meta">
              Wir melden uns werktags innerhalb von 24h.
            </p>
          </div>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
          <div className="text-slate-500 text-xl font-medium bg-white/90 px-8 py-4">
            LKW-Bild (Platzhalter)
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
