import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Bullets from "./bullets";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";

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

export const HomeSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   const autoplay: any = emblaApi.plugins().autoplay;

  //   const handleSelect = () => {
  //     autoplay.stop();
  //     setTimeout(() => {
  //       autoplay.play();
  //     }, autoplayOptions.delay);
  //   };

  //   emblaApi.on("select", handleSelect);

  //   return () => {
  //     emblaApi.off("select", handleSelect);
  //   };
  // }, [emblaApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplay: AutoplayType = api.plugins().autoplay;

    const handleSelect = () => {
      autoplay.stop();
      setTimeout(() => {
        autoplay.play();
      }, autoplay.options.delay);
    };

    setCurrent(api.selectedScrollSnap());

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
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
            delay: 5000,
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
