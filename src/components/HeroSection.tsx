
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-100 to-slate-200 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Holzel Transporte –<br />
            <span className="text-slate-700">Stark auf der Straße, flexibel im Einsatz</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Wir bewegen, was andere nicht bewegen können – mit Containerlogistik, Walking-Floor-Systemen und zuverlässiger Holzverwertung in der Region Eifel, Mosel und Hunsrück.
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-slate-700 hover:bg-slate-800 text-white text-lg px-10 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Jetzt Container anfragen
            </Button>
            <p className="text-sm text-slate-600">
              Wir melden uns werktags innerhalb von 24h.
            </p>
          </div>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-slate-300 flex items-center justify-center">
          <div className="text-slate-500 text-xl font-medium bg-white/80 px-8 py-4 rounded">
            LKW-Bild (Platzhalter)
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
