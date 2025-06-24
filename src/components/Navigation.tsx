
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
    { label: "Startseite", path: "/" },
    { label: "Leistungen", path: "/leistungen" },
    { label: "Fuhrpark", path: "/fuhrpark" },
    { label: "Annahme & Verwertung", path: "/annahme-verwertung" },
    { label: "Unternehmen", path: "/unternehmen" },
    { label: "Kontakt", path: "#kontakt" }, // Keep as hash for now since contact form is on homepage
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

      {/* Full Screen Overlay Menu */}
      <div className={`fixed inset-0 bg-slate-900/96 z-40 flex items-center justify-center transition-all duration-700 ${
        isMenuOpen ? 'opacity-100 visible backdrop-blur-sm' : 'opacity-0 invisible'
      }`}>
        <div className={`text-center space-y-16 max-w-lg mx-auto px-6 transition-all duration-700 ${
          isMenuOpen ? 'transform translate-y-0 opacity-100 scale-100' : 'transform translate-y-12 opacity-0 scale-95'
        }`}>
          {/* Main Navigation Items */}
          <div className="space-y-8">
            {mainMenuItems.map((item) => {
              if (item.path.startsWith('#')) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleMenuClick(item.path)}
                    className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-bold py-4 hover:scale-105 transform leading-relaxed tracking-wide"
                  >
                    {item.label}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => handleMenuClick()}
                  className="block w-full text-3xl md:text-4xl text-white hover:text-slate-300 transition-all duration-300 font-bold py-4 hover:scale-105 transform leading-relaxed tracking-wide"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          {/* Coming Soon Section */}
          <div className="border-t border-slate-600 pt-12 space-y-6">
            <div className="text-slate-400 text-sm uppercase tracking-widest mb-8 font-semibold">In Vorbereitung</div>
            {comingSoonItems.map((item) => (
              <div
                key={item.label}
                className="text-xl md:text-2xl text-slate-500 py-3 font-light leading-relaxed cursor-not-allowed"
              >
                {item.label} <span className="text-base opacity-70">(coming soon)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
