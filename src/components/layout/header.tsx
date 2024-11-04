import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { LangMenu } from "../shared";

const headerLinks = [
  {
    name: "Modellar",
    link: "",
  },
  {
    name: "Awtoşaýlar",
    link: "",
  },
  {
    name: "Kredit Almak",
    link: "",
  },
  {
    name: "Habarlaşmak",
    link: "",
  },
];

const Header = () => {
  return (
    <header className="bg-[#242126] z-50 min-w-[760px] absolute top-10 left-1/2 -translate-x-1/2 border border-BLACK_600 text-BLACK_300 rounded-[12px] text-black-300 py-1 pl-3 pr-1 flex justify-between items-center">
      <img src="/images/logo.svg" alt="" />

      <nav className="h-9 text-[16px] flex items-center bg-[#323135] rounded-[12px]">
        {headerLinks.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className={cn(
              "px-[26px] h-8 flex items-center",
              i + 1 !== headerLinks.length && "border-r border-[#888888]"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <LangMenu />
    </header>
  );
};

export default Header;
