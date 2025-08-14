// ======================== src/components/CartSidebar.tsx =====================
import React from "react";
import { currency } from "../utils/format";
import type { CartItem } from "../types";

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onRemove: (index: number) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ open, onClose, items, total, onRemove, onCheckout }) => (
  <div className="fixed top-0 h-screen z-[2000] transition-all" style={{ right: open ? 0 : -450, width: 450 }}>
    <div className="h-full p-7 text-white overflow-y-auto shadow-2xl" style={{ background: "linear-gradient(135deg,#FF6B35,#F7931E)", boxShadow: "-15px 0 40px rgba(0,0,0,0.3)" }}>
      <div className="flex items-center justify-between pb-5 mb-5 border-b-2 border-white/30">
        <h3 className="text-[2rem] font-black uppercase tracking-wider">Your Order</h3>
        <button className="w-10 h-10 rounded-full font-black text-xl" style={{ background: "rgba(255,255,255,0.2)" }} onClick={onClose}>×</button>
      </div>

      {items.length === 0 ? (
        <p className="text-center my-12 opacity-80">Your cart is empty<br />🍗 Add some sizzling chicken!</p>
      ) : (
        items.map((it, idx) => (
          <div key={idx} className="flex items-center justify-between py-5 border-b border-white/20">
            <div>
              <h5 className="font-black uppercase">{it.name}</h5>
              <div className="font-bold opacity-90">{currency(it.price)}</div>
            </div>
            <button className="w-9 h-9 rounded-full font-black text-lg" style={{ background: "rgba(255,255,255,0.2)" }} onClick={() => onRemove(idx)}>×</button>
          </div>
        ))
      )}

      <div className="text-center pt-5 mt-5 border-t-2 border-white/30">
        <div className="text-[2.5rem] font-black mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>{currency(total)}</div>
        <button className="w-full py-4 rounded-[30px] font-black uppercase tracking-wider border-[3px]" style={{ background: "rgba(0,0,0,0.8)", color: "white", borderColor: "white" }} onClick={onCheckout}>
          Place Order
        </button>
      </div>
    </div>
  </div>
);

export default CartSidebar;