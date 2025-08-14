// ========================== src/components/HeroTitle.tsx =====================
import React from "react";
import type { CSSProperties } from "react";

interface HeroTitleProps { titleStyle: CSSProperties }

const HeroTitle: React.FC<HeroTitleProps> = ({ titleStyle }) => (
  <>
    <h1 className="text-center font-black mb-3" style={titleStyle}>Sizzling Chicken</h1>
    <p className="text-center font-black mb-10 uppercase tracking-wider" style={{ fontSize: "1.8rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Hot • Fast • Irresistible</p>
  </>
);

export default HeroTitle;