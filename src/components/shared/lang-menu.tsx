import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Langs, useLangStore } from '../../store/use-lang.store';

const langs = [
  {
    view: 'tkm',
    id: Langs.TM,
  },
  {
    view: 'ru',
    id: Langs.RU,
  },
  {
    view: 'en',
    id: Langs.EN,
  },
];

export const LangMenu = () => {
  const activeLang = useLangStore((state) => state.activeLang);
  const setActiveLang = useLangStore((state) => state.setActiveLang);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="h-9 px-2 w-20 border-none bg-[#323135] cursor-pointer flex gap-2 justify-center rounded-[12px] items-center text-BLACK_300">
        <h4 className="font-medium text-[16px] uppercase">{activeLang.view}</h4>
        <ChevronDown size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10 px-2 border-none bg-[#323135] cursor-pointer flex flex-col gap-2 items-center rounded-[12px] text-BLACK_300">
        {langs
          .filter((item) => item.id !== activeLang.id)
          .map((lang, i) => (
            <DropdownMenuItem
              onClick={() => setActiveLang(lang)}
              key={i}
              className="uppercase h-9 font-medium text-[16px] ">
              {lang.view}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
