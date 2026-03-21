"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [mounted, setMounted] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPct(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[60] bg-transparent pointer-events-none">
      <div 
        className="h-full shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-150 ease-out"
        style={{ width: `${scrollPct}%`, background: "var(--orange)" }}
      />
    </div>
  );
}
