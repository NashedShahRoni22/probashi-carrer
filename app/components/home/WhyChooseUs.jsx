"use client";

import { 
  Shield, 
  FileCheck, 
  Zap, 
  DollarSign, 
  Eye, 
  Headphones,
  CheckCircle2,
  Award
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ভেরিফাইড বিদেশি নিয়োগদাতা",
    description: "আমাদের সব পার্টনার কোম্পানি আন্তর্জাতিক রিক্রুটমেন্টের জন্য সম্পূর্ণ যাচাইকৃত ও লাইসেন্সপ্রাপ্ত।",
    color: "blue",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: FileCheck,
    title: "১০০% ডকুমেন্ট সাপোর্ট",
    description: "ভিসা প্রসেসিং, ওয়ার্ক পারমিটসহ সমস্ত প্রয়োজনীয় কাগজপত্রে সম্পূর্ণ সহায়তা।",
    color: "green",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "দ্রুত জব প্রসেসিং",
    description: "মাত্র ৭-১৪ দিনের মধ্যে উপযুক্ত চাকরির সঙ্গে ম্যাচিং ও প্রসেসিং সম্পন্ন।",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: DollarSign,
    title: "স্বল্প সার্ভিস চার্জ",
    description: "সম্পূর্ণ স্বচ্ছ মূল্য – কোনো লুকানো চার্জ নেই। সফল প্লেসমেন্টের পরেই পেমেন্ট।",
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Eye,
    title: "ট্রান্সপারেন্ট রিক্রুটমেন্ট",
    description: "রিয়েল-টাইমে আপনার অ্যাপ্লিকেশনের স্ট্যাটাস ট্র্যাক করতে পারবেন।",
    color: "indigo",
    gradient: "from-indigo-500 to-primary",
  },
  {
    icon: Headphones,
    title: "ডেডিকেটেড সাপোর্ট টিম",
    description: "২৪/৭ কাস্টমার সাপোর্ট — আপনার ভাষায়, যেকোনো প্রশ্নে আগে এবং পরে সহায়তা।",
    color: "red",
    gradient: "from-red-500 to-rose-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            কেন প্রবাসীCareer বেছে নেবেন?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            আপনার বিদেশি চাকরির যাত্রাকে নিরাপদ, স্বচ্ছ ও সফল করতে আমরা প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} strokeWidth={2} />
                  </div>
                  {/* Check Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle2 className="text-white" size={14} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="bg-gradient-to-r from-primary to-violet-600 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ৫০,০০০+ চাকরি প্রার্থীর বিশ্বস্ত পছন্দ
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                হাজারো সফল প্রার্থীর সাথে যুক্ত হন, যারা প্রবাসীCareer এর মাধ্যমে বিদেশে চাকরি পেয়েছেন
              </p>
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                আজই শুরু করুন
                <CheckCircle2 size={18} />
              </button>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">৯৮%</div>
                <div className="text-blue-100 text-sm font-medium">সাকসেস রেট</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">৭-১৪</div>
                <div className="text-blue-100 text-sm font-medium">গড় প্রসেসিং দিন</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">২০,০০০+</div>
                <div className="text-blue-100 text-sm font-medium">প্লেসমেন্ট সম্পন্ন</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">২৪/৭</div>
                <div className="text-blue-100 text-sm font-medium">সাপোর্ট</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-green-600" size={24} />
            </div>
            <div>
              <div className="font-bold text-slate-900">লাইসেন্সপ্রাপ্ত এজেন্সি</div>
              <div className="text-sm text-slate-600">সরকার অনুমোদিত</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="text-primary" size={24} />
            </div>
            <div>
              <div className="font-bold text-slate-900">নিরাপদ প্রসেস</div>
              <div className="text-sm text-slate-600">ডেটা প্রোটেক্টেড</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="text-purple-600" size={24} />
            </div>
            <div>
              <div className="font-bold text-slate-900">এওয়ার্ড উইনিং</div>
              <div className="text-sm text-slate-600">বেস্ট সার্ভিস ২০২৪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
