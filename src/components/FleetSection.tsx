
import { Card, CardContent } from "@/components/ui/card";

const FleetSection = () => {
  return (
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
  );
};

export default FleetSection;
