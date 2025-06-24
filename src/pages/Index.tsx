
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
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                Start
              </button>
              <button onClick={() => scrollToSection('leistungen')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                Leistungen
              </button>
              <button onClick={() => scrollToSection('fuhrpark')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                Fuhrpark
              </button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
                Über uns
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
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
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-full w-14 h-14 shadow-lg"
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
              <span className="text-orange-600">Stark auf der Straße, flexibel im Einsatz</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Wir bewegen, was andere nicht bewegen können – mit Containerlogistik, Walking-Floor-Systemen und zuverlässiger Holzverwertung in der Region Eifel, Mosel und Hunsrück.
            </p>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Jetzt Container anfragen
            </Button>
          </div>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-r from-slate-800/20 to-slate-600/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&h=800&fit=crop" 
            alt="LKW im Einsatz" 
            className="w-full h-full object-cover opacity-30"
          />
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
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <Package className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Abrollcontainer</h3>
                  <p className="text-slate-600">
                    Verschiedene Größen für Bauschutt, Erdaushub und Altholz. Schnelle Bereitstellung und Abholung.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <Truck className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Walking Floor Transporte</h3>
                  <p className="text-slate-600">
                    Lose Ware und Schüttgut effizient transportiert. Ideal für Hackschnitzel und Biomasse.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <Package className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Tautliner mit Hebebühne</h3>
                  <p className="text-slate-600">
                    Stückgut und palettierte Ware sicher und zuverlässig transportiert.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <TreePine className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Grünschnitt & A1-Holz-Annahme</h3>
                  <p className="text-slate-600">
                    Umweltgerechte Verwertung von Grünschnitt und qualitativem Altholz.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <Recycle className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Hackschnitzel & Schredderarbeiten</h3>
                  <p className="text-slate-600">
                    Professionelle Aufbereitung für Biomasse und Energieverwertung.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                    <Truck className="text-orange-600" size={32} />
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

            {/* Vehicle Gallery */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop" 
                  alt="LKW im Einsatz" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop" 
                  alt="Container Transport" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop" 
                  alt="Baustelle" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1597149013721-36ed4d635d5a?w=400&h=300&fit=crop" 
                  alt="Holzverarbeitung" 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Customer Testimonial */}
            <Card className="bg-orange-50 border-orange-200 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-slate-700 italic mb-4">
                  "Zuverlässig, pünktlich, unkompliziert. Bei Holzel weiß man, woran man ist."
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
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-600">BD</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Bernd Dreiser</h3>
                  <p className="text-orange-600 font-medium mb-2">Geschäftsführer</p>
                  <p className="text-slate-600 text-sm">Fuhrpark & Einsatzplanung</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-600">DD</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Dennis Dreiser</h3>
                  <p className="text-orange-600 font-medium mb-2">Disposition</p>
                  <p className="text-slate-600 text-sm">Tourenplanung & Logistik</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-600">ID</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Irene Dreiser</h3>
                  <p className="text-orange-600 font-medium mb-2">Büro & Verwaltung</p>
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
                    <Phone className="text-orange-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Irene Dreiser (Büro)</p>
                      <a href="tel:+4915172800926" className="text-orange-400 hover:text-orange-300 transition-colors text-xl">
                        0151 – 728 009 26
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-orange-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Bernd Dreiser (GF)</p>
                      <a href="tel:+4916094751944" className="text-orange-400 hover:text-orange-300 transition-colors text-xl">
                        0160 – 947 519 44
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-orange-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">E-Mail</p>
                      <a href="mailto:info@holzel-gmbh.de" className="text-orange-400 hover:text-orange-300 transition-colors">
                        info@holzel-gmbh.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-orange-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Adresse</p>
                      <p className="text-slate-300">
                        Hagelstraße 6<br />
                        56743 Thür
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-orange-400 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-lg">Bürozeiten</p>
                      <p className="text-slate-300">Mo–Fr 08:00–17:00 Uhr</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 h-48 bg-slate-700 rounded-lg flex items-center justify-center">
                  <p className="text-slate-400">Google Maps Integration</p>
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
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Telefonnummer *" 
                      required 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <Input 
                      type="email" 
                      placeholder="E-Mail" 
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Art der Anfrage" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
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
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3"
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
                <span className="text-orange-400 ml-1">ooliv Werbeagentur</span>
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
