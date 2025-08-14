// ============================== src/styles/theme.ts ===========================
import type { CSSProperties } from "react";

export const bgGradient: CSSProperties = {
  background: "linear-gradient(135deg,#FF6B35 0%, #F7931E 50%, #FFD23F 100%)",
};
export const fireBg: CSSProperties = {
  background: "linear-gradient(to top, #FF4500 0%, #FF6347 30%, transparent 100%)",
  opacity: 0.1,
  zIndex: -1,
  animation: "flicker 2s ease-in-out infinite alternate",
};
export const offersBanner: CSSProperties = {
  background: "linear-gradient(45deg,#dc3545,#fd7e14)",
  animation: "bannerPulse 2s ease-in-out infinite",
  fontSize: "1.2rem",
};
export const orderBtn: CSSProperties = {
  background: "linear-gradient(45deg,#FF6B35,#F7931E)",
  boxShadow: "0 5px 20px rgba(255,107,53,0.4)",
  animation: "pulse 2s infinite",
};
export const heroEmojiBg: CSSProperties = {
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='50' font-size='60'%3E%F0%9F%94%A5%3C/text%3E%3C/svg%3E") repeat`,
    animation: "float 20s linear infinite",
  };
export const heroTitle: CSSProperties = {
  fontSize: "4.5rem",
  textShadow: "3px 3px 0px #000, 0 0 30px rgba(255,107,53,.8)",
  letterSpacing: 3,
  textTransform: "uppercase",
  animation: "textGlow 2s ease-in-out infinite alternate",
};
export const mainCard: CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(10px)",
};
export const categoryCard: CSSProperties = {
  background: "linear-gradient(135deg,#FF6B35,#F7931E)",
  borderColor: "transparent",
  padding: 35,
};
export const primaryHeroBtn: CSSProperties = {
  background: "linear-gradient(45deg,#FF6B35,#F7931E)",
  boxShadow: "0 10px 30px rgba(255,107,53,.5)",
};
export const secondaryHeroBtn: CSSProperties = {
  background: "transparent",
  color: "white",
  borderColor: "white",
};
export const itemImage: CSSProperties = {
  background: "linear-gradient(45deg,#FF6B35,#F7931E)",
};
export const itemImageGlow: CSSProperties = {
  background: "radial-gradient(circle, transparent 40%, rgba(255,255,255,0.1) 70%)",
  animation: "shimmer 3s ease-in-out infinite",
};
export const addBtn: CSSProperties = {
  background: "linear-gradient(45deg,#FF6B35,#F7931E)",
  color: "white",
};
