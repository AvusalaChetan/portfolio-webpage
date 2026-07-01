import React from "react";

const Bage = ({ text }) => {
  return (
    <div
      className="inline-flex items-center gap-2 mb-2 uppercase tracking-widest"
      style={{
        background: "var(--accent-dim)",
        border: "1px solid rgba(201,146,42,0.3)",
        borderRadius: "var(--radius-full)",
        padding: "4px 14px",
        fontSize: "11px",
        color: "var(--accent)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: "var(--green)", animation: "pulse 2s infinite" }}
      />
      {text}
    </div>
  );
};

export const SqureBage = ({ children ,className}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 mb-2  tracking-widest ${className}`}
      style={{
        padding: "4px 14px",
        fontSize: "11px",
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </div>
  );
};

export default Bage;
