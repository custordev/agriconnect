/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, removeFromCart, updateCartItemQuantity } = useCartStore();
  const cartItem = useCartStore((state: { items: any[] }) =>
    state.items.find((item: { id: string }) => item.id === product.id)
  );
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleIncreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    updateCartItemQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = (e: React.MouseEvent) => {
    e.preventDefault();
    if (quantity > 1) {
      updateCartItemQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <Link href={`/products/${product.id}`} passHref>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-square relative h-40 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[#2a2817]">
              ${product.price.toFixed(2)}
            </span>
            {quantity === 0 ? (
              <Button
                size="sm"
                className="bg-[#2a2817] hover:bg-[#423d16] text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex items-center bg-[#2a2817]/10 rounded-full">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full"
                  onClick={handleDecreaseQuantity}
                >
                  {quantity > 1 ? (
                    <Minus className="h-4 w-4 text-[#2a2817]" />
                  ) : (
                    <Trash2 className="h-4 w-4 text-red-500" />
                  )}
                </Button>

                <span className="text-[#2a2817] font-medium px-2">
                  {quantity}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full"
                  onClick={handleIncreaseQuantity}
                >
                  <Plus className="h-4 w-4 text-[#2a2817]" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
