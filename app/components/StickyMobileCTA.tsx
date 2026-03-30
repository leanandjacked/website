"use client";
import React, { useEffect, useState } from "react";
import RazorpayButton from "./RazorpayButton";

export default function StickyMobileCTA() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full px-4 pt-8 pb-4 bg-gradient-to-t from-black via-black/95 to-transparent z-[90] flex justify-center items-end pointer-events-none">
      <div className="w-full max-w-[340px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] min-h-[44px] mb-1 pointer-events-auto rounded-xl flex items-center justify-center">
        <RazorpayButton />
      </div>
    </div>
  );
}
