import { createContext, useState } from "react";
import { products } from "../data/Products";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productFiltered, setProductFiltered] = useState(products);

  function filterProducts(category) {
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
