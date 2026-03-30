import { Check, Zap } from "lucide-react";
import RazorpayButton from "./RazorpayButton";

export default function Hero() {
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

        {/* Video Sales Letter Placeholder */}
        <div className="w-full aspect-[16/9] max-w-[800px] mx-auto mb-8 rounded-xl overflow-hidden border border-[#333] shadow-[0_0_40px_rgba(255,107,0,0.15)] bg-black">
          <video
            src="/vsl-placeholder.mp4"
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="/og-image.jpg"
          >
            Your browser does not support the video tag.
          </video>
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
