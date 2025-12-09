"use client";

import Marquee from "react-fast-marquee";

export default function AnimatedHeadline() {
  return (
    <div className="text-2xl md:text-4xl font-bold text-primary leading-snug">
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-3">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}
