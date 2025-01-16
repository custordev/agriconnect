"use client";

import Image from "next/image";
import { Star, Heart, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/types";

export function ProductDetail({ product }: { product: Product }) {
  console.log(product);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-[#2a2817] text-white rounded-full p-4">
                <span className="text-xl font-bold">12</span>
                <span className="text-sm">%</span>
                <div className="text-xs">DISCOUNT</div>
              </div>
            </div>
            <Image
              width={1080}
              height={1080}
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            <Image
              width={80}
              height={80}
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-cover rounded"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#2a2817]">
            <span className="w-4 h-4">⏰</span>
            <span>Limited time offer</span>
          </div>

          <div className="space-y-2">
            <p className="text-gray-600">{product.categoryId}</p>
            <h1 className="text-3xl font-bold">{product.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 12 ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">(15 reviews)</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">
              ${Math.floor(product.price)}
            </span>
            <span className="text-xl">
              {(product.price % 1).toFixed(2).slice(2)}
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5 mr-2" />
              Add to wishlist
            </Button>
            <Button size="lg" variant="outline">
              <BarChart2 className="w-5 h-5 mr-2" />
              Compare
            </Button>
          </div>

          <div className="space-y-4">
            <div className="text-sm">
              <p>SKU: sku</p>
              <p>Categories: fruits Snaks Juice</p>
            </div>

            <div className="flex items-center gap-2 text-red-500">
              <span>🔥</span>
              <span>100 sold in last 35 hours</span>
            </div>

            <p className="text-gray-600">
              This is a great-tasting, nutritious alternative to use when
              cooking or baking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
