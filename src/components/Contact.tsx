import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para criar os brindes perfeitos para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <a
            href="https://wa.me/5517996026352"
            className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">Telefone</h3>
            <p className="text-muted-foreground">(17) 99602-6352</p>
          </a>

          <a
            href="mailto:comercial.termicasecia@gmail.com"
            className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">E-mail</h3>
            <p className="text-muted-foreground text-sm break-words">
              comercial.termicasecia@gmail.com
            </p>
          </a>

          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-secondary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">Horário</h3>
            <p className="text-muted-foreground text-sm">
              Segunda a Sexta: 07:00 às 17:00
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Sábado: 07:00 às 12:00
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-secondary" size={24} />
            </div>
            <h3 className="text-lg font-bold text-card-foreground mb-2">Endereço</h3>
            <p className="text-muted-foreground text-sm">
              Rodovia Euclides da Cunha KM 545, SN
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/termicasecia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Instagram size={20} />
            Siga-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
