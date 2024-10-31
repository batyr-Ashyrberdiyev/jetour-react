import { cn } from "../../lib/utils";

interface Props {
  size: number;
  current: number;
  className?: string;
}

const Bullets = ({ size, current = 0, className }: Props) => {
  return (
    <div className={cn(className, "flex items-center justify-center gap-6")}>
      {[...Array(size)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "rounded-full flex justify-center cursor-pointer items-center size-5 p-[1px]",
            current === i ? "bg-white" : "bg-white/50"
          )}
        >
          {current === i && (
            <div className="bg-[#242126] size-full rounded-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Bullets;
