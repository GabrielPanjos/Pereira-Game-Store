import type { LucideProps } from "lucide-react";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

type MenuButtonProps = {
  children: string;
  Icon: React.ComponentType<LucideProps>;
  filterCategory: string;
  filter?: (category: string) => void;
};

export function MenuButton({
  Icon,
  filterCategory,
  children,
}: MenuButtonProps) {
  const { filterProducts } = useContext(ProductsContext);

  return (
    <button
      onClick={() => filterProducts(filterCategory)}
      className="flex flex-col gap-2 h-full justify-center items-center text-slate-100 hover:text-slate-300 font-semibold text-[14px]"
    >
      <Icon className="h-8 w-8" />
      <span>{children}</span>
    </button>
  );
}
