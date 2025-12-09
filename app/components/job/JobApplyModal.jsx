"use client";

import React, { useState } from "react";

export default function JobApplyModal({ isOpen = false, onClose = () => {}, job } = {}) {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  function validateStep1() {
    const errs = {};
    if (!firstName.trim()) errs.firstName = "নামের প্রথম অংশ আবশ্যক";
    if (!lastName.trim()) errs.lastName = "নামের শেষ অংশ আবশ্যক";
    if (!gender) errs.gender = "লিঙ্গ নির্বাচন করুন";
    if (!dob) errs.dob = "জন্ম তারিখ আবশ্যক";
    else {
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const isBeforeBirthday = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate());
      const actualAge = isBeforeBirthday ? age - 1 : age;
      if (actualAge < 18) errs.dob = "আপনার বয়স অন্তত ১৮ বছর হতে হবে";
    }
    return errs;
  }

  function validateStep2() {
    const errs = {};
    if (!email.trim()) errs.email = "ইমেইল আবশ্যক";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "সঠিক ইমেইল ঠিকানা দিন";
    if (!phone.trim()) errs.phone = "মোবাইল নম্বর আবশ্যক";
    else if (!/^(\+?88)?01[3-9]\d{8}$/.test(phone.replace(/\s/g, ""))) 
      errs.phone = "সঠিক বাংলাদেশি মোবাইল নম্বর দিন";
    if (!presentAddress.trim()) errs.presentAddress = "বর্তমান ঠিকানা আবশ্যক";
    if (!permanentAddress.trim()) errs.permanentAddress = "স্থায়ী ঠিকানা আবশ্যক";
    return errs;
  }

  function validateStep3() {
    const errs = {};
    if (!paymentMethod) errs.paymentMethod = "পেমেন্ট মেথড নির্বাচন করুন";
    if (!transactionNumber.trim()) errs.transactionNumber = "ট্রানজেকশন নম্বর আবশ্যক";
    return errs;
  }

  function handleNext() {
    setErrors({});
    let errs = {};
    
    if (step === 1) {
      errs = validateStep1();
    } else if (step === 2) {
      errs = validateStep2();
    }
    
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    
    setStep(step + 1);
  }

  function handleBack() {
    setErrors({});
    setStep(step - 1);
  }

  async function handleSubmit() {
    setErrors({});
    const errs = validateStep3();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      const formData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        gender,
        dob,
        email: email.trim(),
        phone: phone.trim(),
        presentAddress: presentAddress.trim(),
        permanentAddress: permanentAddress.trim(),
        paymentMethod,
        transactionNumber: transactionNumber.trim(),
      };

      console.log("Application submitted:", formData);
      
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setStep(1);
        setFirstName("");
        setLastName("");
        setGender("");
        setDob("");
        setEmail("");
        setPhone("");
        setPresentAddress("");
        setPermanentAddress("");
        setPaymentMethod("");
        setTransactionNumber("");
        onClose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "আবেদন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mx-4 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900">
             {job?.title || "এই পদের"} জন্য আবেদন করুন
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-slate-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 1 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                ১
              </div>
              <div className="mt-2 text-xs font-medium text-slate-700">ব্যক্তিগত তথ্য</div>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`} />
            <div className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 2 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                ২
              </div>
              <div className="mt-2 text-xs font-medium text-slate-700">যোগাযোগ</div>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`} />
            <div className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= 3 ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                ৩
              </div>
              <div className="mt-2 text-xs font-medium text-slate-700">পেমেন্ট</div>
            </div>
          </div>
        </div>

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
            আবেদন সফলভাবে জমা দেওয়া হয়েছে! 🎉
          </div>
        )}

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {errors.submit}
          </div>
        )}

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-slate-800 mb-4">ব্যক্তিগত তথ্য</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">নামের প্রথম অংশ *</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="নামের প্রথম অংশ"
                />
                {errors.firstName && <div className="mt-1 text-xs text-red-600">{errors.firstName}</div>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">নামের শেষ অংশ *</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="নামের শেষ অংশ"
                />
                {errors.lastName && <div className="mt-1 text-xs text-red-600">{errors.lastName}</div>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">লিঙ্গ *</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">লিঙ্গ নির্বাচন করুন</option>
                  <option value="male">পুরুষ</option>
                  <option value="female">মহিলা</option>
                  <option value="other">অন্যান্য</option>
                </select>
                {errors.gender && <div className="mt-1 text-xs text-red-600">{errors.gender}</div>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">জন্ম তারিখ * (কমপক্ষে ১৮ বছর)</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.dob && <div className="mt-1 text-xs text-red-600">{errors.dob}</div>}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-slate-800 mb-4">যোগাযোগের তথ্য</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">ইমেইল *</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
                {errors.email && <div className="mt-1 text-xs text-red-600">{errors.email}</div>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">মোবাইল নম্বর *</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="01XXXXXXXXX"
                />
                {errors.phone && <div className="mt-1 text-xs text-red-600">{errors.phone}</div>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">বর্তমান ঠিকানা *</label>
                <textarea
                  value={presentAddress}
                  onChange={(e) => setPresentAddress(e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="আপনার বর্তমান ঠিকানা"
                />
                {errors.presentAddress && <div className="mt-1 text-xs text-red-600">{errors.presentAddress}</div>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">স্থায়ী ঠিকানা *</label>
                <textarea
                  value={permanentAddress}
                  onChange={(e) => setPermanentAddress(e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="আপনার স্থায়ী ঠিকানা"
                />
                {errors.permanentAddress && <div className="mt-1 text-xs text-red-600">{errors.permanentAddress}</div>}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment Information */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-slate-800 mb-4">পেমেন্ট তথ্য</h4>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-700 mb-2"><strong>পেমেন্ট নির্দেশনা:</strong></p>
              <p className="text-sm text-slate-600">অনুগ্রহ করে নিচের যেকোনো নম্বরে আবেদন ফি পাঠান এবং ট্রানজেকশন নম্বরটি নিচে দিন:</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>বিকাশ:</strong> ০১৩১৮২১৪৩৯৮</p>
                <p><strong>নগদ:</strong> ০১৩১৮২১৪৩৯৮</p>
                <p><strong>রকেট:</strong> ০১৩১৮২১৪৩৯৮</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">পেমেন্ট মেথড *</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="bkash">বিকাশ</option>
                  <option value="nagad">নগদ</option>
                  <option value="rocket">রকেট</option>
                </select>
                {errors.paymentMethod && <div className="mt-1 text-xs text-red-600">{errors.paymentMethod}</div>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">ট্রানজেকশন নম্বর (TrxID) *</label>
                <input
                  value={transactionNumber}
                  onChange={(e) => setTransactionNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ট্রানজেকশন আইডি দিন"
                />
                {errors.transactionNumber && <div className="mt-1 text-xs text-red-600">{errors.transactionNumber}</div>}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={step === 1 ? onClose : handleBack}
            className="px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 font-medium"
          >
            {step === 1 ? 'বাতিল' : 'পেছনে'}
          </button>
          
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-blue-700"
            >
              পরবর্তী
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-blue-700 disabled:opacity-60"
            >
              {submitting ? "জমা হচ্ছে..." : "আবেদন জমা দিন"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}