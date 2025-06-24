
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  return (
    <section id="team" className="section-spacing bg-slate-50">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="mb-6">Über uns</h2>
            <p className="text-body-large max-w-4xl mx-auto">
              Seit über 15 Jahren arbeiten wir als Familie im Transport- und Entsorgungsbereich – mit Handschlagqualität, direkter Kommunikation und ehrlichen Preisen.
            </p>
          </div>

          <div className="grid-team">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-700">BD</span>
                </div>
                <h3 className="mb-3">Bernd Dreiser</h3>
                <p className="text-slate-700 font-semibold mb-2">Geschäftsführer</p>
                <p className="text-meta">Fuhrpark & Einsatzplanung</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-700">DD</span>
                </div>
                <h3 className="mb-3">Dennis Dreiser</h3>
                <p className="text-slate-700 font-semibold mb-2">Disposition</p>
                <p className="text-meta">Tourenplanung & Logistik</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-700">ID</span>
                </div>
                <h3 className="mb-3">Irene Dreiser</h3>
                <p className="text-slate-700 font-semibold mb-2">Büro & Verwaltung</p>
                <p className="text-meta">Kundenkontakt & Abrechnung</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
