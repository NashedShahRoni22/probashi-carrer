"use client";

import { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Shield,
  DollarSign,
  Clock,
  FileCheck,
  Phone,
  CheckCircle
} from "lucide-react";

const faqs = [
  {
    question: "প্রবাসীCareer  কি আইনত অনুমোদিত এবং লাইসেন্সধারী?",
    answer: "জি হ্যাঁ! প্রবাসীCareer একটি পূর্ণাঙ্গ সরকারি অনুমোদিত ও লাইসেন্সধারী রিক্রুটমেন্ট এজেন্সি। আমাদের বিদেশি সকল পার্টনার এমপ্লয়ার যাচাইকৃত ও লাইসেন্সপ্রাপ্ত প্রতিষ্ঠান। আমরা সম্পূর্ণ স্বচ্ছতার সাথে আইনগত নিয়ম মেনে কাজ করি যাতে আপনার নিরাপত্তা নিশ্চিত থাকে।",
    icon: Shield,
    color: "blue",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    question: "প্রসেসিং ফি কীভাবে নেওয়া হয়? কখন পেমেন্ট করতে হবে?",
    answer: "আমরা সার্ভিস ফিতে সম্পূর্ণ স্বচ্ছতা বজায় রাখি। আপনার প্রোফাইল কোন এমপ্লয়ার শর্টলিস্ট করার পরেই কেবল একটি ছোট রেজিস্ট্রেশন ফি দিতে হয়—তার আগে নয়। প্রসেসিং ফি এর মধ্যে ডকুমেন্ট ভেরিফিকেশন, ভিসা প্রসেসিং, মেডিকেল, এবং অন্যান্য সেবার খরচ অন্তর্ভুক্ত থাকে। কোনও লুকানো চার্জ নেই। পেমেন্ট অনলাইন, ব্যাংক ট্রান্সফার অথবা আমাদের অফিসে সরাসরি প্রদান করা যায়। কিছু ক্ষেত্রে কিস্তিতেও পেমেন্ট করা যায়।",
    icon: DollarSign,
    color: "green",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    question: "সিলেকশন পেতে কত সময় লাগে? পুরো প্রসেস কতদিন?",
    answer: "সাধারণত রেজিস্ট্রেশনের পর ৭-১৪ দিনের মধ্যে প্রাথমিক শর্টলিস্ট হয়। শর্টলিস্ট হওয়ার পর ইন্টারভিউ ও ফাইনাল সিলেকশন ২-৪ সপ্তাহের মধ্যে সম্পন্ন হয় (দেশভেদে ভিন্ন হতে পারে)। রেজিস্ট্রেশন থেকে ভিসা অনুমোদন পর্যন্ত পুরো প্রসেস সাধারণত ২-৩ মাস সময় লাগে। দেশ, জব টাইপ, ডকুমেন্ট সম্পূর্ণতা এবং ভিসা প্রসেসিং টাইম অনুযায়ী সময় পরিবর্তিত হতে পারে। আমরা প্রতিটি ধাপে আপনাকে আপডেট রাখি।",
    icon: Clock,
    color: "orange",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    question: "আপনারা কি ভিসা সাপোর্ট এবং ডকুমেন্টেশন সহায়তা প্রদান করেন?",
    answer: "জি হ্যাঁ! আমরা সম্পূর্ণ ভিসা ও ডকুমেন্টেশন সাপোর্ট প্রদান করি। আমাদের সেবার মধ্যে রয়েছে: ✓ ওয়ার্ক পারমিট ও ভিসা প্রসেসিং ✓ ডকুমেন্ট ভেরিফিকেশন ও এটেস্টেশন ✓ মেডিকেল টেস্ট ব্যবস্থাপনা ✓ এম্বাসি অ্যাপয়েন্টমেন্ট বুকিং ✓ প্রি-ডিপারচার ট্রেনিং ✓ টিকেট সহায়তা ✓ আগমনের পর সাপোর্ট। আমাদের অভিজ্ঞ টিম প্রতিটি ধাপে আপনাকে সহযোগিতা করবে।",
    icon: FileCheck,
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    question: "যদি আমি সিলেক্ট না হই? রিফান্ড কি পাবো?",
    answer: "যদি রেজিস্ট্রেশনের ৬০ দিনের মধ্যে আপনি কোনও এমপ্লয়ারের দ্বারা শর্টলিস্ট না হন, তবে রেজিস্ট্রেশন ফি সম্পূর্ণ রিফান্ড দেওয়া হবে (ডকুমেন্ট প্রসেসিংয়ে খরচ থাকলে তা বাদে)। তবে আমাদের সাফল্যের হার ৯৮% এবং অধিকাংশ প্রার্থী একাধিক ইন্টারভিউ কল পেয়ে থাকে। প্রথম সুযোগ না হলে আমরা বিকল্প চাকরির অপশনও দিয়ে থাকি।",
    icon: CheckCircle,
    color: "teal",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    question: "আমি কি আবেদন করার আগে আপনাদের সাথে যোগাযোগ করতে পারি?",
    answer: "অবশ্যই! আপনার যেকোনো প্রশ্নের উত্তর দিতে আমরা প্রস্তুত। আপনি যোগাযোগ করতে পারেন: ✓ হটলাইন: +880-XXX-XXXXXXX (সকাল ৯টা - রাত ৯টা) ✓ WhatsApp: +880-XXX-XXXXXXX ✓ Email: support@probashicareer.com ✓ সরাসরি অফিসে এসে ✓ আমাদের ওয়েবসাইটের লাইভ চ্যাটে। সপ্তাহে ৭ দিন সাপোর্ট টিম সক্রিয় থাকে। এছাড়া প্রতি সপ্তাহে ফ্রি ইনফরমেশন সেশনও অনুষ্ঠিত হয়।",
    icon: Phone,
    color: "red",
    gradient: "from-red-500 to-rose-600",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            সাধারণ জিজ্ঞাসা (FAQ)
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            আমাদের সেবা, প্রসেস এবং সাপোর্ট সম্পর্কে সবচেয়ে সাধারণ প্রশ্নগুলোর উত্তর এখানে পাবেন।
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-blue-300 shadow-xl" 
                    : "border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center shadow-md`}>
                    <Icon className="text-white" size={24} strokeWidth={2} />
                  </div>

                  {/* Question Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 pr-8">
                      {faq.question}
                    </h3>
                    {!isOpen && (
                      <p className="text-sm text-slate-500">দেখতে ক্লিক করুন</p>
                    )}
                  </div>

                  {/* Toggle Icon */}
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="text-primary" size={24} strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={24} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pl-[88px]">
                    <div className="border-l-4 border-blue-200 pl-6 py-4">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              আরও প্রশ্ন আছে?
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              আমাদের সাপোর্ট টিম ২৪/৭ সক্রিয়। যেকোনো সময় মেসেজ বা কল করুন — আমরা ২ ঘণ্টার মধ্যে রিপ্লাই দেব।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                <Phone size={22} />
                এখনই কল করুন
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
            <Shield className="text-primary mx-auto mb-3" size={32} />
            <div className="font-bold text-slate-900 mb-1">লাইসেন্সধারী ও যাচাইকৃত</div>
            <div className="text-sm text-slate-600">সরকারি অনুমোদিত এজেন্সি</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
            <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
            <div className="font-bold text-slate-900 mb-1">৯৮% সাকসেস রেট</div>
            <div className="text-sm text-slate-600">প্রমাণিত সফলতা</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
            <Phone className="text-purple-600 mx-auto mb-3" size={32} />
            <div className="font-bold text-slate-900 mb-1">২৪/৭ সাপোর্ট</div>
            <div className="text-sm text-slate-600">সবসময় পাশে আছি</div>
          </div>
        </div>
      </div>
    </section>
  );
}
