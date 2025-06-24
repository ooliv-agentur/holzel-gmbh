
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="section-container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm">
              © 2024 Holzel GmbH · Website in Bearbeitung · 
              <span className="text-slate-300 ml-1">ooliv Werbeagentur</span>
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors font-medium">Impressum</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
