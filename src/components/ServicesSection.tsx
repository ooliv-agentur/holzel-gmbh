
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Recycle, TreePine } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="leistungen" className="section-spacing bg-white">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="mb-6">Unsere Leistungen</h2>
            <p className="text-body-large max-w-4xl mx-auto">
              Unsere Kernkompetenzen liegen im Transport von Schüttgut, Grünschnitt und Altholz sowie in der Entsorgung und Verarbeitung regionaler Reststoffe.
            </p>
          </div>

          <div className="grid-services">
            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors">
                  <Package className="text-slate-700" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">Abrollcontainer</h3>
                <p className="text-body">
                  Verschiedene Größen für Bauschutt, Erdaushub und Altholz. Schnelle Bereitstellung und Abholung.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors">
                  <Truck className="text-slate-700" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">Walking Floor Transporte</h3>
                <p className="text-body">
                  Lose Ware und Schüttgut effizient transportiert. Ideal für Hackschnitzel und Biomasse.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors">
                  <Package className="text-slate-700" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">Tautliner mit Hebebühne</h3>
                <p className="text-body">
                  Stückgut und palettierte Ware sicher und zuverlässig transportiert.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors">
                  <TreePine className="text-slate-700" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">Grünschnitt & A1-Holz-Annahme</h3>
                <p className="text-body">
                  Umweltgerechte Verwertung von Grünschnitt und qualitativem Altholz.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors">
                  <Recycle className="text-slate-700" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">Hackschnitzel & Schredderarbeiten</h3>
                <p className="text-body">
                  Professionelle Aufbereitung für Biomasse und Energieverwertung.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors">
                  <Truck className="text-slate-700" size={36} strokeWidth={1.5} />
                </div>
                <h3 className="mb-4">Regional & Zuverlässig</h3>
                <p className="text-body">
                  Kurze Wege, persönlicher Service und faire Preise in unserer Heimatregion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-meta">
              Details zu unseren Leistungen folgen in Kürze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
