import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Props {
  className?: string;
  onActive: (str: string) => void;
}

const Accordion = ({ className }: Props) => {
  return (
    <motion.div initial={{}} animate={{}} className={cn(className, '')}>
      <h3 className="text-[18px] font-bold leading-[150%]">Katalog nirde görüp bolýar?</h3>
    </motion.div>
  );
};

export default Accordion;
