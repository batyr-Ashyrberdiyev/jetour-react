import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Bullets from "./bullets";
import Autoplay from "embla-carousel-autoplay";

const sliderData = [
  {
    img: "/images/home-slider/1.png",
  },
  {
    img: "/images/home-slider/3.png",
  },
  {
    img: "/images/home-slider/1.png",
  },
];

interface Props {
  onClick: () => void;
}

const HomeSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const onBullet = (i: number) => {
    api?.scrollTo(i);
  };

  return (
    <section className="h-screen">
      <img
        src="/images/home-slider/slider-logo.svg"
        className="absolute z-10 top-[200px] right-[66px]"
      />

      <div className="flex items-center absolute bottom-[60px] gap-4 z-10 left-[100px]">
        <button className="home-btn text-[#344054] bg-white">Soraglar</button>
        <button className="home-btn bg-[#1C1C1C] text-white">Garantiýa</button>
      </div>

      <Bullets
        onBullet={onBullet}
        current={current}
        size={sliderData.length}
        className="absolute z-10 bottom-20 right-[70px]"
      />

      <Carousel
        setApi={setApi}
        opts={{
          duration: 50,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="relative">
          {sliderData.map((item, i) => (
            <CarouselItem key={i} className="max-w-[1920px] h-screen">
              <img
                src={item.img}
                className="size-full object-cover object-bottom"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HomeSlider;
