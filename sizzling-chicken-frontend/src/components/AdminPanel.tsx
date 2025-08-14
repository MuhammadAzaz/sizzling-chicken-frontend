// Project: Sizzling Chicken – React + Tailwind (componentized, pixel-matched) – TypeScript Edition
// -----------------------------------------------------------------------------
// Paste these files into a fresh **Vite + React + TypeScript + Tailwind** project.
// Folder tree:
// src/
//   main.tsx
//   App.tsx
//   styles/theme.ts
//   types/index.ts
//   utils/format.ts
//   utils/deliveryDefaults.ts
//   utils/sound.ts
//   hooks/useSizzleParticles.ts
//   hooks/useScrollReveal.ts
//   components/
//     StyleBlock.tsx
//     Header.tsx
//     HeroTitle.tsx
//     DeliveryStatus.tsx
//     QuickStats.tsx
//     SectionTitle.tsx
//     MenuCategories.tsx
//     ItemsGrid.tsx
//     ItemCard.tsx
//     DealCard.tsx
//     Feature.tsx
//     CartSidebar.tsx
//     NotificationBar.tsx
//     CheckoutModal.tsx
//     AdminPanel.tsx





// =========================== src/components/AdminPanel.tsx ===================
import React, { useState } from "react";
import type { DeliverySettings } from "../types";

interface AdminPanelProps {
  delivery: DeliverySettings;
  onCancel: () => void;
  onSave: (next: DeliverySettings) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ delivery, onCancel, onSave }) => {
  const [form, setForm] = useState<DeliverySettings>(delivery);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (pw !== delivery.adminPassword) {
      setError("❌ Invalid admin password");
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.9)" }}>
      <div className="w-[90%] max-w-[600px] max-h-[80vh] overflow-y-auto rounded-[20px] p-10 border-[3px]" style={{ background: "white", borderColor: "#FF6B35" }}>
        <h2 className="text-center font-black uppercase tracking-wider mb-8" style={{ color: "#FF6B35" }}>🔧 Admin Panel</h2>

        <div className="mb-6">
          <label className="font-semibold block mb-2">Admin password</label>
          <input type="password" className="w-full p-3 rounded-md border-2" value={pw} onChange={(e) => setPw(e.target.value)} />
          {error && <div className="text-red-600 mt-2 font-semibold">{error}</div>}
        </div>

        <h3 className="font-bold mb-4">Delivery Settings</h3>
        <label className="flex items-center gap-2 font-semibold mb-4 cursor-pointer">
          <input type="checkbox" className="w-5 h-5" checked={form.isDeliveryActive} onChange={(e) => setForm({ ...form, isDeliveryActive: e.target.checked })} />
          <span>Enable Delivery Service</span>
        </label>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-semibold">Start Time</label>
            <input type="time" className="w-full p-3 rounded-md border-2" value={form.deliveryStartTime} onChange={(e) => setForm({ ...form, deliveryStartTime: e.target.value })} />
          </div>
          <div>
            <label className="block mb-1 font-semibold">End Time</label>
            <input type="time" className="w-full p-3 rounded-md border-2" value={form.deliveryEndTime} onChange={(e) => setForm({ ...form, deliveryEndTime: e.target.value })} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-semibold">Delivery Fee ($)</label>
            <input type="number" className="w-full p-3 rounded-md border-2" step="0.01" min={0} value={form.deliveryFee} onChange={(e) => setForm({ ...form, deliveryFee: parseFloat(e.target.value || "0") })} />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Min Order ($)</label>
            <input type="number" className="w-full p-3 rounded-md border-2" step="0.01" min={0} value={form.minOrderForDelivery} onChange={(e) => setForm({ ...form, minOrderForDelivery: parseFloat(e.target.value || "0") })} />
          </div>
        </div>

        <div className="rounded-md p-4 mb-6" style={{ background: "#f8f9fa" }}>
          <strong>Current Status:</strong>{" "}
          {form.isDeliveryActive ? (
            <span className="text-green-600">🟢 Delivery Active</span>
          ) : (
            <span className="text-red-600">🔴 Takeaway Only</span>
          )}
        </div>

        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 p-3 rounded-[25px] border-2 font-semibold">Cancel</button>
          <button onClick={submit} className="flex-[2] p-3 rounded-[25px] font-semibold text-white" style={{ background: "linear-gradient(45deg,#FF6B35,#F7931E)" }}>Save Settings</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;