import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export const Slider = <T,>({ items, renderItem }: SliderProps<T>) => {
  return (
    <Carousel>
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i}>
            {renderItem(item, i)}
            {/* используем renderItem для отображения каждого элемента */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
