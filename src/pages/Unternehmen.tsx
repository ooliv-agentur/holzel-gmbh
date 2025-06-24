
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Unternehmen = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="section-spacing bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="section-container">
            <div className="section-content text-center">
              <h1 className="mb-8">Unternehmen</h1>
              <p className="text-body-large max-w-4xl mx-auto">
                Geschichte, Werte und Team-Informationen von Holzel GmbH.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Unternehmen;
