type MenuButtonProps = {
  children: string;
};

export function MenuButton({ children }: MenuButtonProps) {
  return (
    <button className="flex h-full justify-center items-center text-sky-600 hover:text-sky-800 font-semibold text-[16px]">
      <span>{children}</span>
    </button>
  );
}
