import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const categories = [
  {
    id: "cat-produce",
    title: "Fresh Produce",
    description: "Fruits and vegetables",
    imageUrl: "/grocery11.avif",
  },
  {
    id: "cat-dairy",
    title: "Dairy & Eggs",
    description: "Milk, cheese, and eggs",
    imageUrl: "/grocery15.avif",
  },
  {
    id: "cat-organic",
    title: "Organic",
    description: "Certified organic products",
    imageUrl: "/bg/bg-1.jpg",
  },
  {
    id: "cat-meat",
    title: "Meat & Seafood",
    description: "Fresh and frozen meats",
    imageUrl: "/grocery17.avif",
  },
  {
    id: "cat-bakery",
    title: "Bakery",
    description: "Breads and pastries",
    imageUrl: "/bg/bg-6.jpg",
  },
  {
    id: "cat-frozen",
    title: "Frozen Foods",
    description: "Frozen meals and ingredients",
    imageUrl: "/grocery20.avif",
  },
  {
    id: "cat-condiments",
    title: "Condiments",
    description: "Sauces, dressings, and spreads",
    imageUrl: "/bg/bg-12.jpg",
  },
  {
    id: "cat-pantry",
    title: "Pantry Staples",
    description: "Grains, oils, and cooking essentials",
    imageUrl: "/grocery22.avif",
  },
  {
    id: "cat-beverages",
    title: "Beverages",
    description: "Drinks and juices",
    imageUrl: "/grocery25.avif",
  },
  {
    id: "cat-snacks",
    title: "Snacks",
    description: "Chips, crackers, and quick bites",
    imageUrl: "/grocery29.avif",
  },
];

const slicedCategories = categories.slice(0, 5);

export function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {slicedCategories.map((category) => (
            <Link key={category.id} href={`/categories`} passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#004D40]">
                    <Image
                      src={category.imageUrl}
                      alt={category.title}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            asChild
            className="bg-[#004D40] hover:bg-[#00695C] text-white"
          >
            <Link href="/categories">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
