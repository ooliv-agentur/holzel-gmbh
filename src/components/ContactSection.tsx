
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ContactSection = ({ scrollToSection }: ContactSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default ContactSection;
