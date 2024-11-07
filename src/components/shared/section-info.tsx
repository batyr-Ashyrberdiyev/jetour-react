interface Props {
  title: string;
  subtitle: string;
}

export const SectionInfo = ({ subtitle, title }: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-[#1C1C1C] uppercase text-[40px] leading-[145%]">{title}</h1>
      <h4 className="text-[#B0B0B0] text-[18px] leading-[140%]">{subtitle}</h4>
    </div>
  );
};
