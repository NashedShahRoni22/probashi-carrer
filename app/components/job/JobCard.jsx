"use client";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { useState } from "react";
import JobApplyModal from "./JobApplyModal";

export default function JobCard({ job }) {
  const getTimeAgo = (date) => {
    const now = new Date();
    const posted = new Date(date);
    const diffTime = Math.abs(now - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return posted.toLocaleDateString();
  };

  const [modal, showModal] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300-700">
      <div className="flex gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14  rounded-xl flex items-center justify-center text-2xl shadow-md">
            {job.logo}
          </div>
        </div>

        {/* Job Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900-1 hover:text-primary-400 cursor-pointer transition-colors">
                {job.title}
              </h3>
              <p className="text-slate-600 font-medium">{job.company}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
              <MapPin size={14} />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/30 text-blue-700 rounded-lg text-sm font-medium">
              <Briefcase size={14} />
              {job.jobType}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50/30 text-green-700 rounded-lg text-sm font-medium">
              {job.salary}
            </span>
          </div>

          {/* <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {job.description}
          </p> */}

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-slate-500 text-sm">
              <Clock size={14} />
              {getTimeAgo(job.postedDate)}
            </span>
            <button
              onClick={() => showModal((v) => !v)}
              className={`cursor-pointer px-5 py-2 ${!modal ? "bg-primary" : "bg-red-500" } ${!modal ? "hover:bg-blue-700" : "bg-red-600" } text-white font-semibold rounded-lg transition-colors duration-200 text-sm`}
            >
              {modal ? "বাতিল করুন" : "আবেদন করুন"}
            </button>
          </div>

          <JobApplyModal isOpen={modal} onClose={() => showModal(false)} job={job} />
        </div>
      </div>
    </div>
  );
}
