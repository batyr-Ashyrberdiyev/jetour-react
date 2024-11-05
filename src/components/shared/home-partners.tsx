import { Slider } from "./slider";

const partners = [
  {
    logo: "/images/partners/soueast.png",
  },
  {
    logo: "/images/partners/jetour.svg",
  },
  {
    logo: "/images/partners/petronas.svg",
  },
];

export const HomePartners = () => {
  return (
    <section className="pt-[50px] font-bold pb-[72px]">
      <div className="text-center">
        <h1 className="text-[#1C1C1C] text-[40px] leading-[145%]">HYZMATDAŞ</h1>
        <h4 className="text-[#B0B0B0] text-[18px] leading-[140%]">
          Partnerlarymyz
        </h4>
      </div>
    </section>
  );
};
