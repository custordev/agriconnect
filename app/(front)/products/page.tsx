"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, X, Search, SlidersHorizontal } from 'lucide-react';
import { cn } from "@/lib/utils";

// Simulated products data
const products = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
  image: `https://images.unsplash.com/photo-${
    1500000000000 + i
  }?auto=format&fit=crop&w=400&h=400&q=80`,
  category: ["Electronics", "Fashion", "Home"][Math.floor(Math.random() * 3)],
  rating: (Math.random() * 2 + 3).toFixed(1),
}));

const itemsPerPage = 12;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortBy) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => Number(b.rating) - Number(a.rating));
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [searchTerm, priceRange, sortBy, selectedCategory]);

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#004D40] to-[#00796B] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
              Discover Amazing Products
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto">
              Explore our curated collection of premium products designed to
              enhance your lifestyle
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border-transparent focus:border-[#4DB6AC] text-white placeholder:text-[#B2DFDB]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-200 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="h-5 w-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Category
                </Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  // className="mt-1"
                >
                  <option value="all">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home</option>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Price Range
                </Label>
                <div className="mt-2">
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Sort by
                </Label>
                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                  // className="mt-1"
                >
                  <option value="newest">Newest</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-[#004D40]/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-white">
                      ${product.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#004D40]">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-[#00796B]">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium text-yellow-600">
                          ★
                        </span>
                        <span className="text-sm text-[#00796B]">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-[#004D40] hover:bg-[#00695C]">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: pageCount }).map((_, i) => (
                <Button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={cn(
                    "h-8 w-8 p-0",
                    currentPage === i + 1
                      ? "bg-[#004D40] text-white hover:bg-[#00695C]"
                      : "bg-white text-[#004D40] hover:bg-[#E0F2F1]"
                  )}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <Button
        className="md:hidden fixed bottom-4 right-4 z-10 bg-[#004D40] text-white shadow-lg hover:bg-[#00695C]"
        onClick={() => setShowMobileFilters(true)}
      >
        <Filter className="mr-2 h-4 w-4" /> Filters
      </Button>

      {/* Mobile Filters Sidebar */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileFilters(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Mobile filters content - same as desktop */}
              <div>
                <Label>Category</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  // className="mt-1"
                >
                  <option value="all">All Categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home</option>
                </Select>
              </div>

              <div>
                <Label>Price Range</Label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
                <div className="flex justify-between mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div>
                <Label>Sort by</Label>
                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                  // className="mt-1"
                >
                  <option value="newest">Newest</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

