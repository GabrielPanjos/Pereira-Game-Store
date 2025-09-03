import type { LucideProps } from "lucide-react";

type HeaderButtonProps = {
  children?: string;
  Icon: React.ComponentType<LucideProps>;
};

export function HeaderButton({ Icon, children }: HeaderButtonProps) {
  return (
    <button className="flex items-center gap-2 text-white hover:text-gray-300">
      <Icon className="h-7 w-7" />
      {children && <span className="font-semibold text-[18px]">{children}</span>}
    </button>
  );
}
