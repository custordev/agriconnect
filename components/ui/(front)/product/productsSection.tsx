import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "./productCard"; // Ensure this component is correctly implemented and imported.

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
}

export const products: Product[] = [
  // Fresh Produce
  {
    id: "prod-1",
    title: "Organic Bananas",
    description: "Ripe, fair-trade bananas",
    price: 2.99,
    categoryId: "cat-produce",
    image: "/grocery1.avif",
  },
  {
    id: "prod-2",
    title: "Cherry Tomatoes",
    description: "Sweet vine-ripened tomatoes",
    price: 3.49,
    categoryId: "cat-produce",
    image: "/grocery2.avif",
  },
  {
    id: "prod-3",
    title: "Organic Spinach",
    description: "Fresh leafy spinach",
    price: 3.29,
    categoryId: "cat-produce",
    image: "/grocery25.avif",
  },

  // Dairy & Eggs
  {
    id: "prod-4",
    title: "Whole Milk",
    description: "Fresh whole milk",
    price: 3.99,
    categoryId: "cat-dairy",
    image: "/grocery4.avif",
  },
  {
    id: "prod-5",
    title: "Cheddar Cheese",
    description: "Sharp aged cheddar",
    price: 5.99,
    categoryId: "cat-dairy",
    image: "/grocery5.avif",
  },
  {
    id: "prod-6",
    title: "Free-Range Eggs",
    description: "Large brown eggs",
    price: 4.49,
    categoryId: "cat-dairy",
    image: "/grocery6.avif",
  },

  // Meat & Seafood
  {
    id: "prod-7",
    title: "Chicken Breast",
    description: "Boneless skinless chicken",
    price: 8.99,
    categoryId: "cat-meat",
    image: "/grocery7.avif",
  },
  {
    id: "prod-8",
    title: "Salmon Fillet",
    description: "Wild-caught salmon",
    price: 12.99,
    categoryId: "cat-meat",
    image: "/grocery8.avif",
  },
  {
    id: "prod-9",
    title: "Ground Beef",
    description: "Lean ground beef",
    price: 7.49,
    categoryId: "cat-meat",
    image: "/grocery24.avif",
  },

  // Bakery
  {
    id: "prod-10",
    title: "Sourdough Bread",
    description: "Artisan sourdough loaf",
    price: 4.49,
    categoryId: "cat-bakery",
    image: "/grocery10.avif",
  },
  {
    id: "prod-11",
    title: "Whole Wheat Bread",
    description: "Nutritious whole grain bread",
    price: 3.99,
    categoryId: "cat-bakery",
    image: "/grocery11.avif",
  },

  // Frozen Foods
  {
    id: "prod-12",
    title: "Vegetable Stir Fry",
    description: "Mixed frozen vegetables",
    price: 3.99,
    categoryId: "cat-frozen",
    image: "/grocery12.avif",
  },
  {
    id: "prod-13",
    title: "Frozen Pizza",
    description: "Margherita pizza",
    price: 5.99,
    categoryId: "cat-frozen",
    image: "/grocery13.avif",
  },

  // Pantry Staples
  {
    id: "prod-14",
    title: "Organic Quinoa",
    description: "Protein-rich quinoa",
    price: 5.99,
    categoryId: "cat-pantry",
    image: "/grocery14.avif",
  },
  {
    id: "prod-15",
    title: "Olive Oil",
    description: "Extra virgin olive oil",
    price: 7.49,
    categoryId: "cat-pantry",
    image: "/grocery15.avif",
  },

  // Beverages
  {
    id: "prod-16",
    title: "Orange Juice",
    description: "100% fresh orange juice",
    price: 3.49,
    categoryId: "cat-beverages",
    image: "/grocery16.avif",
  },
  {
    id: "prod-17",
    title: "Mineral Water",
    description: "Pure natural mineral water",
    price: 1.99,
    categoryId: "cat-beverages",
    image: "/grocery17.avif",
  },

  // Snacks
  {
    id: "prod-18",
    title: "Potato Chips",
    description: "Classic salted chips",
    price: 2.99,
    categoryId: "cat-snacks",
    image: "/grocery18.avif",
  },
  {
    id: "prod-19",
    title: "Mixed Nuts",
    description: "Roasted and salted nut mix",
    price: 4.99,
    categoryId: "cat-snacks",
    image: "/grocery19.avif",
  },

  // Condiments
  {
    id: "prod-20",
    title: "Tomato Ketchup",
    description: "Classic tomato sauce",
    price: 2.49,
    categoryId: "cat-condiments",
    image: "/grocery20.avif",
  },
  {
    id: "prod-21",
    title: "Mayonnaise",
    description: "Creamy sandwich spread",
    price: 3.29,
    categoryId: "cat-condiments",
    image: "/grocery21.avif",
  },

  // Organic
  {
    id: "prod-22",
    title: "Organic Apple",
    description: "Fresh organic apples",
    price: 4.99,
    categoryId: "cat-organic",
    image: "/grocery22.avif",
  },
  {
    id: "prod-23",
    title: "Organic Honey",
    description: "Pure organic honey",
    price: 6.99,
    categoryId: "cat-organic",
    image: "/grocery23.avif",
  },
];

const slicedProducts = products.slice(0, 10);

export function ProductsSection() {
  return (
    <div className="lg:max-w-[90rem] pb-12 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          You might need
        </h2>
        <Link
          href="/products"
          className="flex items-center gap-2 mb-4 text-[#004D40] hover:underline"
        >
          See more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {slicedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
