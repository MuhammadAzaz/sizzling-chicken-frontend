// ============================ src/components/ItemCard.tsx ====================
import React from "react";
import type { CSSProperties } from "react";
import { currency } from "../utils/format";

interface ItemCardProps {
  icon: string;
  title: string;
  price: number;
  desc: string;
  onAdd: (name: string, price: number) => void;
  itemImage: CSSProperties;
  itemImageGlow: CSSProperties;
  addBtn: CSSProperties;
}

const ItemCard: React.FC<ItemCardProps> = ({ icon, title, price, desc, onAdd, itemImage, itemImageGlow, addBtn }) => (
  <div className="rounded-[25px] overflow-hidden border-[3px] cursor-pointer will-change-transform"
       style={{ background: "white", borderColor: "transparent", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}
       onClick={() => onAdd(title, price)}
  >
    <div className="h-[220px] flex items-center justify-center text-[5rem] relative" style={itemImage}>
      <div className="absolute inset-0" style={itemImageGlow} />
      {icon}
    </div>
    <div className="p-7">
      <h4 className="text-[1.5rem] font-black tracking-wider uppercase mb-2 text-[#333]">{title}</h4>
      <p className="text-[#666] font-medium leading-relaxed mb-5">{desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-[2rem] font-black" style={{ color: "#FF6B35", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>{currency(price)}</span>
        <button className="px-5 py-3 rounded-[25px] font-black uppercase tracking-wider" style={addBtn} onClick={(e) => { e.stopPropagation(); onAdd(title, price); }}>Add to Cart</button>
      </div>
    </div>
  </div>
);

export default ItemCard;