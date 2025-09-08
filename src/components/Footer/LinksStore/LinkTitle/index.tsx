type LinkTitle = {
  children: string;
};

export function LinkTitle({ children }: LinkTitle) {
  return <h1 className="font-bold text-[20px] mb-6">{children}</h1>;
}
