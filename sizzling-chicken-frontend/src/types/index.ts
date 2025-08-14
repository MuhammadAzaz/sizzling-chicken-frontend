// ================================= src/types/index.ts ========================
export interface CartItem {
  name: string;
  price: number;
}

export interface DeliverySettings {
  isDeliveryActive: boolean;
  deliveryStartTime: string; // "HH:mm"
  deliveryEndTime: string;   // "HH:mm"
  deliveryFee: number;
  minOrderForDelivery: number;
  adminPassword: string;
}
