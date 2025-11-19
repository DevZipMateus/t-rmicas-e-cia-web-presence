import { MessageCircle } from "lucide-react";
import heroBanner from "@/assets/hero-banner-new.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white bg-black/40 backdrop-blur-sm rounded-3xl p-12 md:p-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            TÉRMICAS E CIA
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-light animate-fade-in">
            Brindes corporativos que unem design, utilidade e significado
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in">
            A praticidade que te acompanha
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <a
              href="https://wa.me/5517996026352"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-lg shadow-lg hover:scale-105"
            >
              <MessageCircle size={24} />
              Solicitar orçamento
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("servicos");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/60 rounded-lg hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all font-semibold text-lg backdrop-blur-sm"
            >
              Nossos serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
