"use client";
import React, { useState, useRef, useEffect } from "react";
import { X, Play, Volume2, VolumeX, ShoppingCart } from "lucide-react";

export default function VslBubble() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setIsMuted(false);
    }
  };

  const closeBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-24 right-6 md:bottom-6 md:right-6 z-[100] transition-all duration-500 ease-in-out ${
        isExpanded ? "w-[320px] h-[520px] rounded-2xl" : "w-20 h-20 md:w-24 md:h-24 rounded-full"
      } bg-zinc-900 border-2 border-orange-500 shadow-[0_0_30px_rgba(255,107,0,0.3)] overflow-hidden cursor-pointer`}
      onClick={toggleExpand}
    >
      {/* Video Container */}
      <div className="relative w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/vsl-placeholder.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Mute/Play indicators for mini mode */}
        {!isExpanded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group hover:bg-black/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center animate-pulse">
              <Play className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        )}

        {/* Close button */}
        {!isExpanded && (
          <button
            onClick={closeBubble}
            className="absolute -top-1 -right-1 p-1 bg-zinc-800 rounded-full border border-zinc-700 text-zinc-400 hover:text-white z-10"
          >
            <X className="w-3 h-3" />
          </button>
        )}

        {/* Expanded UI */}
        {isExpanded && (
          <>
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
              <div className="bebas text-2xl text-white mb-1 tracking-wider">
                Transformation Blueprint
              </div>
              <p className="text-[11px] text-zinc-400 font-montserrat mb-4 leading-relaxed">
                Watch how I helped 100+ clients lose fat and build muscle with simple Indian home food.
              </p>
              
              <div className="flex gap-2">
                <a
                  href="#buy"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4" /> Get It Now
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-white border border-zinc-700 hover:bg-zinc-700"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Intro hint pulse */}
      {!isExpanded && (
        <div className="absolute -bottom-2 -left-2 bg-orange-500 text-[10px] font-bold px-2 py-1 rounded-full text-white shadow-lg pointer-events-none">
          Live Talk ⚡
        </div>
      )}
    </div>
  );
}
