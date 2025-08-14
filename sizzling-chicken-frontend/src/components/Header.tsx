// ============================ src/components/Header.tsx ======================
import React from "react";
import { orderBtn } from "../styles/theme";

interface HeaderProps {
  onOpenAdmin: () => void;
  onToggleCart: () => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onOpenAdmin, onToggleCart, cartCount }) => (
  <header className="sticky top-0 z-[1000] border-b-[3px]" style={{ background: "rgba(0,0,0,0.8)", borderColor: "#FF6B35", backdropFilter: "blur(10px)" }}>
    <nav className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-5">
      <div className="flex items-center gap-2 text-[2.2rem] font-black" style={{ color: "#FF6B35", textShadow: "0 0 20px rgba(255,107,53,0.5)" }}>
        <span className="text-[2.5rem] animate-bounce">🔥</span>
        <span>SIZZLING CHICKEN</span>
      </div>
      <ul className="hidden md:flex gap-6 text-white font-bold text-[1.1rem] uppercase tracking-wider">
        <li><a className="px-4 py-2 rounded-full" href="#menu">Menu</a></li>
        <li><a className="px-4 py-2 rounded-full" href="#deals">Deals</a></li>
        <li><a className="px-4 py-2 rounded-full" href="#about">About</a></li>
        <li><a className="px-4 py-2 rounded-full" href="#contact">Contact</a></li>
        <li><button onClick={onOpenAdmin} className="px-4 py-2 rounded-full" style={{ color: "#FFD23F" }}>Admin</button></li>
      </ul>
      <button onClick={onToggleCart} className="order-btn px-7 py-3 font-black text-white rounded-full uppercase tracking-wider shadow-lg" style={orderBtn}>
        🛒 Order Now (<span>{cartCount}</span>)
      </button>
    </nav>
  </header>
);

export default Header;