import { useState } from 'react';
import CustomAccordion from '../ui/custom-accordion';

const questions = [
  {
    question: 'Katalog nirde görüp bolýar?',
    answer: 'Gök ýazga basyň: ',
    id: 0,
  },
  {
    question: 'Kredit berilýämi we nädip oçereda ýazylmaly?',
    answer: 'Gök ýazga basyň: ',
    id: 1,
  },
  {
    question: 'Bäş Ýyl Garantiýa nämeler girýä?',
    answer: 'Gök ýazga basyň: ',
    id: 2,
  },
  {
    question: 'Diler bolmak mümkinçiligi barada?',
    answer: 'Gök ýazga basyň: ',
    id: 3,
  },
  {
    question: 'S07 we S09 Modelleri barada?',
    answer: 'Gök ýazga basyň: ',
    id: 4,
  },
  {
    question: 'Meň nobatym haçan ýeter we köp wagt eglärmi?',
    answer: 'Gök ýazga basyň: ',
    id: 5,
  },
];

export const HomeFaq = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-6 pb-8 min-h-[450px] bg-[#242126]">
      <div className="container flex flex-col gap-[42px] text-[#F6F6F6]">
        <h1 className="leading-[210%] font-semibold text-[40px]">Köp soralýan soraglar</h1>

        <div className="flex justify-between">
          <div className="flex flex-col gap-6 flex-[0_0_45%]">
            {questions.slice(0, 3).map((item, i) => (
              <CustomAccordion setActive={setActive} active={i === active} key={i} {...item} />
            ))}
          </div>

          <div className="flex flex-col gap-6 flex-[0_0_45%]">
            {questions.slice(3, 6).map((item, i) => (
              <CustomAccordion setActive={setActive} active={i + 3 === active} key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
