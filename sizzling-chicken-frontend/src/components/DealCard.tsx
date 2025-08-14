// ============================ src/components/DealCard.tsx ====================
import React from "react";
import type { CSSProperties } from "react";
import { currency } from "../utils/format";

interface DealCardProps {
  badge?: string;
  badgeStyle?: CSSProperties;
  borderStyle?: CSSProperties;
  icon: string;
  title: string;
  price: number;
  crossed?: number;
  cta: string;
  onAdd: (name: string, price: number) => void;
  itemImage: CSSProperties;
  itemImageGlow: CSSProperties;
  addBtn: CSSProperties;
}

const DealCard: React.FC<DealCardProps> = ({ badge, badgeStyle, borderStyle, icon, title, price, crossed, cta, onAdd, itemImage, itemImageGlow, addBtn }) => (
  <div className="rounded-[25px] overflow-hidden border-[3px] relative cursor-pointer"
       style={{ background: "white", ...(borderStyle || {}) }} onClick={() => onAdd(title, price)}
  >
    {badge && (
      <div className="absolute -top-2 -right-2 px-3 py-2 rounded-[20px] font-black text-[0.9rem] rotate-12" style={badgeStyle}>
        {badge}
      </div>
    )}
    <div className="h-[220px] flex items-center justify-center text-[5rem] relative" style={itemImage}>
      <div className="absolute inset-0" style={itemImageGlow} />
      {icon}
    </div>
    <div className="p-7">
      <h4 className="text-[1.5rem] font-black tracking-wider uppercase mb-2 text-[#333]">{title}</h4>
      <p className="text-[#666] font-medium leading-relaxed mb-5">{title === "Mega Monday Deal" ? "2 burgers + 2 sides + 2 drinks. Perfect for sharing!" : "Chicken burger + fries + drink with valid student ID"}</p>
      <div className="flex items-center justify-between">
        <div>
          {typeof crossed === "number" && <span className="line-through text-[#999] text-[1.2rem] mr-2">{currency(crossed)}</span>}
          <span className="text-[2rem] font-black" style={{ color: "#FF6B35" }}>{currency(price)}</span>
        </div>
        <button className="px-5 py-3 rounded-[25px] font-black uppercase tracking-wider" style={addBtn} onClick={(e) => { e.stopPropagation(); onAdd(title, price); }}>{cta}</button>
      </div>
    </div>
  </div>
);

export default DealCard;