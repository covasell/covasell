export const colors = {
  teal900: "#082F2B",
  teal700: "#0B6E64",
  teal600: "#0E8377",
  teal100: "#E4F3F0",
  coral600: "#F0532F",
  coral500: "#FF6B4A",
  bg: "#F7F9F8",
  surface: "#FFFFFF",
  ink900: "#101418",
  ink600: "#5B6570",
  ink400: "#8B95A0",
  border: "#E4E8E7",
  success: "#2F9E62",
  warning: "#F5A623",
  error: "#E23F3F",
  info: "#3E8EF7",
} as const;

export const radius = {
  signature: "18px 18px 18px 6px",
  signatureSmall: "12px 12px 12px 4px",
} as const;

export const shadow = {
  sm: "0 1px 2px rgba(16,20,24,0.06)",
  md: "0 4px 16px rgba(8,47,43,0.10)",
} as const;

export const ORDER_STATUSES = [
  "nouvelle",
  "confirmee",
  "en_livraison",
  "livree",
  "echec_annulee",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  nouvelle: "Nouvelle",
  confirmee: "Confirmée",
  en_livraison: "En livraison",
  livree: "Livrée",
  echec_annulee: "Échec / Annulée",
};

export const PAYMENT_METHODS = ["mtn", "moov", "celtiis", "cash"] as const;
export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  mtn: "MTN Mobile Money",
  moov: "Moov Money",
  celtiis: "Celtiis Cash",
  cash: "Paiement à la livraison",
};
