import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { useRef, useEffect, useState } from "react";

const models = [
  { name: "X50" },
  { name: "X70FL" },
  { name: "X70Plus" },
  { name: "X90Plus" },
  { name: "Dashing" },
  { name: "T2" },
  { name: "s07" },
  { name: "s09" },
];

interface Props {
  active: number;
  setActive: (val: number) => void;
}

const Tabs = ({ active, setActive }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyles, setIndicatorStyles] = useState({
    width: 140,
    left: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const activeButton = containerRef.current.children[
        active
      ] as HTMLButtonElement;
      if (activeButton) {
        const containerRect = containerRef.current.getBoundingClientRect();

        console.log(containerRect);
        const buttonRect = activeButton.getBoundingClientRect();
        setIndicatorStyles({
          width: buttonRect.width,
          left: buttonRect.left - containerRect.left,
        });
      }
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="flex items-center relative justify-center gap-6"
    >
      {/* Индикатор под активным элементом */}
      <motion.div
        className="absolute top-0 h-full bg-[#3D3D3D] rounded-md"
        initial={false}
        animate={{ left: indicatorStyles.left, width: indicatorStyles.width }}
        transition={{
          ease: [0.55, 0, 0.1, 1],
          type: "spring",
          stiffness: 600,
          damping: 50,
        }}
      />
      {models.map((item, i) => (
        <Button
          key={i}
          type="button"
          onClick={() => setActive(i + 1)}
          className={cn(
            "py-3 px-[34px] w-[140px] text-[18px] z-10 transition-all font-bold flex justify-center",
            active === i + 1
              ? "text-white/85 bg-transparent"
              : "text-[#B0B0B0] bg-transparent"
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
