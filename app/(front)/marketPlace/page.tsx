/* eslint-disable @typescript-eslint/no-explicit-any */

import { CategorySection } from "@/components/(front)/categorySection";
import { ProductCard } from "@/components/(front)/product/productCard";
import { products } from "@/components/(front)/product/productsSection";
import Image from "next/image";

export default function MarketplacePage() {
  return (
    <div className="bg-[#2a2817]-50 min-h-screen">
      <main className="pt-24">
        {/* Hero Section */}

        <div className="relative h-[50vh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800"
              alt="market Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-white text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Market Place
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Discover fresh produce and agricultural products from local
                  farmers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <CategorySection />

        {/* Products Section */}
        <section className="py-12 max-w-[90rem] mx-auto">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1B3C35] mb-8">
              All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
