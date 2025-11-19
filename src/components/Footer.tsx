import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                T&C
              </div>
              <span className="text-base sm:text-lg font-bold">TÉRMICAS E CIA</span>
            </div>
            <p className="text-background/80 text-xs sm:text-sm leading-relaxed">
              Brindes corporativos que unem design, utilidade e significado. A praticidade que te acompanha.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Links rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://wa.me/5517996026352"
                  className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  (17) 99602-6352
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial.termicasecia@gmail.com"
                  className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-xs sm:text-sm break-all"
                >
                  <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  comercial.termicasecia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/80 text-xs sm:text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <span>Rodovia Euclides da Cunha KM 545, SN</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Horário de funcionamento</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/80 mb-3 sm:mb-4">
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <div>
                  <p>Segunda a Sexta</p>
                  <p className="font-medium">07:00 às 17:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                <div>
                  <p>Sábado</p>
                  <p className="font-medium">07:00 às 12:00</p>
                </div>
              </li>
            </ul>
            <a
              href="https://www.instagram.com/termicasecia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-xs sm:text-sm"
            >
              <Instagram size={14} className="sm:w-4 sm:h-4" />
              @termicasecia
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-4 sm:pt-6">
          <p className="text-center text-background/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} TÉRMICAS E CIA - CNPJ: 60.232.250/0001-89. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
