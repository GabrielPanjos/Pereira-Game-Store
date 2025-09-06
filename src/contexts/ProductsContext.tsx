import { createContext, useState } from "react";
import { products } from "../data/Products/Products";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

type ProductsContextType = {
  productFiltered: Product[];
  filterProducts: (category?: string) => void;
};

export const ProductsContext = createContext<ProductsContextType | null>(null);

type ProductsProviderProps = {
  children: React.ReactNode;
};

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productFiltered, setProductFiltered] = useState<Product[]>(products);

  function filterProducts(category?: string) {
    if (category) {
      return setProductFiltered(
        products.filter((product) => product.category === category)
      );
    }

    setProductFiltered(products);
  }

  return (
    <ProductsContext.Provider value={{ productFiltered, filterProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
