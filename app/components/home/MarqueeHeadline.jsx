"use client";

import Marquee from "react-fast-marquee";

export default function MerqueeHeadline() {
  const marqueeItems = [
    "বিদেশে যাচাই করা চাকরি খুঁজুন",
    "সৌদি আরব • দুবাই • মালয়েশিয়া • জাপান • কাতার • রোমানিয়া • ওমান • কুয়েত",
    "দক্ষ, অদক্ষ ও সেমি-স্কিলড কর্মীদের জন্য চাকরি",
    "বাংলাদেশি কর্মীদের জন্য উচ্চ বেতনের নিরাপদ চাকরি",
    "বিশ্বস্ত ও অনুমোদিত নিয়োগকারীদের মাধ্যমে রিক্রুটমেন্ট",
    "ফ্রি সিভি সাবমিশন • দ্রুত প্রসেসিং • কোন লুকানো চার্জ নেই",
    "ওয়ার্ক পারমিট • ভিসা সহায়তা • মেডিকেল ও টিকেট সাপোর্ট",
    "জিরো ফ্রড – ১০০% স্বচ্ছ বিদেশগমন প্ল্যাটফর্ম",
    "প্রবাসী ক্যারিয়ারের সাথে নিরাপদ বিদেশ যাত্রা শুরু করুন",
    "দৈনিক জব আপডেট • সর্বশেষ বিদেশি চাকরির বিজ্ঞাপন",
    "অনলাইনে আবেদন করুন • মোবাইল ফ্রেন্ডলি প্ল্যাটফর্ম",
    "আজই আপনার গ্লোবাল ক্যারিয়ার যাত্রা শুরু করুন",
  ];

  return (
    <div className="text-xl md:text-3xl font-bold text-primary leading-snug py-8">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {marqueeItems.map((item, index) => (
          <span key={index} className="mx-10">
            {item}
          </span>
        ))}
      </Marquee>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
        className="mt-2"
      >
        {marqueeItems.map((item, index) => (
          <span key={index} className="mx-10">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
