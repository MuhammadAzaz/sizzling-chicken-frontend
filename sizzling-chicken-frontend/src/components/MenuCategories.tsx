import React from "react";
import type { CSSProperties } from "react";

interface Category {
  key: string;
  icon: string;
  title: string;
}

interface MenuCategoriesProps {
  categories: Category[];
  selected: string;
  onSelect: (key: string) => void;
}

// Optional: keep theme cohesion with a subtle orange ring on active
const activeStyle: CSSProperties = {
  background: "linear-gradient(135deg,#FF6B35,#F7931E)",
  color: "white",
  boxShadow: "0 8px 20px rgba(255,107,53,0.35)",
};

const inactiveStyle: CSSProperties = {
  background: "white",
  color: "#333",
  border: "2px solid rgba(255,107,53,0.35)",
};

const MenuCategories: React.FC<MenuCategoriesProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <div className="relative">
      {/* Horizontal scroll container */}
      <div
        className="flex gap-3 overflow-x-auto pb-3 pt-1"
        style={{ scrollSnapType: "x proximity" }}
      >
        {categories.map((c) => {
          const isActive = selected === c.key;
          return (
            <button
              key={c.key}
              onClick={() => onSelect(c.key)}
              className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap shrink-0 select-none will-change-transform"
              style={isActive ? activeStyle : inactiveStyle}
            >
              <span className="text-xl">{c.icon}</span>
              <span className="text-sm font-extrabold uppercase tracking-wider">
                {c.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* subtle divider to match existing card style */}
      <div className="h-px w-full bg-orange-200/60 my-4" />
    </div>
  );
};

export default MenuCategories;