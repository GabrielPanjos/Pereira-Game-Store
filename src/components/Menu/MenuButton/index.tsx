type MenuButtonProps = {
  children: string;
};

export function MenuButton({ children }: MenuButtonProps) {
  return (
    <button className="flex h-full justify-center items-center text-slate-100 hover:text-slate-300 font-semibold text-[16px]">
      <span>{children}</span>
    </button>
  );
}
