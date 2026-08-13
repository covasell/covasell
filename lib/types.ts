import type { OrderStatus, PaymentMethod } from "./tokens";

export interface Store {
  slug: string;
  name: string;
  initial: string;
  categories: string[];
}

export interface ProductVariant {
  id: string;
  label: string;
}

export interface Product {
  id: string;
  storeSlug: string;
  name: string;
  category: string;
  price: number;
  description: string;
  available: boolean;
  badge?: "Nouveau" | "Populaire";
  variants?: ProductVariant[];
}

export interface CartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}

export interface Order {
  id: string;
  storeSlug: string;
  customerName: string;
  customerPhone: string;
  items: { productName: string; quantity: number; unitPrice: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
  products?: Product[];
}

export type PaymentStatus = "succes" | "en_attente" | "echec";

export interface ProductStats {
  productId: string;
  visits: number;
  orders: number;
}

export interface DashboardKpis {
  revenue: number;
  revenueChangePct: number;
  visitors: number;
  orders: number;
  conversionRatePct: number;
  conversionChangePct: number;
}

export type RecommendationTone = "warning" | "success" | "info";

export interface Recommendation {
  id: string;
  tone: RecommendationTone;
  message: string;
  action: string;
  ctaLabel: string;
  ctaHref: string;
}
