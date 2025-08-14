// ========================== src/components/QuickStats.tsx ====================
import React from "react";

const QuickStats: React.FC = () => {
  const stats = [
    { n: "15", l: "Min Delivery" },
    { n: "100K+", l: "Happy Customers" },
    { n: "24/7", l: "Hot & Fresh" },
    { n: "★4.9", l: "Rating" },
  ];
  return (
    <div className="grid gap-7" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
      {stats.map((s) => (
        <div key={s.l} className="text-white text-center rounded-[20px] border-2 transition will-change-transform"
             style={{ background: "rgba(0,0,0,0.8)", borderColor: "#FF6B35", padding: 30 }}
        >
          <div className="font-black mb-2" style={{ fontSize: "3rem", color: "#FF6B35" }}>{s.n}</div>
          <div className="font-black uppercase tracking-wider" style={{ fontSize: "1.1rem" }}>{s.l}</div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;