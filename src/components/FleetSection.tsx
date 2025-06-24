
import { Card, CardContent } from "@/components/ui/card";

const FleetSection = () => {
  return (
    <section id="fuhrpark" className="section-spacing bg-white">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="mb-6">Fuhrpark & Vertrauen</h2>
            <p className="text-body-large max-w-4xl mx-auto">
              Unser moderner Fuhrpark ist das Herzstück unserer täglichen Arbeit – technisch auf dem neuesten Stand, gepflegt, einsatzbereit.
            </p>
          </div>

          {/* Vehicle Gallery - Placeholder Images */}
          <div className="grid-fleet mb-20">
            <div className="relative overflow-hidden rounded-lg bg-slate-200 h-56 flex items-center justify-center">
              <span className="text-slate-600 font-medium text-center px-4">LKW auf Baustelle<br />(Platzhalter)</span>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-slate-200 h-56 flex items-center justify-center">
              <span className="text-slate-600 font-medium text-center px-4">Container Transport<br />(Platzhalter)</span>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-slate-200 h-56 flex items-center justify-center">
              <span className="text-slate-600 font-medium text-center px-4">Holzumschlag<br />(Platzhalter)</span>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-slate-200 h-56 flex items-center justify-center">
              <span className="text-slate-600 font-medium text-center px-4">Containerbereitstellung<br />(Platzhalter)</span>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="bg-slate-100 py-20 rounded-xl">
            <Card className="bg-white border-slate-300 max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-16 text-center">
                <div className="text-6xl text-slate-400 mb-8">"</div>
                <p className="text-2xl md:text-3xl text-slate-700 italic mb-8 font-medium leading-relaxed">
                  Zuverlässig, pünktlich, unkompliziert. Bei Holzel weiß man, woran man ist.
                </p>
                <p className="text-slate-600 font-semibold text-lg">
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
