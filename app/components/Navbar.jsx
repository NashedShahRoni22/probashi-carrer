"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Globe, Info, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/countries", label: "Countries", icon: Globe },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/about", label: "About Us", icon: Info },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`
          hidden lg:block
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image src={logo} alt="ProbasiCareer Logo" height={100} />
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-50 text-primary"
                          : "text-slate-700 hover:bg-slate-100"
                      }
                    `}
                  >
                    <Icon size={18} strokeWidth={2} />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/jobs"
              className="
                px-5 py-2.5 rounded-lg
                bg-primary hover:bg-blue-700
                text-white text-sm font-semibold
                transition-colors duration-200
                shadow-sm hover:shadow-md
              "
            >
              Job Portal
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav
        className={`
          lg:hidden
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 bg-white backdrop-blur-md shadow-md
        `}
      >
        <div className="flex items-center justify-between px-4 h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="logo" height={60} />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-slate-700" />
            ) : (
              <Menu size={24} className="text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`
          lg:hidden fixed top-16 right-0 bottom-0 w-72 z-40
          bg-white
          shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      text-sm font-medium transition-all duration-200
                      ${
                        isActive
                            ? "bg-blue-50 text-primary"
                              : "text-slate-700 hover:bg-slate-100"
                      }
                    `}
                  >
                    <Icon size={20} strokeWidth={2} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-200 p-4">
            <Link
              href="/jobs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                flex items-center justify-center gap-2
                w-full px-4 py-3 rounded-lg
                bg-primary hover:bg-blue-700
                text-white text-sm font-semibold
                transition-colors duration-200
              "
            >
              <Briefcase size={18} />
              Job Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className="
          md:hidden
          fixed bottom-0 left-0 right-0 z-30
          bg-white/95
          backdrop-blur-md
          border-t border-slate-200
          shadow-[0_-2px_10px_rgba(0,0,0,0.05)]
        "
      >
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-1 px-3 py-2 rounded-lg
                  transition-all duration-200 min-w-[70px]
                  ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600"
                  }
                `}
              >
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 2}
                  className="transition-all duration-200"
                />
                <span
                  className={`text-xs font-medium ${
                    isActive ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacers */}
      <div className="h-16"></div>
    </>
  );
}
