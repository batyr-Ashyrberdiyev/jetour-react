import { ChevronDown } from "lucide-react";

const LangMenu = () => {
  return (
    <>
      <div className="h-9 px-2 bg-[#323135] cursor-pointer flex gap-2 justify-center rounded-[12px] items-center text-BLACK_300">
        <h4 className="font-medium text-[16px]">TKM</h4>
        <ChevronDown size={14} />
      </div>
    </>
  );
};

export default LangMenu;
