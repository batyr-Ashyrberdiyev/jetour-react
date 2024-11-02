import { useState } from 'react';
import Tabs from './tabs';
import { Button } from '../ui/button';

const models = [
  {
    img: '/images/home-models/dashing.png',
  },
  {
    img: '/images/home-models/x90.png',
  },
  {
    img: '/images/home-models/x70.png',
  },
];

const HomeModels = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="pb-[100px] max-w-[1282px] mx-auto pt-[60px] flex flex-col gap-6">
      <h1 className="text-center font-bold text-[56px] leading-[120%] text-[#1C1C1C]">
        JETOUR MODELLERI
      </h1>

      <Tabs active={active} setActive={setActive} />

      <div className="w-[881px] mx-auto h-[395px]">
        <img src={models[active - 1]?.img} className="size-full object-cover" />
      </div>

      <div className="flex items-center gap-4  justify-center font-semibold">
        <Button className="py-3 px-5">Model Barada</Button>
        <Button className="py-3 px-5 text-[#1C1C1C] bg-[#D1D1D1]">Kredit almak</Button>
      </div>
    </section>
  );
};

export default HomeModels;
