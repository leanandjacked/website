import React from 'react';

export default function VuceBanner() {
  return (
    <a
      href="https://vuce.in"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "11px",
        color: "#888",
        fontFamily: "Montserrat, sans-serif",
        letterSpacing: "0.5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        margin: "0 auto",
        padding: "8px 16px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "9999px",
        width: "fit-content",
        textDecoration: "none",
        transition: "all 0.2s ease"
      }}
      className="group hover:bg-[rgba(255,255,255,0.08)]"
    >
      <span className="group-hover:text-white transition-colors duration-200">Built with love at</span>
      <span
        style={{
          color: "#aaa",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontWeight: 600
        }}
        className="group-hover:text-white transition-colors duration-200"
      >
        <img
          src="https://vuce.in/logo.png"
          alt="Vuce Logo"
          style={{
            height: "14px",
            width: "auto",
            transition: "all 0.2s ease"
          }}
          className="brightness-0 invert-[0.7] group-hover:invert-100"
        />
        Vuce
      </span>
    </a>
  );
}
