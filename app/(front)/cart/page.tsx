"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react"
import useCartStore, { type CartItem } from "@/store/cartStore"
import useCountStore from "@/store/counterStore"

export default function Cart() {
  const { items, removeFromCart, updateCartItemQuantity } = useCartStore()
  const { increment, decrement } = useCountStore()

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const total = subtotal + tax

  const handleIncrement = (item: CartItem) => {
    increment(1)
    updateCartItemQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = (item: CartItem) => {
    if (item.quantity > 1) {
      decrement(1)
      updateCartItemQuantity(item.id, item.quantity - 1)
    } else {
      removeFromCart(item.id)
    }
  }

  const handleRemove = (item: CartItem) => {
    removeFromCart(item.id)
  }

  return (
    <div className="min-h-screen bg-[#2a2817]-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#2a2817]">
            Your Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
          </h1>
          <Link href="/marketplace" className="text-[#2a2817] hover:text-yellow-600 flex items-center">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {items.length === 0 ? (
          <Card className="text-center py-12 bg-white shadow-md">
            <CardContent>
              <ShoppingCart className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
              <h2 className="text-xl font-semibold text-[#2a2817] mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven&lsquo;t added any items to your cart yet.</p>
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-[#2a2817]">
                <Link href="/marketplace">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden bg-white shadow-md">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-24 h-24 mr-4 bg-gray-200 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={128}
                          height={128}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg sm:text-xl font-medium text-[#2a2817]">{item.title}</h2>
                          <p className="text-lg sm:text-xl font-medium text-yellow-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm sm:text-base text-gray-500">${item.price.toFixed(2)} each</p>
                        <div className="flex items-center justify-between mt-4 sm:mt-6">
                          <div className="flex items-center border border-yellow-400 rounded-full">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full text-[#2a2817]"
                              onClick={() => handleDecrement(item)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="mx-2 min-w-[2rem] text-center text-[#2a2817]">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full text-[#2a2817]"
                              onClick={() => handleIncrement(item)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-600 hover:bg-red-100 bg-red-50"
                            onClick={() => handleRemove(item)}
                          >
                            <Trash2 className="h-4 w-4 mr-2 hidden lg:flex" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-[#2a2817]">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-[#2a2817]">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (10%)</span>
                      <span className="font-medium text-[#2a2817]">${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-[#2a2817]">Total</span>
                      <span className="text-yellow-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#2a2817] font-semibold">
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

