
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">
              HOLZEL GmbH
            </div>
            
            {/* Burger Menu Button with Animation */}
            <button 
              className="text-white p-2 hover:bg-slate-700 rounded transition-all duration-300 z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-500 ${
                    isMenuOpen ? 'opacity-0 rotate-45 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu with Enhanced Animation */}
      <div className={`fixed inset-0 bg-slate-900/96 z-40 flex items-center justify-center transition-all duration-700 ${
        isMenuOpen ? 'opacity-100 visible backdrop-blur-sm' : 'opacity-0 invisible'
      }`}>
        <div className={`text-center space-y-16 max-w-lg mx-auto px-6 transition-all duration-700 ${
          isMenuOpen ? 'transform translate-y-0 opacity-100 scale-100' : 'transform translate-y-12 opacity-0 scale-95'
        }`}>
          <div className="space-y-8">
            <button 
              onClick={() => handleMenuClick('hero')}
              className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-light py-4 hover:scale-105 transform leading-relaxed"
            >
              Startseite
            </button>
            <button 
              onClick={() => handleMenuClick('leistungen')}
              className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-light py-4 hover:scale-105 transform leading-relaxed"
            >
              Leistungen
            </button>
            <button 
              onClick={() => handleMenuClick('team')}
              className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-light py-4 hover:scale-105 transform leading-relaxed"
            >
              Über uns
            </button>
            <button 
              onClick={() => handleMenuClick('fuhrpark')}
              className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-light py-4 hover:scale-105 transform leading-relaxed"
            >
              Fuhrpark
            </button>
            <button 
              onClick={() => handleMenuClick('kontakt')}
              className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-light py-4 hover:scale-105 transform leading-relaxed"
            >
              Kontakt
            </button>
          </div>
          
          <div className="border-t border-slate-600 pt-10 space-y-6">
            <div className="text-slate-400 text-sm uppercase tracking-widest mb-8 font-semibold">In Vorbereitung</div>
            <div className="text-xl md:text-2xl text-slate-500 py-3 font-light leading-relaxed">
              Containergrößen <span className="text-base opacity-70">(coming soon)</span>
            </div>
            <div className="text-xl md:text-2xl text-slate-500 py-3 font-light leading-relaxed">
              Holzverwertung <span className="text-base opacity-70">(coming soon)</span>
            </div>
            <div className="text-xl md:text-2xl text-slate-500 py-3 font-light leading-relaxed">
              Grünschnitt-Annahme <span className="text-base opacity-70">(coming soon)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
