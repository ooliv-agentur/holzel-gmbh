
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
    <section id="kontakt" className="section-spacing bg-slate-800 text-white">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="text-white mb-6">Kontakt</h2>
            <p className="text-slate-300 text-body-large max-w-4xl mx-auto">
              Schnell einen Container anfragen oder ein Transportangebot einholen? Rufen Sie uns an oder senden Sie eine Nachricht – wir melden uns kurzfristig zurück.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-white mb-12">Direkter Kontakt</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <Phone className="text-slate-400 mt-2" size={24} strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-xl text-white mb-1">Irene Dreiser (Büro)</p>
                    <a href="tel:+4915172800926" className="text-slate-300 hover:text-white transition-colors text-2xl font-medium">
                      0151 – 728 009 26
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <Phone className="text-slate-400 mt-2" size={24} strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-xl text-white mb-1">Bernd Dreiser (GF)</p>
                    <a href="tel:+4916094751944" className="text-slate-300 hover:text-white transition-colors text-2xl font-medium">
                      0160 – 947 519 44
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <Mail className="text-slate-400 mt-2" size={24} strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-xl text-white mb-1">E-Mail</p>
                    <a href="mailto:info@holzel-gmbh.de" className="text-slate-300 hover:text-white transition-colors text-lg">
                      info@holzel-gmbh.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <MapPin className="text-slate-400 mt-2" size={24} strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-xl text-white mb-1">Adresse</p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Hagelstraße 6<br />
                      56743 Thür
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <Clock className="text-slate-400 mt-2" size={24} strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold text-xl text-white mb-1">Bürozeiten</p>
                    <p className="text-slate-300 text-lg">Mo–Fr 08:00–17:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-56 bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600">
                <p className="text-slate-400 font-medium">Google Maps Integration (Platzhalter)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-white mb-12">Anfrage senden</h3>
              
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Name *" 
                    required 
                    className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 h-14 text-lg"
                  />
                </div>

                <div>
                  <Input 
                    type="tel" 
                    placeholder="Telefonnummer *" 
                    required 
                    className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 h-14 text-lg"
                  />
                </div>

                <div>
                  <Input 
                    type="email" 
                    placeholder="E-Mail" 
                    className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 h-14 text-lg"
                  />
                </div>

                <div>
                  <Select>
                    <SelectTrigger className="bg-white border-slate-300 text-slate-800 h-14 text-lg">
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
                    rows={5}
                    className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 text-lg"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white text-lg"
                >
                  Container anfragen
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
