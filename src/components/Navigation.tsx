
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClick = (path?: string) => {
    setIsMenuOpen(false);
    // If it's a hash link on the current page, scroll to section
    if (path?.startsWith('#') && location.pathname === '/') {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const mainMenuItems = [
    { label: "STARTSEITE", path: "/" },
    { label: "LEISTUNGEN", path: "/leistungen" },
    { label: "FUHRPARK", path: "/fuhrpark" },
    { label: "ANNAHME & VERWERTUNG", path: "/annahme-verwertung" },
    { label: "UNTERNEHMEN", path: "/unternehmen" },
    { label: "KONTAKT", path: "/kontakt" },
  ];

  const comingSoonItems = [
    { label: "Downloads", comingSoon: true },
    { label: "Jobs", comingSoon: true },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-white hover:text-slate-300 transition-colors">
              HOLZEL GmbH
            </Link>
            
            {/* Burger Menu Button with Enhanced Animation */}
            <button 
              className="text-white p-2 hover:bg-slate-700/50 rounded transition-all duration-300 z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* True Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-black/90 z-40 flex items-center justify-center transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`text-center space-y-20 max-w-lg mx-auto px-6 transition-all duration-700 ${
          isMenuOpen ? 'transform translate-y-0 opacity-100 scale-100' : 'transform translate-y-8 opacity-0 scale-95'
        }`}>
          {/* Main Navigation Items */}
          <div className="space-y-8">
            {mainMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => handleMenuClick()}
                className="block w-full text-2xl md:text-3xl text-white hover:text-slate-300 transition-all duration-300 font-bold py-6 hover:scale-105 transform leading-relaxed tracking-wider uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Coming Soon Section with Clear Separation */}
          <div className="border-t border-slate-600/50 pt-16 space-y-4">
            <div className="text-slate-500 text-xs uppercase tracking-widest mb-8 font-medium">In Vorbereitung</div>
            {comingSoonItems.map((item) => (
              <div
                key={item.label}
                className="text-base md:text-lg text-slate-500 py-2 font-normal leading-relaxed cursor-not-allowed opacity-70"
              >
                {item.label} <span className="text-sm opacity-60">(coming soon)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
