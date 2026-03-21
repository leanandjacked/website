import Link from "next/link";
//import SocialProofBanner from "./SocialProofBanner";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="py-16 md:py-20 text-center"
      style={{ background: "var(--black)" }}
    >
      <div className="content-wrap px-4 md:px-0">
        <p className="section-label mb-2 md:mb-3">Real Transformation. Real Results.</p>

        <h1
          className="bebas mb-5 md:mb-6 text-[2.8rem] md:text-[4.5rem] leading-none uppercase"
          style={{ letterSpacing: "0.02em", color: "#fff" }}
        >
          How Did This Engineering Student Lose{" "}
          <span style={{ color: "var(--orange)" }}>36 Kilos</span>{" "}
          While Studying 12 Hours A Day?
        </h1>

        <p
          className="text-[14px] md:text-[16px] leading-relaxed mb-8 mx-auto font-montserrat max-w-[520px]"
          style={{ color: "var(--grey)" }}
        >
          The exact fat loss system behind his transformation now available
          as a step-by-step blueprint for ₹999.
        </p>

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

        <Link href="#buy" className="btn-orange w-full mx-auto max-w-[540px] flex items-center justify-center gap-2">
          Get Instant Access for ₹999 <ArrowRight className="w-5 h-5" />
        </Link>
        {/*<SocialProofBanner />*/}

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-6 text-[11px] md:text-[12px] text-white/60 font-montserrat max-w-[500px] mx-auto">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> Secure Payment via Razorpay</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> Instant Access</span>
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500" /> 7-Day Guarantee</span>
        </div>
      </div>
    </section>
  );
}
