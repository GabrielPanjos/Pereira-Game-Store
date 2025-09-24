type CardButtonProps = {
  children: string;
  background?: string;
  backgroundHover?: string;
};

export function CardButton({
  children,
  background = "bg-sky-900",
  backgroundHover = "hover:bg-sky-950",
}: CardButtonProps) {
  return (
    <button
      className={`${background} ${backgroundHover} text-slate-100 w-full h-12 rounded font-bold`}
    >
      {children}
    </button>
  );
}
