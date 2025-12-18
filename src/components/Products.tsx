import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import produto1 from "@/assets/produto-1.jpg";
import produto2 from "@/assets/produto-2.jpg";
import produto3 from "@/assets/produto-3.jpg";
import produto4 from "@/assets/produto-4.jpg";
import produto5 from "@/assets/produto-5.jpg";
import produto6 from "@/assets/produto-6.jpg";
import produto7 from "@/assets/produto-7.jpg";
import produto9 from "@/assets/produto-9.jpg";
import produto10 from "@/assets/produto-10.jpg";
import produto11 from "@/assets/produto-11.jpg";
import produto12 from "@/assets/produto-12.jpg";

const products = [
  { id: 1, image: produto1, title: "Caixas Térmicas Personalizadas" },
  { id: 2, image: produto2, title: "Caixas Térmicas Corporativas" },
  { id: 3, image: produto3, title: "Kit Gourmet Premium" },
  { id: 4, image: produto4, title: "Kit Queijos e Vinhos" },
  { id: 5, image: produto5, title: "Kit Churrasco Completo" },
  { id: 6, image: produto6, title: "Kit Presente Executivo" },
  { id: 7, image: produto7, title: "Kit Sommelier" },
  { id: 8, image: produto9, title: "Kit Churrasco Premium" },
  { id: 9, image: produto10, title: "Mesa Térmica" },
  { id: 10, image: produto11, title: "Copos e Garrafas Térmicas" },
  { id: 11, image: produto12, title: "Churrasqueira Portátil" },
];

const Products = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa linha de brindes corporativos personalizados
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-xl bg-background shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-primary-foreground hover:bg-primary/90" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary text-primary-foreground hover:bg-primary/90" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <span className="text-sm text-muted-foreground">
            Deslize para ver mais →
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
