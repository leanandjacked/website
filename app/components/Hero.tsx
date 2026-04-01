"use client";

import { useState } from "react";
import { Check, Zap, Play } from "lucide-react";
import RazorpayButton from "./RazorpayButton";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section
      className="py-16 md:py-20 text-center"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">
          LEAN & JACKED BY ZAID
          <br />
          <span style={{ color: "var(--grey)", fontSize: "12px" }}>Maximum Results. Minimum Time. Zero Cardio.</span>
        </p>
        <p className="text-[11px] md:text-[12px] text-orange-500 font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
          <Zap className="w-3.5 h-3.5 fill-current" /> PRE-LAUNCH OFFER | ₹999 LAUNCH PRICE ENDS 30 APRIL 2026
        </p>

        <h1
          className="bebas mb-5 md:mb-6 text-[2.8rem] md:text-[4.5rem] leading-none uppercase"
          style={{ letterSpacing: "0.02em", color: "#fff" }}
        >
          How Did This Engineering Student Lose{" "}
          <span style={{ color: "var(--orange)" }}>36 Kilos</span>{" "}
          While Studying 12 Hours a Day?
        </h1>

        <p
          className="text-[14px] md:text-[16px] leading-relaxed mb-8 mx-auto font-montserrat max-w-[520px]"
          style={{ color: "var(--grey)" }}
        >
          The exact system behind his transformation now available as the complete 90-Day Lean & Jacked Transformation Package for ₹999.
        </p>

        <div className="flex justify-center gap-6 mb-8 text-[12px] md:text-[14px] font-bebas tracking-wide" style={{ color: "var(--grey)" }}>
          <div className="text-center">
            <div className="text-[18px] md:text-[24px]" style={{ color: "var(--orange)" }}>&lt; 3 HRS</div>
            PER WEEK
          </div>
          <div className="text-center">
            <div className="text-[18px] md:text-[24px]" style={{ color: "var(--orange)" }}>50+</div>
            CLIENTS TRANSFORMED
          </div>
          <div className="text-center">
            <div className="text-[18px] md:text-[24px]" style={{ color: "var(--orange)" }}>0</div>
            CARDIO REQUIRED
          </div>
          <div className="text-center">
            <div className="text-[18px] md:text-[24px]" style={{ color: "var(--orange)" }}>₹11</div>
            PER DAY
          </div>
        </div>

        {/* Custom Video Player with Aesthetic Overlay */}
        <div className="w-full aspect-[9/16] max-w-[400px] md:max-w-[460px] mx-auto mb-8 rounded-xl overflow-hidden border border-[#333] shadow-[0_0_40px_rgba(255,107,0,0.15)] bg-black relative group">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail Image */}
              <img 
                src="https://i.ytimg.com/vi/rre1yl_-yxo/hqdefault.jpg" 
                alt="Transformation Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Play Button Overlay */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500/30 transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.4)]">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center pl-1">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/rre1yl_-yxo?autoplay=1&loop=1&playlist=rre1yl_-yxo&rel=0&modestbranding=1&vq=hd1080"
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Lean & Jacked Video Sales Letter"
            ></iframe>
          )}
        </div>

        <div className="w-full mx-auto max-w-[300px] flex items-center justify-center">
          <RazorpayButton />
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-6 text-[11px] md:text-[12px] text-white/60 font-montserrat max-w-[500px] mx-auto">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> Secure Payment via Razorpay</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> Instant Access</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> 7-Day Guarantee</span>
        </div>
      </div>
    </section>
  );
}
