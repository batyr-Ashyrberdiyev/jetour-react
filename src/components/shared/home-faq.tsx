import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import CustomAccordion from "../ui/custom-accordion";

const questions = [
  {
    question: "Katalog nirde görüp bolýar?",
    answer: "Gök ýazga basyň: ",
  },
  {
    question: "Kredit berilýämi we nädip oçereda ýazylmaly?",
    answer: "Gök ýazga basyň: ",
  },
  {
    question: "Bäş Ýyl Garantiýa nämeler girýä?",
    answer: "Gök ýazga basyň: ",
  },
  {
    question: "Diler bolmak mümkinçiligi barada?",
    answer: "Gök ýazga basyň: ",
  },
  {
    question: "S07 we S09 Modelleri barada?",
    answer: "Gök ýazga basyň: ",
  },
  {
    question: "Meň nobatym haçan ýeter we köp wagt eglärmi?",
    answer: "Gök ýazga basyň: ",
  },
];

const HomeFaq = () => {
  return (
    <section className="pt-6 pb-8 bg-[#242126]">
      <div className="flex flex-col gap-[42px] max-w-[1326px] mx-auto text-[#F6F6F6]">
        <h1 className="leading-[210%] font-semibold text-[40px]">
          Köp soralýan soraglar
        </h1>

        <div className="flex justify-between">
          <div className="flex flex-col gap-6 flex-[0_0_45%]">
            {questions.slice(0, 3).map((item, i) => (
              <CustomAccordion key={i} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-6 flex-[0_0_45%]">
            {questions.slice(3, 6).map((item, i) => (
              <CustomAccordion key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
