
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-700/50">
      <div className="section-container py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-slate-300 mb-2">
              © 2024 Holzel GmbH
            </p>
            <p className="text-xs text-slate-500">
              Website in Bearbeitung · ooliv Werbeagentur
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center md:text-right">
            <div className="flex space-x-6 text-xs">
              <a href="#" className="hover:text-white transition-colors font-medium uppercase tracking-wide">Impressum</a>
              <a href="#" className="hover:text-white transition-colors font-medium uppercase tracking-wide">Datenschutz</a>
            </div>
            <div className="text-xs">
              <a href="#" className="hover:text-white transition-colors font-medium uppercase tracking-wide">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
