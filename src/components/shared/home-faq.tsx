import { useState } from 'react';

const HomeFaq = () => {
  const [active, setActive] = useState('');

  return (
    <section className="pt-6 pb-8  bg-[#242126]">
      <div className="flex flex-col gap-[42px] max-w-[1326px] mx-auto text-[#F6F6F6]">
        <h1 className="leading-[210%]">Köp soralýan soraglar</h1>
      </div>
    </section>
  );
};

export default HomeFaq;
