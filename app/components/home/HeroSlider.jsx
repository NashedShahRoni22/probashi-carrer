"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  MapPin,
  Briefcase,
} from "lucide-react";

import heroImg1 from "@/assets/hero (1).png";
import heroImg2 from "@/assets/hero (2).png";
import heroImg3 from "@/assets/hero (3).png";
import Image from "next/image";
import Link from "next/link";

// Images array for easy management
const heroImages = [
  { id: 1, src: heroImg1, alt: "Find Your Dream Job Abroad" },
  { id: 2, src: heroImg2, alt: "Work in Your Dream Country" },
  { id: 3, src: heroImg3, alt: "Start Your International Career" },
];

// Sample data - replace with your API data later
const countries = [
  "All Countries",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "UAE",
  "Singapore",
  "Japan",
  "Saudi Arabia",
  "Qatar",
];

const jobTypes = [
  "All Job Types",
  "Full Time",
  "Part Time",
  "Contract",
  "Remote",
  "Temporary",
  "Internship",
];

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");

  const handleSearch = () => {
    // Add your search logic here
    console.log("Searching...", { selectedCountry, selectedJobType });
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-[450px] sm:h-[500px] lg:h-[550px] lg:rounded-b-xl"
          >
            {heroImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-full">
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                    priority
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                cursor-pointer absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 lg:w-11 lg:h-11 rounded-full
                bg-white/20 hover:bg-white/30
                backdrop-blur-md border border-white/30
                hidden lg:flex items-center justify-center
                text-white
                transition-all duration-200
                hover:scale-110
              "
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="
                cursor-pointer absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 lg:w-11 lg:h-11 rounded-full
                bg-white/20 hover:bg-white/30
                backdrop-blur-md border border-white/30
                hidden lg:flex items-center justify-center
                text-white
                transition-all duration-200
                hover:scale-110
              "
              aria-label="Next slide"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </Swiper>

          {/* Fixed Search Bar Overlay - Desktop */}
          <div className="hidden lg:block absolute left-1/2 bottom-8 -translate-x-1/2 w-full max-w-4xl px-8 z-20">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/40">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                আপনার উপযুক্ত চাকরি খুঁজে নিন
              </h2>

              <div className="flex gap-3">
                {/* Country */}
                <div className="flex-1 relative">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={20}
                  />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5rem",
                    }}
                  >
                    <option value="">দেশ নির্বাচন করুন</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Type */}
                <div className="flex-1 relative">
                  <Briefcase
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={20}
                  />
                  <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5rem",
                    }}
                  >
                    <option value="">জব টাইপ নির্বাচন করুন</option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <Link
                  href={"/jobs"}
                  onClick={handleSearch}
                  className="px-10 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Search size={20} />
                  <span>সার্চ করুন</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Fixed Search Bar Overlay - Mobile */}
          <div className="lg:hidden absolute top-1/4 left-4 right-4 z-20">
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-white/40">
              <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">
                আপনার উপযুক্ত চাকরি খুঁজে নিন
              </h3>
              <div className="space-y-2.5">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={18}
                  />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">দেশ নির্বাচন করুন</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <Briefcase
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    size={18}
                  />
                  <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm font-medium outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.75rem center",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    <option value="">জব টাইপ নির্বাচন করুন</option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <Link
                  href={"/jobs"}
                  className="w-full px-4 py-3 bg-primary hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Search size={18} />
                  <span>সার্চ করুন</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
