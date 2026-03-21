"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ExitIntentModal() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Desktop exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        triggerModal();
      }
    };

    // Fast scroll up / Mobile pseudo exit
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (lastScrollY - scrollY > 150 && scrollY < 500 && !hasTriggered) {
        // Fast scroll up near the top
        triggerModal();
      }
      lastScrollY = scrollY;
    };

    // Don't trigger if already closed
    if (typeof window !== 'undefined' && localStorage.getItem("exitIntentClosed")) {
      setHasTriggered(true);
      return;
    }

    // Add slight delay before activating listeners so it doesn't trigger immediately
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasTriggered]);

  const triggerModal = () => {
    setIsVisible(true);
    setHasTriggered(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    localStorage.setItem("exitIntentClosed", "true");
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#111] border border-[#333] rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(255,107,0,0.15)] text-center transition-all scale-100 opacity-100">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          ✕
        </button>
        
        <div className="text-[3rem] mb-2">🛑</div>
        <h2 className="bebas text-[2.5rem] tracking-wider text-white mb-2 leading-none">
          WAIT! Before you leave…
        </h2>
        <p className="font-montserrat text-[13px] md:text-[14px] text-gray-400 mb-6">
          Don't leave empty handed. Here's a special one-time offer just for you.
        </p>

        <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333] mb-6">
          <p className="text-orange-500 font-bold font-montserrat text-[14px] md:text-[15px] mb-1">
            Unlock Instant ₹200 Discount
          </p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="text-gray-500 line-through text-[18px] font-montserrat">₹999</span>
            <span className="bebas text-[2.5rem] tracking-widest text-white leading-none">₹799</span>
          </div>
        </div>

        <Link 
          href="#buy" 
          onClick={closeModal}
          className="btn-orange w-full text-[14px] md:text-[15px] py-4 shadow-[0_4px_20px_rgba(255,107,0,0.3)]"
        >
          Claim My Discount Now →
        </Link>
        
        <button 
          onClick={closeModal}
          className="mt-5 text-[11px] md:text-[12px] font-montserrat text-gray-500 underline hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
        >
          No thanks, I'll pass on this offer
        </button>
      </div>
    </div>
  );
}
