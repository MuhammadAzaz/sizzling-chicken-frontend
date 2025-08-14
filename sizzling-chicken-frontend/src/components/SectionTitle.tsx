// ======================== src/components/SectionTitle.tsx ====================
import React from "react";

const SectionTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h2 className="text-center font-black mb-12" style={{ fontSize: "3rem", color: "#FF6B35", letterSpacing: 3, textTransform: "uppercase", textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
    {children}
  </h2>
);

export default SectionTitle;