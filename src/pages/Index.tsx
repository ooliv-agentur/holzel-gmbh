
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
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">
                Start
              </button>
              <button onClick={() => scrollToSection('leistungen')} className="text-gray-300 hover:text-white transition-colors">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('fuhrpark')} className="text-gray-300 hover:text-white transition-colors">
                Fuhrpark
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-white transition-colors">
                Über uns
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-gray-300 hover:text-white transition-colors">
                Kontakt
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 pb-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white transition-colors">
                Start
              </button>
              <button onClick={() => scrollToSection('leistungen')} className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white transition-colors">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('fuhrpark')} className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white transition-colors">
                Fuhrpark
              </button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white transition-colors">
                Über uns
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left py-2 px-4 text-gray-300 hover:text-white transition-colors">
                Kontakt
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky Contact Button Mobile */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <Button 
          onClick={() => scrollToSection('kontakt')}
          className="bg-slate-700 hover:bg-slate-800 text-white rounded-full w-14 h-14 shadow-lg"
        >
          <Phone size={20} />
        </Button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Holzel Transporte –<br />
              <span className="text-slate-700">Stark auf der Straße, flexibel im Einsatz</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Wir bewegen, was andere nicht bewegen können – mit Containerlogistik, Walking-Floor-Systemen und zuverlässiger Holzverwertung in der Region Eifel, Mosel und Hunsrück.
            </p>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-slate-700 hover:bg-slate-800 text-white text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Jetzt Container anfragen
            </Button>
          </div>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-r from-slate-800/20 to-slate-600/20"></div>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>

      {/* Fuhrpark Section */}
      <section id="fuhrpark" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
              Fuhrpark & Vertrauen
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Unser moderner Fuhrpark ist das Herzstück unserer täglichen Arbeit – technisch auf dem neuesten Stand, gepflegt, einsatzbereit.
            </p>

            {/* Vehicle Gallery - Placeholder Images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

            {/* Customer Testimonial */}
            <Card className="bg-slate-100 border-slate-300 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <p className="text-xl text-slate-700 italic mb-4 font-medium">
                  „Zuverlässig, pünktlich, unkompliziert. Bei Holzel weiß man, woran man ist."
                </p>
                <p className="text-slate-600 font-medium">
                  – Bauhof Rhein-Mosel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
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

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-slate-800 text-white">
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
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Telefonnummer *" 
                      required 
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      placeholder="E-Mail" 
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger className="bg-white border-slate-300 text-slate-800">
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
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3"
                  >
                    Nachricht senden
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
