import { MessageCircle } from "lucide-react";

import mosaic1 from "@/assets/mosaic-1.jpg";
import mosaic2 from "@/assets/mosaic-2.jpg";
import mosaic3 from "@/assets/mosaic-3.jpg";
import mosaic4 from "@/assets/mosaic-4.jpg";
import mosaic5 from "@/assets/mosaic-5.jpg";
import mosaic6 from "@/assets/mosaic-6.jpg";

// Duplicate images for seamless loop
const column1Images = [mosaic1, mosaic4, mosaic1, mosaic4];
const column2Images = [mosaic2, mosaic5, mosaic2, mosaic5];
const column3Images = [mosaic3, mosaic6, mosaic3, mosaic6];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center pt-20 bg-background overflow-hidden"
    >
      {/* Animated Mosaic Background */}
      <div className="absolute inset-0 z-0 flex gap-2 p-2">
        {/* Column 1 - Scrolls Up */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-scroll-up flex flex-col gap-2">
            {column1Images.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-lg flex-shrink-0">
                <img 
                  src={src} 
                  alt={`Produto ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Scrolls Down */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-scroll-down flex flex-col gap-2">
            {column2Images.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-lg flex-shrink-0">
                <img 
                  src={src} 
                  alt={`Produto ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 - Scrolls Up */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-scroll-up-delayed flex flex-col gap-2">
            {column3Images.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden rounded-lg flex-shrink-0">
                <img 
                  src={src} 
                  alt={`Produto ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white bg-black/50 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            TÉRMICAS E CIA
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light animate-fade-in">
            Brindes corporativos que unem design, utilidade e significado
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto animate-fade-in">
            A praticidade que te acompanha
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in">
            <a
              href="https://wa.me/5517996026352"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-base sm:text-lg shadow-lg hover:scale-105"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
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
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/60 rounded-lg hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all font-semibold text-base sm:text-lg backdrop-blur-sm"
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
