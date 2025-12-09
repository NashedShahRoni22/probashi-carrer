"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, X, SlidersHorizontal } from "lucide-react";
import JobCard from "./JobCard";

// Sample job data - replace with your API
const jobsData = [
  {
    id: 1,
    title: "ক্লিনার / হাউজকিপার",
    company: "Emirates Facility Services",
    location: "দুবাই",
    country: "UAE",
    jobType: "ফুল টাইম",
    salary: "AED 1,200 - 1,600",
    salaryMin: 1200,
    postedDate: "2024-12-05",
    description:
      "হোটেল, অফিস ও রেসিডেন্সিয়াল বিল্ডিং পরিষ্কার-পরিচ্ছন্নতার দায়িত্ব পালন করতে হবে। ওভারটাইম সুবিধা আছে।",
    logo: "🧹",
  },
  {
    id: 2,
    title: "কনস্ট্রাকশন হেলপার",
    company: "Gulf Contracting Co.",
    location: "কাতার",
    country: "Qatar",
    jobType: "ফুল টাইম",
    salary: "QAR 1,300 - 1,800",
    salaryMin: 1300,
    postedDate: "2024-12-04",
    description:
      "নির্মাণ কাজে সহকারী হিসেবে কাজ করতে হবে। খাবার ও থাকার ব্যবস্থা কোম্পানি দেবে।",
    logo: "🏗️",
  },
  {
    id: 3,
    title: "ফ্যাক্টরি ওয়ার্কার",
    company: "Al Waha Industries",
    location: "ওমান",
    country: "Oman",
    jobType: "ফুল টাইম",
    salary: "OMR 120 - 160",
    salaryMin: 120,
    postedDate: "2024-12-06",
    description:
      "উৎপাদন লাইনে কাজ করতে হবে। শিফট ডিউটি, বাড়তি সময়ে ওভারটাইম সুবিধা রয়েছে।",
    logo: "🏭",
  },
  {
    id: 4,
    title: "সিকিউরিটি গার্ড",
    company: "Qatar Security Services",
    location: "দোহা",
    country: "Qatar",
    jobType: "কনট্রাক্ট",
    salary: "QAR 1,500 - 2,000",
    salaryMin: 1500,
    postedDate: "2024-12-03",
    description:
      "বিভিন্ন কমার্শিয়াল বিল্ডিং ও কোম্পানিতে সিকিউরিটি দায়িত্ব পালন করতে হবে।",
    logo: "🛡️",
  },
  {
    id: 5,
    title: "ডেলিভারি ড্রাইভার / রাইডার",
    company: "Talabat Logistics",
    location: "দুবাই",
    country: "UAE",
    jobType: "ফুল টাইম",
    salary: "AED 2,000 - 3,000 (ইনসেনটিভসহ)",
    salaryMin: 2000,
    postedDate: "2024-12-02",
    description:
      "ফুড ডেলিভারি সার্ভিসে ডেলিভারি রাইডার হিসেবে কাজ করতে হবে। ইনসেনটিভ ও বোনাস সুবিধা রয়েছে।",
    logo: "📦",
  },
  {
    id: 6,
    title: "ওয়্যারহাউস হেলপার",
    company: "Amazon Logistics",
    location: "সৌদি আরব",
    country: "Saudi Arabia",
    jobType: "পার্ট টাইম",
    salary: "SAR 1,200 - 1,600",
    salaryMin: 1200,
    postedDate: "2024-12-05",
    description:
      "গুদামে লোডিং, আনলোডিং, প্যাকেজিং ও স্টক ম্যানেজমেন্টে সহায়তা করতে হবে।",
    logo: "📦",
  },
];

const countries = [
  "All Countries",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "UAE",
  "Germany",
];
const jobTypes = [
  "All Types",
  "Full Time",
  "Part Time",
  "Contract",
  "Remote",
  "Internship",
];

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedJobType, setSelectedJobType] = useState("All Types");
  const [sortBy, setSortBy] = useState("latest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter and sort jobs
  const filteredJobs = jobsData
    .filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCountry =
        selectedCountry === "All Countries" || job.country === selectedCountry;
      const matchesJobType =
        selectedJobType === "All Types" || job.jobType === selectedJobType;
      return matchesSearch && matchesCountry && matchesJobType;
    })
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.postedDate) - new Date(a.postedDate);
      } else if (sortBy === "salary-low") {
        return a.salaryMin - b.salaryMin;
      } else if (sortBy === "salary-high") {
        return b.salaryMin - a.salaryMin;
      }
      return 0;
    });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCountry("All Countries");
    setSelectedJobType("All Types");
    setSortBy("latest");
  };

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Search Jobs
        </label>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Job title or company"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-slate-900"
          />
        </div>
      </div>

      {/* Country Filter */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Country
        </label>
        <div className="relative">
          <MapPin
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={18}
          />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer appearance-none bg-white text-slate-900"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1.25rem",
            }}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Type Filter */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Job Type
        </label>
        <div className="relative">
          <Briefcase
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={18}
          />
          <select
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer appearance-none bg-white text-slate-900"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1.25rem",
            }}
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Sort By
        </label>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="sort"
              value="latest"
              checked={sortBy === "latest"}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700 group-hover:text-blue-600">
              Latest Posts
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="sort"
              value="salary-low"
              checked={sortBy === "salary-low"}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700 group-hover:text-blue-600">
              Salary: Low to High
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="sort"
              value="salary-high"
              checked={sortBy === "salary-high"}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700 group-hover:text-blue-600">
              Salary: High to Low
            </span>
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full px-4 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            আপনার পছন্দের বিদেশি চাকরি খুঁজুন
          </h1>
          <p className="text-slate-600">
            মোট {filteredJobs.length} টি চাকরি পাওয়া গেছে
          </p>
        </div>

        {/* Mobile Filter Button */}
        {/* <button
          onClick={() => setShowMobileFilters(true)}
          className="lg:hidden w-full mb-6 px-4 py-3 bg-white border border-slate-200 rounded-lg flex items-center justify-center gap-2 font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <SlidersHorizontal size={20} />
          Filters & Sort
        </button> */}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Desktop */}
          {/* <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Filters
              </h2>
              <FilterSection />
            </div>
          </aside> */}

          {/* Mobile Filters Drawer */}
          {/* {showMobileFilters && (
            <>
              <div
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-slate-900">
                      Filters
                    </h2>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <X size={20} className="text-slate-600" />
                    </button>
                  </div>
                  <FilterSection />
                </div>
              </div>
            </>
          )} */}

          {/* Job Listings */}
          <main className="flex-1">
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  No jobs found
                </h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
