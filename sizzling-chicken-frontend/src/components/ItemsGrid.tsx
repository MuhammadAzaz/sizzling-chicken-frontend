// =========================== src/components/ItemsGrid.tsx ====================
import React from "react";

const ItemsGrid: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="grid gap-7" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>{children}</div>
);

export default ItemsGrid;


