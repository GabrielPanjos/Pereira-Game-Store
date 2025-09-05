import { ProductsContext } from "../../../contexts/ProductsContext";
import { ProductCard } from "../ProductCard";
import { useContext } from "react";

export function ShowProductsCards() {
  const context = useContext(ProductsContext);

  if (!context) {
    return <p>Erro: ProductsContext não encontrado.</p>;
  }

  const { productFiltered } = context;

  return (
    <div>
      {productFiltered && (
        <div className="h-full justify-center flex flex-wrap gap-10">
          {productFiltered.map((product) => {
            return (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <ProductCard
                  price={product.price}
                  image={product.image}
                  productName={product.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
