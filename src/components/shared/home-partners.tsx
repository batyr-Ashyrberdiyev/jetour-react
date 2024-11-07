import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';
import { useEffect, useState } from 'react';
import { SectionInfo } from './section-info';

const partners = [
  {
    logo: '/images/partners/soueast.png',
  },
  {
    logo: '/images/partners/jetour.svg',
  },
  {
    logo: '/images/partners/petronas.svg',
  },
  {
    logo: '/images/partners/soueast.png',
  },
  {
    logo: '/images/partners/jetour.svg',
  },
  {
    logo: '/images/partners/petronas.svg',
  },
];

export const HomePartners = () => {
  const [api, setApi] = useState<CarouselApi>();

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

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section className="pt-[50px] font-bold pb-[72px]">
      <SectionInfo title={'HYZMATDAŞ'} subtitle={'Partnerlarymyz'} />

      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 7000, dragThreshold: 1000, watchDrag: false }}
        plugins={[
          Autoplay({
            delay: 0,
          }),
        ]}>
        <CarouselContent className="h-20">
          {partners.map((item, i) => (
            <CarouselItem className="basis-1/4 h-full">
              <img key={i} src={item.logo} alt="logo" className="size-full object-contain" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
