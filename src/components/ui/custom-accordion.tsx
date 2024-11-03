import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const CustomAccordion = ({ question, answer }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      animate={active ? { paddingBottom: 25 } : {}}
      transition={{ ease: [0.55, 0, 0.1, 1] }}
      onClick={() => setActive(!active)}
      className="border-b border-white/50 overflow-hidden"
    >
      <div className="flex items-center relative cursor-pointer justify-between">
        <h3 className="pb-3 font-bold text-[18px] leading-[130%]">
          {question}
        </h3>

        <motion.div
          initial={{ opacity: 1 }}
          animate={active ? { opacity: 0 } : {}}
          className="absolute top-0 right-0"
        >
          <Plus />
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={!active ? { opacity: 0 } : {}}
          className="absolute top-0 right-0"
        >
          <Minus />
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, paddingBottom: 0 }}
            animate={{ minHeight: 20, paddingBottom: 25 }}
            exit={{ height: 0, paddingBottom: 0 }}
            transition={{ ease: [0.55, 0, 0.1, 1], duration: 0.2 }}
          >
            <h4 className="text-[16px] font-medium D1D1D1">{answer}</h4>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomAccordion;
