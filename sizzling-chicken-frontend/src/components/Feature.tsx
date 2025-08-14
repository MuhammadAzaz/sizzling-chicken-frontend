// =========================== src/components/Feature.tsx ======================
import React from "react";

interface FeatureProps { icon: string; title: string; text: string }

const Feature: React.FC<FeatureProps> = ({ icon, title, text }) => (
  <div className="rounded-[25px] border-2 p-10 will-change-transform" style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.1), rgba(247,147,30,0.1))", borderColor: "rgba(255,107,53,0.2)" }}>
    <div className="text-[3.5rem] mb-6" style={{ color: "#FF6B35", filter: "drop-shadow(0 3px 6px rgba(255,107,53,0.3))" }}>{icon}</div>
    <h4 className="text-[1.5rem] font-black tracking-wider uppercase mb-2 text-[#333]">{title}</h4>
    <p className="text-[#666] font-medium leading-relaxed">{text}</p>
  </div>
);

export default Feature;