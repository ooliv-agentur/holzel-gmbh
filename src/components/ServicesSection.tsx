
import { Truck, Users, Recycle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Transport & Logistik",
      description: "Professionelle Transportlösungen für Industrie und Gewerbe mit modernster Fahrzeugflotte.",
      icon: Truck,
    },
    {
      title: (
        <>
          Personal-
          <br />
          dienstleistungen
        </>
      ),
      description: "Qualifizierte Fachkräfte für temporäre und dauerhafte Einsätze in verschiedenen Branchen.",
      icon: Users,
    },
    {
      title: "Entsorgung & Recycling",
      description: "Umweltgerechte Entsorgung und Verwertung verschiedener Materialien nach höchsten Standards.",
      icon: Recycle,
    },
  ];

  return (
    <section id="leistungen" className="section-spacing bg-white">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 className="mb-6">Unsere Leistungen</h2>
            <p className="text-body-large max-w-4xl mx-auto">
              Als erfahrener Partner bieten wir umfassende Dienstleistungen in den Bereichen 
              Transport, Personal und Entsorgung.
            </p>
          </div>
          
          <div className="grid-services">
            {services.map((service, index) => (
              <div key={index} className="card-enhanced text-center group">
                <div className="mb-8">
                  <service.icon 
                    size={48} 
                    className="mx-auto text-slate-700 group-hover:text-slate-900 transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mb-6">{service.title}</h3>
                <p className="text-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
