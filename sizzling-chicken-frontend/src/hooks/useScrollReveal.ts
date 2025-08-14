// ======================== src/hooks/useScrollReveal.ts =======================
import { useEffect } from "react";
export default function useScrollReveal(): void {
  useEffect(() => {
    const opts = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animation = "fadeInUp .8s ease forwards";
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, opts);

    document.querySelectorAll(".will-change-transform").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);
}