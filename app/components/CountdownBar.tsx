"use client";
import React, { useState, useEffect } from "react";

export default function CountdownBar() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    // Reset daily using localStorage
    const getTargetTime = () => {
      const storedDate = localStorage.getItem("offerEndTime");
      if (storedDate) {
        const time = parseInt(storedDate, 10);
        if (time > Date.now()) return time;
      }
      const newTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("offerEndTime", newTime.toString());
      return newTime;
    };

    const targetTime = getTargetTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);
      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !timeLeft) return <div className="h-8 md:h-10 w-full" style={{ background: "var(--orange)" }}></div>;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="text-black py-2.5 px-4 text-center font-montserrat flex items-center justify-center gap-2 sticky top-0 w-full z-50 shadow-md transition-all" style={{ background: "var(--orange)" }}>
      <p className="text-[12px] md:text-[14px] font-bold text-white tracking-wide uppercase m-0 leading-none flex items-center gap-2">
        ⚡ Launch Offer Ends In:{" "}
        <span className="font-mono bg-black/20 px-1.5 py-1 rounded inline-block min-w-[64px] text-center">
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
      </p>
    </div>
  );
}
