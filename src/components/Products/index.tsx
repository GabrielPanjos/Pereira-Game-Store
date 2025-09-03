import { products } from "../../data/Products";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section className="mt-15 mb-15 bg-slate-100 w-300 h-full">
      {products && (
        <div className="h-full justify-center flex flex-wrap gap-10">
          {products.map((product) => {
            return (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
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
    </section>
  );
}
