import type { LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

type HeaderButtonProps = {
  children?: string;
  Icon: React.ComponentType<LucideProps>;
  to: string;
};

export function HeaderButton({ Icon, children, to }: HeaderButtonProps) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-slate-100 hover:text-slate-300"
    >
      <Icon className="h-7 w-7" />
      {children && (
        <span className="font-semibold text-[18px]">{children}</span>
      )}
    </Link>
  );
}
