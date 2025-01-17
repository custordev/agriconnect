/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { CategorySection } from "@/components/(front)/categorySection";
import MostSelling from "@/components/(front)/mostSelling";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    return () => AOS.refresh(); // Cleanup AOS on component unmount
  }, []);

  return (
    <div className="bg-[#2a2817]-50 min-h-screen">
      {/* <Header /> */}
      <main className="pt-24">
        {" "}
        {/* Add padding-top to account for fixed header */}
        {/* Hero Section */}
        <div className="relative min-h-screen">
          <Image
            width={1920}
            height={1080}
            src="/img/harvest.jpg"
            alt="Agriculture background"
            className="h-screen w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
              className="text-white text-center px-4 sm:px-6 lg:px-8"
              data-aos="fade-up"
            >
              <p className="text-yellow-400 text-lg mb-4">
                WE&apos;RE AGRISUPPLY CHAIN COMMUNITY
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Welcome to Agri-Connect EA Community
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Empowering farmers, bridging markets, and revolutionizing
                agriculture through seamless market connections.
              </p>
              <Link href="/about">
                <button className="bg-yellow-400 rounded-full text-[#2a2817]-900 px-8 py-3 text-lg font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out">
                  DISCOVER MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div
                className="lg:w-1/2 flex flex-col gap-6"
                data-aos="fade-right"
              >
                <p className="text-[#2a2817]-600 text-lg">
                  Get to know our priority:
                </p>
                <h2 className="text-4xl font-bold text-[#2a2817]-900">
                  Harvest Showcasing
                </h2>
                <p className="text-gray-700 text-lg">
                  Cooperatives celebrating the food they grow, proudly showing
                  them off to everyone. Throughout the day, they engage with
                  distributors and vendors to increase market access, bridge the
                  gap between farmers and buyers, promote agricultural
                  development, and empower farmers through technology.
                </p>
                <p className="text-[#2a2817]-700 italic">
                  It is marvelous seeing farmers benefiting from what they have
                  made.
                </p>
              </div>
              <div data-aos="fade-left" className="lg:w-1/2">
                <Image
                  width={600}
                  height={400}
                  src="/img/About.png"
                  alt="About Us"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Category Section */}
        <CategorySection />
        {/* Mission and Vision Section */}
        <div className="text-white py-24 bg-cover bg-center bg-[url('/img/harvest.jpg')] relative">
          <div className="absolute inset-0  "></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="md:w-1/2 flex flex-col gap-6">
                <h3 className="text-3xl font-bold">MISSION</h3>
                <p className="text-lg">
                  Our mission is to empower farmers and agricultural
                  cooperatives in East Africa by enhancing market access,
                  connecting them with buyers, and facilitating information
                  exchange.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col gap-6">
                <h3 className="text-3xl font-bold">VISION</h3>
                <p className="text-lg">
                  Our vision is to establish a robust agricultural market that
                  drives economic growth and ensures food security in the
                  region.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Most Selling Section */}
        <MostSelling />
        {/* Contact Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
              <div className="lg:w-1/2 flex flex-col gap-6">
                <p className="text-[#2a2817]-600 text-lg">Contact now</p>
                <h2 className="text-4xl font-bold text-[#2a2817]-900">
                  Get in touch with us
                </h2>
                <p className="text-gray-700">
                  Feel free to reach out with any questions or needs. We're here
                  to help!
                </p>
                <div className="flex gap-4" data-aos="fade-up">
                  <a
                    href="#"
                    className="text-[#2a2817]-600 hover:text-[#2a2817]-700 transition-colors duration-300"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#2a2817]-600 hover:text-[#2a2817]-700 transition-colors duration-300"
                  >
                    <MdOutlineFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#2a2817]-600 hover:text-[#2a2817]-700 transition-colors duration-300"
                  >
                    <FaPinterestP className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-[#2a2817]-600 hover:text-[#2a2817]-700 transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2" data-aos="fade-up">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Names"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a2817]-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a2817]-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a2817]-500"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a2817]-500"
                    />
                  </div>
                  <textarea
                    placeholder="Write message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a2817]-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-[#2a2817]-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
