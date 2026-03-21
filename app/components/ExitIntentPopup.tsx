"use client";
import React, { useState, useEffect } from "react";
import { X, Flame, ShieldCheck, ArrowRight, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="w-full max-w-lg bg-[#0A0A0A] border-2 border-orange-500 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,107,0,0.4)] relative"
        style={{ animation: 'scale-up 0.4s ease-out' }}
      >
        {/* Style for animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scale-up {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}} />

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10 text-center">
          <div className="w-20 h-20 bg-orange-500/15 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 animate-bounce">
            <Gift className="w-10 h-10" />
          </div>

          <h2 className="bebas text-[2.5rem] md:text-[3.5rem] text-white leading-none mb-3 tracking-wider">
            Wait! Don&apos;t <span className="text-orange-500">Miss Out</span>
          </h2>
          
          <p className="font-montserrat text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
            You&apos;re only one click away from the same system that helped 100+ clients transform their bodies at home.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: <Flame className="w-4 h-4" />, text: "Zero Steroids. Zero Crash Dieting." },
              { icon: <ShieldCheck className="w-4 h-4" />, text: "7-Day 100% Refund Guarantee." },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-white font-montserrat font-bold text-xs uppercase tracking-widest bg-zinc-900/50 py-3 px-4 rounded-xl border border-zinc-800/50">
                <span className="text-orange-500">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <a
            href="#buy"
            onClick={() => setIsVisible(false)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-black text-lg md:text-xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(255,107,0,0.3)] hover:-translate-y-1 active:scale-[0.98]"
          >
            Claim My Copy Now ₹999 <ArrowRight className="w-6 h-6" />
          </a>

          <button
            onClick={() => setIsVisible(false)}
            className="mt-6 text-zinc-600 text-[10px] font-bold uppercase tracking-[2px] hover:text-zinc-400 transition-colors"
          >
            No thanks, I&apos;m not ready to change yet
          </button>
        </div>
      </div>
    </div>
  );
}
