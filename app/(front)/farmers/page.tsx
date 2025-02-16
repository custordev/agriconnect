"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Phone, Mail, Award } from "lucide-react";

const farmers = [
  {
    id: 1,
    name: "John Mwangi",
    specialty: "Organic Vegetables",
    location: "Kiambu County",
    rating: 4.8,
    experience: "15+ years",
    image: "/famer/farmer1.jpg",
    products: ["Tomatoes", "Kale", "Spinach", "Carrots"],
    contact: {
      phone: "+254 712 345 678",
      email: "john.mwangi@example.com",
    },
    certification: "Certified Organic Farmer",
  },
  {
    id: 2,
    name: "Sarah Ochieng",
    specialty: "Dairy Products",
    location: "Nakuru County",
    rating: 4.9,
    experience: "12+ years",

    // "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=800",
    image: "/famer/famer7.jpg",

    products: ["Fresh Milk", "Yogurt", "Cheese", "Butter"],
    contact: {
      phone: "+254 723 456 789",
      email: "sarah.ochieng@example.com",
    },
    certification: "Kenya Dairy Board Certified",
  },
  {
    id: 3,
    name: "James Kamau",
    specialty: "Fruits & Berries",
    location: "Nyeri County",
    rating: 4.7,
    experience: "10+ years",
    image: "/famer/famer3.jpg",

    products: ["Mangoes", "Avocados", "Passion Fruits", "Strawberries"],
    contact: {
      phone: "+254 734 567 890",
      email: "james.kamau@example.com",
    },
    certification: "GlobalG.A.P Certified",
  },
  {
    id: 4,
    name: "Grace Wanjiku",
    specialty: "Poultry & Eggs",
    location: "Machakos County",
    rating: 4.9,
    experience: "8+ years",
    image: "/famer/famer4.jpg",

    products: ["Free-range Eggs", "Chicken", "Duck Eggs", "Quail"],
    contact: {
      phone: "+254 745 678 901",
      email: "grace.wanjiku@example.com",
    },
    certification: "KEBS Certified",
  },
  {
    id: 5,
    name: "Daniel Kiprop",
    specialty: "Grains & Cereals",
    location: "Uasin Gishu County",
    rating: 4.8,
    experience: "20+ years",
    image: "/famer/famer6.jpg",

    products: ["Maize", "Wheat", "Barley", "Sorghum"],
    contact: {
      phone: "+254 756 789 012",
      email: "daniel.kiprop@example.com",
    },
    certification: "Kenya Grain Growers Certified",
  },
  {
    id: 6,
    name: "Amina Hassan",
    specialty: "Honey & Beekeeping",
    location: "Kilifi County",
    rating: 4.9,
    experience: "7+ years",
    image: "/famer/famer5.jpg",

    products: ["Raw Honey", "Beeswax", "Propolis", "Pollen"],
    contact: {
      phone: "+254 767 890 123",
      email: "amina.hassan@example.com",
    },
    certification: "Organic Beekeeping Certified",
  },
];

export default function FarmersPage() {
  return (
    <div className="bg-[#f7f6f0] min-h-screen">
      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <div className="absolute inset-0 ">
            <Image
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200"
              alt="Farmers Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a2817]/80 to-[#2a2817]/40 flex items-center justify-center">
              <div className="text-white text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                  Meet Our Local Farmers
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
                  Supporting sustainable agriculture and connecting you with
                  verified local farmers across East Africa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Farmers Grid */}
        <section className="py-16 max-w-[90rem] mx-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {farmers.map((farmer) => (
                <div
                  key={farmer.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <div className="relative h-80">
                    <Image
                      src={farmer.image}
                      alt={farmer.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">
                        {farmer.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#2a2817] mb-1">
                          {farmer.name}
                        </h3>
                        <p className="text-gray-600 text-lg font-medium">
                          {farmer.specialty}
                        </p>
                      </div>
                      <span className="bg-[#2a2817] text-white text-xs px-4 py-1.5 rounded-full font-medium">
                        {farmer.experience}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-4 h-4 text-[#2a2817]" />
                      <span className="text-gray-600">{farmer.location}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-[#2a2817]">
                        Products:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {farmer.products.map((product, index) => (
                          <span
                            key={index}
                            className="bg-[#f7f6f0] text-[#2a2817] text-sm px-4 py-1.5 rounded-full font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6 mt-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Phone className="w-4 h-4 text-[#2a2817]" />
                        <span className="text-gray-600">
                          {farmer.contact.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="w-4 h-4 text-[#2a2817]" />
                        <span className="text-gray-600">
                          {farmer.contact.email}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#2a2817]" />
                        <span className="text-sm text-[#2a2817] font-medium">
                          {farmer.certification}
                        </span>
                      </div>
                      <Link
                        href=""
                        className="inline-block bg-[#2a2817] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3c3a22] transition duration-300 ease-in-out"
                      >
                        Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
