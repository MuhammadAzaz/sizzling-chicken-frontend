// ====================== src/utils/deliveryDefaults.ts =======================
import type { DeliverySettings } from "../types";

export const defaultDeliverySettings: DeliverySettings = {
  isDeliveryActive: false,
  deliveryStartTime: "17:00",
  deliveryEndTime: "22:00",
  deliveryFee: 2.99,
  minOrderForDelivery: 15.0,
  adminPassword: "sizzling123",
};
