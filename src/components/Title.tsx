interface Props {
  title?: string;
}

export default function Title({ title }: Props) {
  return (
    <div className="flex relative items-center justify-center mb-4 md:mb-7">
      <h2 className="text-2xl font-semibold bg-white relative z-10 w-auto px-6 text-center">{title}</h2>
      <span className="absolute top-1/2 left-0 bg-black w-full h-[1px]" />
    </div>
  );
}
