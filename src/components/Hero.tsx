import { MessageCircle } from "lucide-react";

import mosaic1 from "@/assets/mosaic-1.jpg";
import mosaic2 from "@/assets/mosaic-2.jpg";
import mosaic3 from "@/assets/mosaic-3.jpg";
import mosaic4 from "@/assets/mosaic-4.jpg";
import mosaic5 from "@/assets/mosaic-5.jpg";
import mosaic6 from "@/assets/mosaic-6.jpg";

const mosaicImages = [
  { src: mosaic1, alt: "Kit Gourmet Premium" },
  { src: mosaic2, alt: "Tábua e Facas Personalizadas" },
  { src: mosaic3, alt: "Copos e Garrafas Térmicas" },
  { src: mosaic4, alt: "Mesa Térmica" },
  { src: mosaic5, alt: "Caixa Térmica Personalizada" },
  { src: mosaic6, alt: "Churrasqueira Portátil" },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center pt-20 bg-primary"
    >
      {/* Mosaic Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-1 md:gap-2 p-1 md:p-2">
        {/* Row 1 */}
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={mosaicImages[0].src} 
            alt={mosaicImages[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative overflow-hidden rounded-lg md:col-span-1">
          <img 
            src={mosaicImages[1].src} 
            alt={mosaicImages[1].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative overflow-hidden rounded-lg hidden md:block">
          <img 
            src={mosaicImages[2].src} 
            alt={mosaicImages[2].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Row 2 */}
        <div className="relative overflow-hidden rounded-lg hidden md:block">
          <img 
            src={mosaicImages[3].src} 
            alt={mosaicImages[3].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={mosaicImages[4].src} 
            alt={mosaicImages[4].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={mosaicImages[5].src} 
            alt={mosaicImages[5].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30" />
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
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all font-semibold text-base sm:text-lg shadow-lg hover:scale-105"
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
