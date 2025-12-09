"use client";

import { 
  Hammer, 
  Hotel, 
  Sparkles, 
  Car, 
  Factory, 
  Heart, 
  Laptop, 
  Sprout,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const jobCategories = [
  {
    name: "কনস্ট্রাকশন ও শ্রমিক",
    icon: Hammer,
    jobCount: "৩,৫০০+",
    avgSalary: "$৮০০ - $১,৫০০",
    trending: true,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    name: "হোটেল ও হসপিটালিটি",
    icon: Hotel,
    jobCount: "২,৮০০+",
    avgSalary: "$৬০০ - $১,২০০",
    trending: true,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    name: "ক্লিনিং ও হাউজকিপিং",
    icon: Sparkles,
    jobCount: "২,২০০+",
    avgSalary: "$৫০০ - $৯০০",
    trending: false,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "ড্রাইভিং",
    icon: Car,
    jobCount: "১,৯০০+",
    avgSalary: "$৭০০ - $১,৩০০",
    trending: true,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "ফ্যাক্টরি ও ইন্ডাস্ট্রি",
    icon: Factory,
    jobCount: "৩,১০০+",
    avgSalary: "$৭৫০ - $১,৪০০",
    trending: false,
    gradient: "from-slate-600 to-gray-700",
  },
  {
    name: "হেল্থকেয়ার",
    icon: Heart,
    jobCount: "১,৬০০+",
    avgSalary: "$১,২০০ - $২,৫০০",
    trending: true,
    gradient: "from-red-500 to-pink-600",
  },
  {
    name: "আইটি ও স্কিল্ড জব",
    icon: Laptop,
    jobCount: "১,৪০০+",
    avgSalary: "$১,৫০০ - $৩,৫০০",
    trending: true,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "এগ্রিকালচার",
    icon: Sprout,
    jobCount: "১,২০০+",
    avgSalary: "$৬০০ - $১,০০০",
    trending: false,
    gradient: "from-lime-500 to-green-600",
  },
];

export default function JobCategories() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            জনপ্রিয় চাকরির বিভাগ
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            আপনার দক্ষতা ও অভিজ্ঞতার সাথে মিল রেখে পছন্দের চাকরির বিভাগ খুঁজে নিন
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {jobCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Trending Badge */}
                {category.trending && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                    <TrendingUp size={12} />
                    হট
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} strokeWidth={2} />
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">উপলব্ধ চাকরি</span>
                    <span className="font-bold text-slate-900">{category.jobCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">গড় বেতন</span>
                    <span className="font-bold text-green-600">{category.avgSalary}</span>
                  </div>
                </div>

                {/* View Jobs Link */}
                <Link href={"/jobs"} className="pt-4 border-t border-slate-100 flex items-center justify-between group/link">
                  <span className="text-sm font-semibold text-primary group-hover/link:text-blue-700">
                    চাকরি দেখুন
                  </span>
                  <ArrowRight 
                    size={18} 
                    className="text-primary group-hover/link:translate-x-1 transition-transform" 
                  />
                </Link>

                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">২০,০০০+</div>
              <div className="text-sm text-slate-600 font-medium">মোট চাকরি</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">১০+</div>
              <div className="text-sm text-slate-600 font-medium">বিভাগ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">০৫+</div>
              <div className="text-sm text-slate-600 font-medium">দেশ</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">৯৮%</div>
              <div className="text-sm text-slate-600 font-medium">সাফল্যের হার</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href={"/jobs"} className="px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
            সব বিভাগ দেখুন
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
