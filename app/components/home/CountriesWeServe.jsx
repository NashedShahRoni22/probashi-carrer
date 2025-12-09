"use client";

import { Users, Briefcase, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const countries = [
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    jobs: "২,৫০০+",
    workers: "১৫,০০০+",
    avgSalary: "৩,০০০ - ৫,০০০ SAR",
    popular: true,
  },
  {
    name: "UAE / Dubai",
    flag: "🇦🇪",
    jobs: "৩,২০০+",
    workers: "২০,০০০+",
    avgSalary: "৪,০০০ - ৭,০০০ AED",
    popular: true,
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    jobs: "১,৮০০+",
    workers: "১২,০০০+",
    avgSalary: "৩,৫০০ - ৬,০০০ QAR",
    popular: true,
  },
  {
    name: "Oman",
    flag: "🇴🇲",
    jobs: "৯০০+",
    workers: "৫,০০০+",
    avgSalary: "২৫০ - ৪০০ OMR",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    jobs: "১,৫০০+",
    workers: "৮,০০০+",
    avgSalary: "২,০০০ - ৩,৫০০ MYR",
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    jobs: "১,২০০+",
    workers: "৬,৫০০+",
    avgSalary: "১৮০,০০০ - ২৫০,০০০ JPY",
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    jobs: "১,০০০+",
    workers: "৫,৫০০+",
    avgSalary: "২,০০০,০০০ - ৩,০০০,০০০ KRW",
  },
  {
    name: "Romania",
    flag: "🇷🇴",
    jobs: "৮০০+",
    workers: "৪,০০০+",
    avgSalary: "৩,০০০ - ৫,০০০ RON",
  },
];

export default function CountriesWeServe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            আমরা যেসব দেশে জনবল পাঠাই
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            বিশ্বের জনপ্রিয় গন্তব্যগুলোতে প্রতিযোগিতামূলক বেতনে চাকরির সুযোগ খুঁজে নিন
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              {/* Popular Badge */}
              {country.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                  <TrendingUp size={12} />
                  জনপ্রিয়
                </div>
              )}

              {/* Country Flag & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl border border-primary">
                  {country.flag}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase size={16} className="text-primary flex-shrink-0" />
                  <span className="text-slate-600">
                    <span className="font-bold text-slate-900">{country.jobs}</span> চাকরি উপলভ্য
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-green-600 flex-shrink-0" />
                  <span className="text-slate-600">
                    <span className="font-bold text-slate-900">{country.workers}</span> জনবল প্রেরণ
                  </span>
                </div>
              </div>

              {/* Salary Info */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-1">গড় বেতন</p>
                <p className="text-sm font-bold text-green-600">{country.avgSalary}</p>
              </div>

              {/* Hover Arrow */}
              <Link href={"/jobs"} className="absolute bottom-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight size={16} className="text-white" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-600 mb-6">
            আপনার পছন্দের দেশ তালিকায় নেই? আমরা নিয়মিত নতুন দেশে কাজের সুযোগ যুক্ত করছি।
          </p>
          <Link
            href="/jobs"
            className="px-8 py-3 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
          >
            সব গন্তব্য দেখুন
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
