"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#f5f3e4] min-h-screen">
      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200"
              alt="About Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-white text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  About Us
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                  Learn about our mission to empower farmers and revolutionize
                  agriculture
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <section className="py-16 max-w-[90rem] mx-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-[#2a2817]">Our Story</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Agri-Connect EA Community was founded with a vision to bridge
                  the gap between farmers and markets in East Africa. We
                  recognized the challenges faced by small-scale farmers in
                  accessing fair markets and the difficulties buyers encountered
                  in sourcing quality produce consistently.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our platform serves as a vital link in the agricultural supply
                  chain, leveraging technology to create transparent, efficient,
                  and mutually beneficial connections between farmers,
                  cooperatives, distributors, and end consumers.
                </p>
              </div>
              <div className="lg:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 bg-[#2a2817] text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="md:w-1/2 flex flex-col gap-6">
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To empower farmers and agricultural cooperatives in East
                  Africa by enhancing market access, connecting them with
                  buyers, and facilitating information exchange.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6">
                <h3 className="text-3xl font-bold">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To establish a robust agricultural market that drives economic
                  growth and ensures food security in the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 max-w-[90rem] mx-auto">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#2a2817] mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  position: "CEO & Founder",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
                },
                {
                  name: "Michael Chen",
                  position: "Head of Operations",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
                },
                {
                  name: "Elena Rodriguez",
                  position: "Agricultural Expert",
                  image:
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400",
                },
                {
                  name: "David Kimani",
                  position: "Community Manager",
                  image:
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2 text-[#2a2817]">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.position}</p>
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
