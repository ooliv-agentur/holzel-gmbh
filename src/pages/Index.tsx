
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, Package, Recycle, TreePine, Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
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
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu with Animation */}
      <div className={`fixed inset-0 bg-slate-900/95 z-40 flex items-center justify-center transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`text-center space-y-12 max-w-md mx-auto px-4 transition-all duration-500 ${
          isMenuOpen ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-0'
        }`}>
          <div className="space-y-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-3xl text-white hover:text-slate-300 transition-colors font-medium py-3 hover:scale-105 transform transition-transform duration-200"
            >
              Startseite
            </button>
            <button 
              onClick={() => scrollToSection('leistungen')}
              className="block w-full text-3xl text-white hover:text-slate-300 transition-colors font-medium py-3 hover:scale-105 transform transition-transform duration-200"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block w-full text-3xl text-white hover:text-slate-300 transition-colors font-medium py-3 hover:scale-105 transform transition-transform duration-200"
            >
              Über uns
            </button>
            <button 
              onClick={() => scrollToSection('fuhrpark')}
              className="block w-full text-3xl text-white hover:text-slate-300 transition-colors font-medium py-3 hover:scale-105 transform transition-transform duration-200"
            >
              Fuhrpark
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-3xl text-white hover:text-slate-300 transition-colors font-medium py-3 hover:scale-105 transform transition-transform duration-200"
            >
              Kontakt
            </button>
          </div>
          
          <div className="border-t border-slate-600 pt-8 space-y-6">
            <div className="text-slate-400 text-sm uppercase tracking-widest mb-6 font-semibold">In Vorbereitung</div>
            <div className="text-xl text-slate-500 py-2 font-light">Containergrößen <span className="text-sm opacity-70">(coming soon)</span></div>
            <div className="text-xl text-slate-500 py-2 font-light">Holzverwertung <span className="text-sm opacity-70">(coming soon)</span></div>
            <div className="text-xl text-slate-500 py-2 font-light">Grünschnitt-Annahme <span className="text-sm opacity-70">(coming soon)</span></div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-800 border-t border-slate-700">
        <div className="flex">
          <a 
            href="tel:+4915172800926"
            className="flex-1 bg-slate-800 text-white py-4 px-6 text-center font-medium hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Phone size={18} />
            <span>Anrufen</span>
          </a>
          <button 
            onClick={() => scrollToSection('kontakt')}
            className="flex-1 bg-slate-700 text-white py-4 px-6 text-center font-medium hover:bg-slate-600 transition-colors flex items-center justify-center space-x-2"
          >
            <Mail size={18} />
            <span>Anfrage senden</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
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

      {/* Leistungen Section */}
      <section id="leistungen" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Unsere Kernkompetenzen liegen im Transport von Schüttgut, Grünschnitt und Altholz sowie in der Entsorgung und Verarbeitung regionaler Reststoffe.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                    <Package className="text-slate-600" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Abrollcontainer</h3>
                  <p className="text-slate-600">
                    Verschiedene Größen für Bauschutt, Erdaushub und Altholz. Schnelle Bereitstellung und Abholung.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                    <Truck className="text-slate-600" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Walking Floor Transporte</h3>
                  <p className="text-slate-600">
                    Lose Ware und Schüttgut effizient transportiert. Ideal für Hackschnitzel und Biomasse.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                    <Package className="text-slate-600" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Tautliner mit Hebebühne</h3>
                  <p className="text-slate-600">
                    Stückgut und palettierte Ware sicher und zuverlässig transportiert.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                    <TreePine className="text-slate-600" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Grünschnitt & A1-Holz-Annahme</h3>
                  <p className="text-slate-600">
                    Umweltgerechte Verwertung von Grünschnitt und qualitativem Altholz.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                    <Recycle className="text-slate-600" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Hackschnitzel & Schredderarbeiten</h3>
                  <p className="text-slate-600">
                    Professionelle Aufbereitung für Biomasse und Energieverwertung.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-slate-200 transition-colors">
                    <Truck className="text-slate-600" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Regional & Zuverlässig</h3>
                  <p className="text-slate-600">
                    Kurze Wege, persönlicher Service und faire Preise in unserer Heimatregion.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600">
                Details zu unseren Leistungen folgen in Kürze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Moved before Fuhrpark */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Über uns
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Seit über 15 Jahren arbeiten wir als Familie im Transport- und Entsorgungsbereich – mit Handschlagqualität, direkter Kommunikation und ehrlichen Preisen.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-600">BD</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Bernd Dreiser</h3>
                  <p className="text-slate-600 font-medium mb-2">Geschäftsführer</p>
                  <p className="text-slate-600 text-sm">Fuhrpark & Einsatzplanung</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-600">DD</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Dennis Dreiser</h3>
                  <p className="text-slate-600 font-medium mb-2">Disposition</p>
                  <p className="text-slate-600 text-sm">Tourenplanung & Logistik</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-600">ID</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Irene Dreiser</h3>
                  <p className="text-slate-600 font-medium mb-2">Büro & Verwaltung</p>
                  <p className="text-slate-600 text-sm">Kundenkontakt & Abrechnung</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fuhrpark Section */}
      <section id="fuhrpark" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
              Fuhrpark & Vertrauen
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Unser moderner Fuhrpark ist das Herzstück unserer täglichen Arbeit – technisch auf dem neuesten Stand, gepflegt, einsatzbereit.
            </p>

            {/* Vehicle Gallery - Placeholder Images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-slate-200 h-48 flex items-center justify-center">
                <span className="text-slate-600 font-medium text-center px-4">LKW auf Baustelle<br />(Platzhalter)</span>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-slate-200 h-48 flex items-center justify-center">
                <span className="text-slate-600 font-medium text-center px-4">Container Transport<br />(Platzhalter)</span>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-slate-200 h-48 flex items-center justify-center">
                <span className="text-slate-600 font-medium text-center px-4">Holzumschlag<br />(Platzhalter)</span>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-slate-200 h-48 flex items-center justify-center">
                <span className="text-slate-600 font-medium text-center px-4">Containerbereitstellung<br />(Platzhalter)</span>
              </div>
            </div>

            {/* Customer Testimonial - More prominent */}
            <div className="bg-slate-100 py-16 rounded-xl">
              <Card className="bg-white border-slate-300 max-w-3xl mx-auto shadow-lg">
                <CardContent className="p-12 text-center">
                  <div className="text-4xl text-slate-400 mb-4">"</div>
                  <p className="text-2xl text-slate-700 italic mb-6 font-medium leading-relaxed">
                    Zuverlässig, pünktlich, unkompliziert. Bei Holzel weiß man, woran man ist.
                  </p>
                  <p className="text-slate-600 font-medium text-lg">
                    – Bauhof Rhein-Mosel
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 pb-32 md:pb-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Kontakt
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
              Schnell einen Container anfragen oder ein Transportangebot einholen? Rufen Sie uns an oder senden Sie eine Nachricht – wir melden uns kurzfristig zurück.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Direkter Kontakt</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-slate-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Irene Dreiser (Büro)</p>
                      <a href="tel:+4915172800926" className="text-slate-300 hover:text-white transition-colors text-xl">
                        0151 – 728 009 26
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-slate-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Bernd Dreiser (GF)</p>
                      <a href="tel:+4916094751944" className="text-slate-300 hover:text-white transition-colors text-xl">
                        0160 – 947 519 44
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-slate-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">E-Mail</p>
                      <a href="mailto:info@holzel-gmbh.de" className="text-slate-300 hover:text-white transition-colors">
                        info@holzel-gmbh.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-slate-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Adresse</p>
                      <p className="text-slate-300">
                        Hagelstraße 6<br />
                        56743 Thür
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-slate-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Bürozeiten</p>
                      <p className="text-slate-300">Mo–Fr 08:00–17:00 Uhr</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 h-48 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600">
                  <p className="text-slate-400 font-medium">Google Maps Integration (Platzhalter)</p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Anfrage senden</h3>
                
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Name *" 
                      required 
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 h-12"
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Telefonnummer *" 
                      required 
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 h-12"
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      placeholder="E-Mail" 
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 h-12"
                    />
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger className="bg-white border-slate-300 text-slate-800 h-12">
                        <SelectValue placeholder="Art der Anfrage" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-300">
                        <SelectItem value="container">Container-Anfrage</SelectItem>
                        <SelectItem value="rueckruf">Rückruf gewünscht</SelectItem>
                        <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea 
                      placeholder="Ihre Nachricht *" 
                      required 
                      rows={4}
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 text-lg"
                  >
                    Container anfragen
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © 2024 Holzel GmbH · Website in Bearbeitung · 
                <span className="text-slate-300 ml-1">ooliv Werbeagentur</span>
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
