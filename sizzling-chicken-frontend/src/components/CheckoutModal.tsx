// ========================= src/components/CheckoutModal.tsx ==================
import React from "react";
import { currency } from "../utils/format";
import type { CartItem } from "../types";

interface CheckoutModalProps {
  items: CartItem[];
  total: number;
  onCancel: () => void;
  onConfirm: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ items, total, onCancel, onConfirm }) => (
  <div className="fixed inset-0 z-[4000] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.9)" }}>
    <div className="w-[90%] max-w-[500px] max-h-[80vh] overflow-y-auto rounded-[30px] p-10 text-white border-[3px]" style={{ background: "linear-gradient(135deg,#FF6B35,#F7931E)", borderColor: "#FFD23F", transform: "scale(1)", transition: "transform .3s" }}>
      <h2 className="text-center font-black uppercase tracking-wider mb-8">🔥 Complete Your Order</h2>

      <div className="mb-7 rounded-[15px] p-5" style={{ background: "rgba(0,0,0,0.3)" }}>
        <h3 className="font-black mb-3">Order Summary</h3>
        {items.map((it, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span className="font-semibold">{it.name}</span>
            <span className="font-black">{currency(it.price)}</span>
          </div>
        ))}
        <hr className="my-4 border-white/30" />
        <div className="flex justify-between text-[1.4rem] font-black">
          <span>Total</span>
          <span>{currency(total)}</span>
        </div>
      </div>

      <form className="mb-7">
        <label className="block font-black uppercase mb-2">📍 Delivery Address</label>
        <input className="w-full p-4 rounded-[10px] mb-2 text-black font-semibold" placeholder="Street Address" required />
        <input className="w-full p-4 rounded-[10px] text-black font-semibold" placeholder="City, State, ZIP" required />

        <div className="mt-5">
          <label className="block font-black uppercase mb-2">📱 Phone Number</label>
          <input className="w-full p-4 rounded-[10px] text-black font-semibold" placeholder="(555) 123-4567" required />
        </div>

        <div className="mt-5">
          <label className="block font-black uppercase mb-2">💳 Payment Method</label>
          <select className="w-full p-4 rounded-[10px] text-black font-semibold" required>
            <option value="">Select Payment Method</option>
            <option value="card">Credit/Debit Card</option>
            <option value="cash">Cash on Delivery</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div className="mt-5">
          <label className="block font-black uppercase mb-2">🌶️ Spice Level</label>
          <select className="w-full p-4 rounded-[10px] text-black font-semibold" defaultValue="medium">
            <option value="mild">😌 Mild</option>
            <option value="medium">🔥 Medium</option>
            <option value="hot">🌶️ Hot</option>
            <option value="extra-hot">🌋 Extra Hot</option>
          </select>
        </div>

        <div className="mt-5">
          <label className="block font-black uppercase mb-2">📝 Special Instructions</label>
          <textarea className="w-full p-4 rounded-[10px] h-20 resize-y text-black font-semibold" placeholder="Any special requests? (extra crispy, no pickles, etc.)" />
        </div>
      </form>

      <div className="flex gap-4">
        <button onClick={onCancel} className="flex-1 py-4 rounded-[25px] font-black uppercase tracking-wider border-[3px]" style={{ background: "transparent", color: "white", borderColor: "white" }}>Cancel</button>
        <button onClick={onConfirm} className="flex-[2] py-4 rounded-[25px] font-black uppercase tracking-wider border-[3px]" style={{ background: "rgba(0,0,0,0.8)", color: "white", borderColor: "white" }}>🔥 Place Order</button>
      </div>
    </div>
  </div>
);

export default CheckoutModal;