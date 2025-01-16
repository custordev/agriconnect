import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Percent, Ship, Tag } from 'lucide-react'

const promotions = [
  {
    title: "Save",
    value: "$29",
    description: "Enjoy Discount all types of Grocery & frozen item",
    icon: <Tag className="h-6 w-6" />,
    image: "/bg/bg-1.jpg",
    color: "bg-[#004D40]/90",
  },
  {
    title: "Discount",
    value: "30%",
    description: "Enjoy Discount all types of Grocery & frozen item",
    icon: <Percent className="h-6 w-6" />,
    image: "/bg/bg-9.jpg",
    color: "bg-[#004D40]/80",
  },
  {
    title: "Up to",
    value: "50%",
    description: "Enjoy Discount all types of Grocery & frozen item",
    icon: <Sun className="h-6 w-6" />,
    image: "/bg/bg-2.jpg",
    color: "bg-[#004D40]/70",
  },
  {
    title: "Free",
    value: "SHIP",
    description: "Enjoy Discount all types of Grocery & frozen item",
    icon: <Ship className="h-6 w-6" />,
    image: "/bg/bg-4.jpg",
    color: "bg-[#004D40]/60",
  },
]

export function PromotionalCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {promotions.map((promo, index) => (
        <Card
          key={index}
          className={`overflow-hidden transition-transform duration-300 hover:scale-105 ${promo.color} text-white`}
        >
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm">{promo.title}</p>
                <p className="text-3xl font-bold">{promo.value}</p>
              </div>
              <div className="p-2 bg-white/20 rounded-full">{promo.icon}</div>
            </div>
            <p className="text-sm">{promo.description}</p>
            <div className="relative h-32 rounded-lg overflow-hidden">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

