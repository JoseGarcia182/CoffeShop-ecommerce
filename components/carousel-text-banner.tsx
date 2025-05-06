'use client'
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío en 24/48 hs",
    description:
      "Como cliente VIP, recibí tus pedidos en tiempo récord. Unite y descubrí más beneficios.",
    link: "#",
  },
  {
    id: 2,
    title: "Café de especialidad",
    description:
      "Seleccionamos granos de calidad premium para una experiencia única en cada taza.",
    link: "#",
  },
  {
    id: 3,
    title: "Tu momento, tu café",
    description:
      "En grano, molido o en cápsulas. Encontrá el café ideal para tu rutina.",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel className="w-full max-w-4xl mx-auto"
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
    >
        <CarouselContent>
        {dataCarouselTop.map(({id, title, description, link})=>
            <CarouselItem key={id} onClick={()=> router.push(link)} className="cursor-pointer">
                <div>
                    <Card className="shadow-none border-none bg-transparent">
                        <CardContent className="flex flex-col justify-center p-2 items-center">
                            <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                            <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
