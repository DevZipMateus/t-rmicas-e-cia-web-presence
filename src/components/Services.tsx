import { Gift, Palette, Users, Sparkles } from "lucide-react";
import servicesImg from "@/assets/services-img.jpg";

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: "Brindes personalizados",
      description: "Produtos exclusivos com a identidade da sua marca, desde canecas térmicas até kits corporativos completos.",
    },
    {
      icon: Palette,
      title: "Design customizado",
      description: "Criação de layouts únicos e personalizados que refletem os valores e a essência da sua empresa.",
    },
    {
      icon: Users,
      title: "Consultoria personalizada",
      description: "Atendimento próximo e consultivo para entender suas necessidades e sugerir as melhores soluções.",
    },
    {
      icon: Sparkles,
      title: "Produtos de qualidade",
      description: "Seleção rigorosa de materiais e fornecedores para garantir produtos duráveis e de alta qualidade.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em brindes corporativos para fortalecer sua marca
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
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
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg hover:scale-105"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
