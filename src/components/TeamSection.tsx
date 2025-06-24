
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  return (
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
  );
};

export default TeamSection;
