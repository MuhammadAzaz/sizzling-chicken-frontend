// ======================= src/components/DeliveryStatus.tsx ==================
import React from "react";
import { currency } from "../utils/format";
import type { DeliverySettings } from "../types";

interface DeliveryStatusProps {
  isNow: boolean;
  delivery: DeliverySettings;
  nextTime: string;
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isNow, delivery, nextTime }) => (
  isNow ? (
    <div className="mb-5 text-center font-bold rounded-[15px]" style={{ background: "linear-gradient(45deg,#28a745,#20c997)", color: "white", padding: 15 }}>
      🚚 DELIVERY AVAILABLE NOW!
      <div className="opacity-90 text-[0.9rem] mt-1">
        Available until {delivery.deliveryEndTime} • Min order {currency(delivery.minOrderForDelivery)} • Delivery fee {currency(delivery.deliveryFee)}
      </div>
    </div>
  ) : (
    <div className="mb-5 text-center font-bold rounded-[15px]" style={{ background: "linear-gradient(45deg,#FF6B35,#F7931E)", color: "white", padding: 15 }}>
      🏪 TAKEAWAY ONLY
      <div className="opacity-90 text-[0.9rem] mt-1">Delivery available {nextTime} • Order now for pickup!</div>
    </div>
  )
);

export default DeliveryStatus;