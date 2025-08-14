// ======================== src/hooks/useSizzleParticles.ts ====================
import { useEffect } from "react";
export default function useSizzleParticles(): void {
  useEffect(() => {
    const hero = document.querySelector("section.relative");
    if (!hero) return;
    const id = window.setInterval(() => {
      const particle = document.createElement("div");
      particle.className = "sizzle-particle";
      particle.style.left = Math.random() * 100 + "%";
      (particle.style as any).animationDelay = Math.random() * 2 + "s";
      Object.assign(particle.style, {
        position: "absolute",
        width: "4px",
        height: "4px",
        background: "#FFD700",
        borderRadius: "50%",
        pointerEvents: "none",
        boxShadow: "0 0 6px #FFD700",
        animation: "sizzle 3s infinite",
      } as CSSStyleDeclaration);
      hero.appendChild(particle);
      window.setTimeout(() => particle.remove(), 3000);
    }, 300);
    return () => window.clearInterval(id);
  }, []);
}