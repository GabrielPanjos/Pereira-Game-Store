import type { LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

type MenuButtonProps = {
  children: string;
  Icon: React.ComponentType<LucideProps>;
  to: string;
};

export function MenuButton({ Icon, children, to }: MenuButtonProps) {
  return (
    <Link
      to={to}
      className="flex flex-col gap-2 h-full justify-center items-center text-slate-100 hover:text-slate-300 font-semibold text-[14px]"
    >
      <Icon className="h-8 w-8" />
      <span>{children}</span>
    </Link>
  );
}
