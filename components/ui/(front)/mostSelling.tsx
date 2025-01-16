import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./product/productCard";
import { products } from "./product/productsSection";

export default function MostSelling() {
  const slicedProducts = products.slice(2, 12);
  return (
    <section className="py-12 max-w-[90rem]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="lg:text-2xl text-xl font-bold text-[#1B3C35]">
            Most selling products
          </h2>
          <Link
            href="#"
            className="text-[#C84C21] hover:text-[#A33D1A] flex items-center gap-2"
          >
            See more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {slicedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
