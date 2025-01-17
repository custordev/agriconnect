/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductCard } from "./product/productCard";
import { products } from "./product/productsSection";

interface SimilarProductsProps {
  category: string;
  currentProductId: string;
}

export function SimilarProducts({
  category,
  currentProductId,
}: SimilarProductsProps) {
  // In a real application, you would fetch similar products based on the category
  const slicedProducts = products.slice(2, 12);
  const similarProducts = slicedProducts.filter(
    (product) => product.id !== currentProductId
  );

  return (
    <div className="bg-white rounded-xl shadow-lg lg:p-6">
      <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
