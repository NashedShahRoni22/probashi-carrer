"use client";

import { 
  UserPlus, 
  MapPin, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Clock,
  Users
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "চাকরি নির্বাচন করুন",
    description: "৫০+ দেশের ভেরিফাইড চাকরিগুলো ব্রাউজ করুন এবং আপনার দক্ষতা অনুযায়ী সঠিক পজিশন নির্বাচন করুন।",
    duration: "৫-১০ মিনিট",
    gradient: "from-blue-500 to-cyan-600",
    color: "blue",
  },
  {
    number: "02",
    icon: FileText,
    title: "তথ্য ও ফি দিয়ে আবেদন",
    description: "আপনার সিভি/ডকুমেন্ট আপলোড করুন এবং স্বচ্ছ সার্ভিস ফি প্রদান করুন। আমাদের টিম সঙ্গে সঙ্গে রিভিউ করবে।",
    duration: "৫ মিনিট",
    gradient: "from-purple-500 to-pink-600",
    color: "purple",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "সিলেকশন ও ইন্টারভিউ",
    description: "শর্টলিস্টেড হলে নিয়োগকারীর সাথে ইন্টারভিউ দিন এবং অফার লেটার সংগ্রহ করুন।",
    duration: "৭-১৪ দিন",
    gradient: "from-orange-500 to-red-600",
    color: "orange",
  },
  {
    number: "04",
    icon: UserPlus,
    title: "ভিসা প্রসেসিং",
    description: "অফার পাওয়ার পর আপনার মেডিকেল, ভিসা ও ট্রাভেল প্রসেসিং দ্রুত সম্পন্ন করা হবে।",
    duration: "১৫-৩০ দিন",
    gradient: "from-green-500 to-emerald-600",
    color: "green",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            চাকরির জন্য আবেদন প্রক্রিয়া
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            মাত্র ৪টি সহজ ধাপ অনুসরণ করে বিদেশে আপনার স্বপ্নের চাকরিটি পেয়ে যান
          </p>
        </div>

        {/* Steps Container - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">

            {/* Steps Grid */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">

                    {/* Step Card */}
                    <div className="bg-white h-full rounded-2xl border border-slate-200 p-6 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 group">

                      {/* Step Number */}
                      <div className="absolute -top-4 left-6 px-4 py-1 bg-white border-2 border-primary rounded-full">
                        <span className="text-sm font-bold text-primary">ধাপ {step.number}</span>
                      </div>

                      {/* Icon */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 mt-4 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                        <Icon className="text-white" size={36} strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-3 text-center group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed text-center mb-4">
                        {step.description}
                      </p>

                      {/* Duration */}
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Clock size={16} className="text-primary" />
                        <span className="font-semibold text-primary">{step.duration}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-8 z-20">
                        <ArrowRight className="text-blue-400" size={32} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-6">

                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={28} strokeWidth={2} />
                      </div>
                      <div className="mt-2 text-center">
                        <span className="text-xs font-bold text-primary">ধাপ {step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={14} className="text-primary" />
                        <span className="font-semibold text-primary">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="text-blue-400 rotate-90" size={28} strokeWidth={3} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            প্রস্তুত আপনার বিদেশ যাত্রার জন্য?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            হাজারো সফল প্রবাসীর সঙ্গে যোগ দিন—যারা আমাদের মাধ্যমে স্বপ্নের বিদেশি চাকরি পেয়েছেন।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/jobs"} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center gap-2 text-lg">
              <MapPin size={22} />
              চাকরিগুলো দেখুন
            </Link>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-slate-600 font-medium">স্বচ্ছ প্রক্রিয়া</div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-primary mb-2">৭-১৪</div>
            <div className="text-slate-600 font-medium">দিনে সিলেকশন</div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-slate-600 font-medium">সাপোর্ট সার্ভিস</div>
          </div>
        </div>
      </div>
    </section>
  );
}
