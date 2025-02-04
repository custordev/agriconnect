import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Product {
  id?: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  image: string;
  images?: string[];
  categoryId: string;
}

interface Category {
  id?: string;
  title: string;
  slug: string;
  image: string;
}

interface User {
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
}

interface EndpointCardProps {
  method: "GET" | "POST" | "DELETE";
  url: string;
  description: string;
  example?: Product[] | Product | Category[] | Category | User[] | User;
  requestBody?: Product | Category | User;
}

export default function ApiDocsPage() {
  const productExample: Product = {
    title: "Premium Maize Seeds",
    description: "High-yield hybrid maize seeds suitable for various climates",
    price: 45.99,
    quantity: 1000,
    rating: 4.9,
    image: "https://example.com/maize-seeds.jpg",
    images: [
      "https://example.com/maize-seeds-1.jpg",
      "https://example.com/maize-seeds-pack.jpg",
      "https://example.com/maize-seeds-details.jpg",
    ],
    categoryId: "cat_seeds001",
  };

  const newProductExample: Product = {
    title: "Organic Fertilizer",
    description: "100% organic fertilizer for enhanced soil fertility",
    price: 29.99,
    quantity: 500,
    rating: 4.7,
    image: "https://example.com/organic-fertilizer.jpg",
    images: [
      "https://example.com/fertilizer-1.jpg",
      "https://example.com/fertilizer-usage.jpg",
    ],
    categoryId: "cat_fert001",
  };

  const categoryExample: Category = {
    title: "Farm Inputs",
    slug: "farm-inputs",
    image: "https://example.com/farm-inputs.jpg",
  };

  const allProductsExample: Product[] = [
    {
      id: "prod_001",
      title: "Premium Maize Seeds",
      description: "High-yield hybrid maize seeds",
      price: 45.99,
      quantity: 1000,
      rating: 4.9,
      image: "https://example.com/maize-seeds.jpg",
      categoryId: "cat_seeds001",
    },
    {
      id: "prod_002",
      title: "Organic Fertilizer",
      description: "100% organic fertilizer",
      price: 29.99,
      quantity: 500,
      rating: 4.7,
      image: "https://example.com/organic-fertilizer.jpg",
      categoryId: "cat_fert001",
    },
  ];

  const allCategoriesExample: Category[] = [
    {
      id: "cat_001",
      title: "Farm Inputs",
      slug: "farm-inputs",
      image: "https://example.com/farm-inputs.jpg",
    },
    {
      id: "cat_002",
      title: "Fresh Produce",
      slug: "fresh-produce",
      image: "https://example.com/fresh-produce.jpg",
    },
  ];

  const userExample: User = {
    id: "user_001",
    firstName: "John",
    lastName: "Doe",
    phone: "+1234567890",
    password: "123456L@",
  };

  const newUserExample: User = {
    password: "securepassword123",
    firstName: "John",
    lastName: "Doe",
    phone: "+1234567890",
  };

  const allUsersExample: User[] = [
    {
      id: "user_001",
      firstName: "John",
      lastName: "Doe",
      phone: "+1234567890",
      password: "123456L@",
    },
    {
      id: "user_002",
      firstName: "Jane",
      lastName: "Smith",
      phone: "+1234567891",
      password: "123456L@",
    },
  ];

  const BASE_URL = "https://agriconnect-gamma.vercel.app/api";

  const EndpointCard: React.FC<EndpointCardProps> = ({
    method,
    url,
    description,
    example,
    requestBody,
  }) => (
    <div className="mb-8 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-amber-100 hover:border-amber-200 transition-all hover:shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-amber-700 mb-4 tracking-tight">
        {description}
      </h2>

      <Link
        href={`${BASE_URL}${url.replace(":id", "example-id")}`}
        className="group flex items-center justify-between mb-4 bg-amber-50 p-3 sm:p-4 rounded-lg hover:bg-amber-100 transition-all border border-transparent hover:border-amber-200"
        target="_blank"
      >
        <div className="flex items-center space-x-3 overflow-x-auto">
          <span
            className={`font-mono text-sm sm:text-base whitespace-nowrap px-2 py-1 rounded ${
              method === "GET"
                ? "bg-green-100 text-green-700"
                : method === "POST"
                ? "bg-blue-100 text-blue-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {method}
          </span>
          <span className="font-mono text-sm sm:text-base text-gray-700 whitespace-nowrap">
            {`${BASE_URL}${url}`}
          </span>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
      </Link>

      {requestBody && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded">
              Request Body
            </span>
          </h3>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100 overflow-x-auto">
            <pre className="text-xs sm:text-sm">
              <code>{JSON.stringify(requestBody, null, 2)}</code>
            </pre>
          </div>
        </div>
      )}

      {example && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              Response Example
            </span>
          </h3>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-100 overflow-x-auto">
            <pre className="text-xs sm:text-sm">
              <code>{JSON.stringify(example, null, 2)}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 mb-4 tracking-tight">
            AgriConnect API
          </h1>
          <p className="text-base sm:text-lg text-amber-700 max-w-2xl mx-auto">
            Connect with farmers, access fresh produce, and manage agricultural
            products with our comprehensive API
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-amber-800/5 p-4 sm:p-6 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-6 tracking-tight">
                Products API
              </h2>
              <div className="space-y-6">
                <EndpointCard
                  method="GET"
                  url="/products"
                  description="Get All Products"
                  example={allProductsExample}
                />
                <EndpointCard
                  method="GET"
                  url="/products/:id"
                  description="Get Single Product"
                  example={productExample}
                />
                <EndpointCard
                  method="POST"
                  url="/products"
                  description="Add New Product"
                  requestBody={newProductExample}
                  example={productExample}
                />
              </div>
            </div>
            {/* Add additional sections here */}
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-amber-800/5 p-4 sm:p-6 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-6 tracking-tight">
                Categories API
              </h2>
              <div className="space-y-6">
                <EndpointCard
                  method="GET"
                  url="/categories"
                  description="Get All Categories"
                  example={allCategoriesExample}
                />
                <EndpointCard
                  method="GET"
                  url="/categories/:id"
                  description="Get Single Category"
                  example={categoryExample}
                />
                <EndpointCard
                  method="POST"
                  url="/categories"
                  description="Create Category"
                  requestBody={categoryExample}
                  example={categoryExample}
                />
                <EndpointCard
                  method="DELETE"
                  url="/categories/:id"
                  description="Delete Category"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="bg-amber-800/5 p-4 sm:p-6 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-900 mb-6 tracking-tight">
                Users API
              </h2>
              <div className="space-y-6">
                <EndpointCard
                  method="GET"
                  url="/users"
                  description="Get All Users"
                  example={allUsersExample}
                />
                <EndpointCard
                  method="GET"
                  url="/users/:id"
                  description="Get Single User"
                  example={userExample}
                />
                <EndpointCard
                  method="POST"
                  url="/users"
                  description="Create User"
                  requestBody={newUserExample}
                  example={userExample}
                />
                <EndpointCard
                  method="DELETE"
                  url="/users/:id"
                  description="Delete User"
                />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 sm:mt-16 text-center text-gray-600 border-t border-amber-200/30 pt-8">
          <p className="text-sm sm:text-base">
            Need help? Contact our support team at{" "}
            <a
              href="mailto:support@agriconnect.com"
              className="text-amber-700 hover:text-amber-800 transition-colors"
            >
              support@agriconnect.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
