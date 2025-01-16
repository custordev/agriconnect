"use client";

import { useState, useMemo } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { categories } from "../categorySection";
import { products } from "../product/productsSection";
import { ProductCard } from "../product/productCard";

export function WeeklyBestSelling() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product.categoryId === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section className="py-12 space-y-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Weekly Best Selling Items
        </h2>

        <ScrollArea className="w-full whitespace-nowrap rounded-lg border border-gray-200 bg-white p-1">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? "bg-[#004D40] hover:bg-[#004D40]/90 text-white"
                    : "text-gray-700 hover:text-[#004D40]"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.title}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
