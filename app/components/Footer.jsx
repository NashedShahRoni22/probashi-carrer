import Link from "next/link";
import { Home, Briefcase, Globe, Info, Phone, Menu, X } from "lucide-react";

export default function Footer() {
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/jobs", label: "Jobs", icon: Briefcase },
    { href: "/countries", label: "Countries", icon: Globe },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/about", label: "About Us", icon: Info },
  ];
  return (
    <footer className="hidden lg:block w-full bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between gap-6">
          {/* logo and description */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              PC
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">
                প্রবাসীCareer
              </div>
              <div className="text-sm text-slate-600">
                Connecting talent with opportunity worldwide
              </div>
            </div>
          </div>

          {/* links section */}
          <div className="text-sm text-slate-600 flex items-center gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-600 flex gap-2"
                >
                  <Icon size={18} strokeWidth={2} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-600 text-center py-6">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">প্রবাসীCareer</span> All rights
        reserved.
      </p>
    </footer>
  );
}
