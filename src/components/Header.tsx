import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection("inicio")}
          className="flex items-center cursor-pointer"
        >
          <img src={logo} alt="Térmicas & Cia" className="h-16 md:h-20 w-auto" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contato")}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Contato
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre")}
                className="w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("produtos")}
                className="w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Produtos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className="w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className="w-full text-left px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
