import { Eye, Target, Heart } from "lucide-react";
import aboutWorkplace from "@/assets/sobre-produtos-novo.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça nossa visão, missão e valores que guiam nosso trabalho
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <img
              src={aboutWorkplace}
              alt="Brindes corporativos TÉRMICAS E CIA em ambiente de trabalho"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">Visão</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal referência em soluções criativas e personalizadas
              de brindes corporativos, impulsionando conexões duradouras entre marcas e pessoas.
            </p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">Missão</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Oferecer brindes corporativos que unam design, utilidade e significado,
              proporcionando experiências positivas para colaboradores, clientes e parceiros.
              Trabalhamos com excelência em atendimento, personalização e entrega.
            </p>
          </div>

          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">Valores</h3>
            <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Criatividade:</strong> soluções inovadoras que encantem</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Qualidade:</strong> materiais e processos elevados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Personalização:</strong> cada brinde reflete sua identidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Ética e transparência:</strong> relações de confiança</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Pontualidade:</strong> entrega responsável no prazo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Sustentabilidade:</strong> práticas que reduzem impactos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Excelência no atendimento:</strong> relacionamento consultivo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
