// ====================== src/components/NotificationBar.tsx ===================
import React from "react";

interface NotificationBarProps { show: boolean; message: string }

const NotificationBar: React.FC<NotificationBarProps> = ({ show, message }) => (
  <div className={`fixed right-5 top-[100px] z-[3000] transition-transform ${show ? "translate-x-0" : "translate-x-[500px]"}`}
       style={{ background: "linear-gradient(45deg,#28a745,#20c997)", color: "white", padding: "20px 30px", borderRadius: 30, boxShadow: "0 10px 30px rgba(40,167,69,0.4)", fontWeight: 700, fontSize: "1.1rem" }}
  >
    {message}
  </div>
);

export default NotificationBar;