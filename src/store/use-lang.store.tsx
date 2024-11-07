import { create } from 'zustand';

export enum Langs {
  RU = 'ru',
  TM = 'tm',
  EN = 'en',
}

type ActiveLangType = Pick<Props, 'activeLang'>['activeLang'];

interface Props {
  activeLang: {
    id: Langs;
    view: string;
  };
  setActiveLang: (obj: ActiveLangType) => void;
}

export const useLangStore = create<Props>()((set) => ({
  activeLang: {
    id: Langs.TM,
    view: 'tkm',
  },
  setActiveLang: (obj) => set((state) => ({ activeLang: (state.activeLang = obj) })),
}));
