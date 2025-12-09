"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "মাহমুদুল হাসান",
    country: "সৌদি আরব",
    role: "কনস্ট্রাকশন কর্মী",
    feedback:
      "প্রবাসীCareer  আমাকে মাত্র ৩ সপ্তাহে রিয়াদে চাকরি পেতে সাহায্য করেছে। পুরো প্রক্রিয়াটি খুবই স্মুথ এবং একদম সত্যিকারের গাইডলাইন। পুরো সময়টাতে টিম খুব সহায়ক ছিল।",
    image: "👨‍🔧",
    rating: 5,
  },
  {
    name: "সাদিয়া আক্তার",
    country: "দুবাই, ইউএই",
    role: "হোটেল রিসেপশনিস্ট",
    feedback:
      "আমি আমার সিভি জমা দেওয়ার ১০ দিনের মধ্যেই দুবাইয়ের একটি হোটেল থেকে সিলেকশন পাই। খুবই ভালো সার্ভিস! সাপোর্ট টিম সব প্রশ্নের উত্তর দ্রুত দিয়েছে।",
    image: "👩‍💼",
    rating: 5,
  },
  {
    name: "রাকিবুল ইসলাম",
    country: "টোকিও, জাপান",
    role: "ফ্যাক্টরি অপারেটর",
    feedback:
      "জাপানি ডকুমেন্টেশন নিয়ে ধাপে ধাপে সহায়তা করেছে। সত্যিই জীবন বদলে দেওয়ার মতো অভিজ্ঞতা! এখন ভালোভাবে সেটেলড এবং ভালো আয় করছি।",
    image: "👨‍🏭",
    rating: 5,
  },
  {
    name: "ফাতিমা বেগম",
    country: "কাতার",
    role: "হেলথকেয়ার অ্যাসিস্ট্যান্ট",
    feedback:
      "প্রবাসীCareer এর মাধ্যমে কাতারে আমার স্বপ্নের চাকরি পেয়েছি। ভিসা প্রসেসিং খুব প্রফেশনাল ছিল এবং চমৎকার প্রি-ডিপার্চার ট্রেনিং দেওয়া হয়েছে।",
    image: "👩‍⚕️",
    rating: 5,
  },
  {
    name: "আব্দুল্লাহ খান",
    country: "সিঙ্গাপুর",
    role: "আইটি সাপোর্ট স্পেশালিস্ট",
    feedback:
      "চমৎকার প্ল্যাটফর্ম! প্রথম সপ্তাহেই একাধিক ইন্টারভিউ কল পাই। এখন সিঙ্গাপুরে একটি রেপুটেড টেক কোম্পানিতে কাজ করছি। ধন্যবাদ প্রবাসীCareer!",
    image: "👨‍💻",
    rating: 5,
  },
  {
    name: "নাসরিন সুলতানা",
    country: "কানাডা",
    role: "কেয়ারগিভার",
    feedback:
      "পুরো ইমিগ্রেশন ও জব প্রসেস ছিল একদম স্বচ্ছ। এখন পরিবারের সাথে টরন্টোতে আছি। জীবনের সেরা সিদ্ধান্ত!",
    image: "👩‍⚕️",
    rating: 5,
  },
  {
    name: " কামাল হোসেন",
    country: "মালয়েশিয়া",
    role: "রেস্টুরেন্ট ম্যানেজার",
    feedback:
      "শুরু থেকে শেষ পর্যন্ত অসাধারণ প্রফেশনাল সার্ভিস। ইন্টারভিউ প্রস্তুতি এবং স্যালারি নেগোশিয়েশনে সাহায্য করেছে। খুবই সন্তুষ্ট!",
    image: "👨‍🍳",
    rating: 5,
  },
  {
    name: "আয়েশা রহমান",
    country: "ইউনাইটেড কিংডম",
    role: "নার্সিং অ্যাসিস্ট্যান্ট",
    feedback:
      "আমার UK ওয়ার্ক পারমিট ও চাকরির পুরো প্রক্রিয়াটি প্রবাসীCareer করেছে। ডকুমেন্ট সাপোর্ট ছিল অসাধারণ। এখন GBP আয় করছি!",
    image: "👩‍⚕️",
    rating: 5,
  },
];


export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            আমাদের প্রার্থীদের অভিজ্ঞতা
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            বাস্তব মানুষের বাস্তব গল্প — যারা প্রবাসীCareer এর মাধ্যমে বিদেশে স্বপ্নের চাকরি পেয়েছেন
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative group">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <Quote className="text-primary" size={24} fill="currentColor" />
                    </div>
                  </div>

                  {/* Feedback */}
                  <p className="text-slate-700 leading-relaxed mb-6 flex-grow text-sm">
                    "{testimonial.feedback}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                      {testimonial.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-slate-900 truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-slate-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium truncate">
                        📍 {testimonial.country}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hero Style */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center text-slate-700 hover:text-primary transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center text-slate-700 hover:text-primary transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-primary mb-2">২0,000+</div>
            <div className="text-sm text-slate-600 font-medium">চাকরি সম্পন্ন</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-primary mb-2">0৫+</div>
            <div className="text-sm text-slate-600 font-medium">দেশ</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-primary mb-2">৯৮%</div>
            <div className="text-sm text-slate-600 font-medium">সাফল্যের হার</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-primary mb-2">২৪/৭</div>
            <div className="text-sm text-slate-600 font-medium">সাপোর্ট</div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .testimonials-swiper .swiper-slide > div {
          width: 100%;
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}