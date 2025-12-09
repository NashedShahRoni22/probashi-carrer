import { Noto_Sans_Bengali } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// Noto Sans Bengali is the best font for Bengali with complete numeral support
const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ['latin', 'bengali'],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
})

export const metadata = {
  title: "প্রবাসীCareer",
  description: "আপনার স্বপ্নের বিদেশি চাকরির সেরা গেটওয়ে - প্রবাসীCareer। বিশ্বস্ত রিক্রুটমেন্ট এজেন্সি, ভেরিফাইড এমপ্লয়ার, এবং সম্পূর্ণ ভিসা সাপোর্ট সহ। আজই রেজিস্টার করুন এবং আপনার ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যান!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable}`}>
      <body className='antialiased font-noto'>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}