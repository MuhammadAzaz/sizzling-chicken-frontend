// =========================== src/components/StyleBlock.tsx ===================
import React from "react";
const StyleBlock: React.FC = () => (
  <style>{`
      @keyframes flicker { 0%{opacity:.05} 100%{opacity:.15} }
      @keyframes pulse { 0%{box-shadow:0 5px 20px rgba(255,107,53,.4)} 50%{box-shadow:0 5px 30px rgba(255,107,53,.8)} 100%{box-shadow:0 5px 20px rgba(255,107,53,.4)} }
      @keyframes float { 0%{transform:translateX(0)} 100%{transform:translateX(-100px)} }
      @keyframes textGlow { from{ text-shadow:3px 3px 0px #000, 0 0 30px rgba(255,107,53,.8) } to{ text-shadow:3px 3px 0px #000, 0 0 50px rgba(255,107,53,1) } }
      @keyframes shimmer { 0%,100%{opacity:0} 50%{opacity:1} }
      @keyframes sizzle { 0%{opacity:1; transform:translateY(0) scale(1)} 100%{opacity:0; transform:translateY(-100px) scale(.3)} }
      @keyframes fadeInUp { from{opacity:0; transform:translateY(30px)} to{opacity:1; transform:translateY(0)} }
      @keyframes bannerPulse { 0%,100%{ background: linear-gradient(45deg,#dc3545,#fd7e14) } 50%{ background: linear-gradient(45deg,#fd7e14,#dc3545) } }
    `}</style>
);
export default StyleBlock;