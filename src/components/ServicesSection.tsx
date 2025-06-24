
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Recycle, TreePine } from "lucide-react";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
