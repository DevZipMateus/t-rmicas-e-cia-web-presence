import { Gift, Palette, Users, Sparkles } from "lucide-react";
import servicesImg from "@/assets/servicos-principal.jpg";
import serviceEngraving from "@/assets/servico-personalizacao.jpg";
import serviceGiftbox from "@/assets/servico-kits.jpg";
import serviceDesign from "@/assets/servico-design-v2.jpg";
import serviceDelivery from "@/assets/servico-consultoria.jpg";

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: "Brindes personalizados",
      description: "Produtos exclusivos com a identidade da sua marca, desde canecas térmicas até kits corporativos completos.",
      image: serviceGiftbox,
    },
    {
      icon: Palette,
      title: "Design customizado",
      description: "Criação de layouts únicos e personalizados que refletem os valores e a essência da sua empresa.",
      image: serviceDesign,
    },
    {
      icon: Users,
      title: "Consultoria personalizada",
      description: "Atendimento próximo e consultivo para entender suas necessidades e sugerir as melhores soluções.",
      image: serviceDelivery,
    },
    {
      icon: Sparkles,
      title: "Produtos de qualidade",
      description: "Seleção rigorosa de materiais e fornecedores para garantir produtos duráveis e de alta qualidade.",
      image: serviceEngraving,
    },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em brindes corporativos para fortalecer sua marca
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg sm:rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg group"
                >
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <service.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={servicesImg}
                alt="Brindes corporativos personalizados da TÉRMICAS E CIA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5517996026352"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-base sm:text-lg shadow-lg hover:scale-105"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
