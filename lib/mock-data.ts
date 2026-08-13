import type { DashboardKpis, Order, Product, ProductStats, Recommendation, Store } from "./types";

export const mockStore: Store = {
  slug: "adja-store",
  name: "Adja Store",
  initial: "A",
  categories: ["Vêtements", "Accessoires", "Chaussures"],
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    storeSlug: "adja-store",
    name: "Boubou Wax Bleu",
    category: "Vêtements",
    price: 15000,
    description: "Boubou en wax de haute qualité, coupe confortable.",
    available: true,
    badge: "Populaire",
  },
  {
    id: "p2",
    storeSlug: "adja-store",
    name: "Pagne Wax Multicolore",
    category: "Vêtements",
    price: 12000,
    description: "Pagne en wax aux couleurs vives, idéal pour les cérémonies.",
    available: true,
  },
  {
    id: "p3",
    storeSlug: "adja-store",
    name: "Collier Perles",
    category: "Accessoires",
    price: 5000,
    description: "Collier en perles de verre artisanales.",
    available: true,
    badge: "Nouveau",
  },
  {
    id: "p4",
    storeSlug: "adja-store",
    name: "Sandales Cuir",
    category: "Chaussures",
    price: 8000,
    description: "Sandales en cuir pleine fleur, semelle en caoutchouc.",
    available: false,
  },
  {
    id: "p5",
    storeSlug: "adja-store",
    name: "Chemise Wax Homme",
    category: "Vêtements",
    price: 18000,
    description: "Chemise élégante en wax, coupe droite.",
    available: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

export const mockOrders: Order[] = [
  {
    id: "CVS-1001",
    storeSlug: "adja-store",
    customerName: "Fadila Kora",
    customerPhone: "97 00 00 01",
    items: [
      { productName: "Boubou Wax Bleu", quantity: 2, unitPrice: 15000 },
      { productName: "Collier Perles", quantity: 1, unitPrice: 5000 },
    ],
    subtotal: 35000,
    deliveryFee: 1500,
    total: 36500,
    paymentMethod: "mtn",
    status: "en_livraison",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "CVS-1002",
    storeSlug: "adja-store",
    customerName: "Issa Diallo",
    customerPhone: "98 00 00 02",
    items: [{ productName: "Pagne Wax Multicolore", quantity: 1, unitPrice: 12000 }],
    subtotal: 12000,
    deliveryFee: 1500,
    total: 13500,
    paymentMethod: "cash",
    status: "nouvelle",
    createdAt: "2024-01-16T14:20:00Z",
  },
  {
    id: "CVS-1003",
    storeSlug: "adja-store",
    customerName: "Mariam Boni",
    customerPhone: "95 00 00 03",
    items: [
      { productName: "Chemise Wax Homme", quantity: 1, unitPrice: 18000 },
      { productName: "Sandales Cuir", quantity: 2, unitPrice: 8000 },
    ],
    subtotal: 34000,
    deliveryFee: 1500,
    total: 35500,
    paymentMethod: "moov",
    status: "echec_annulee",
    createdAt: "2024-01-17T09:10:00Z",
  },
];

export const mockKpis: DashboardKpis = {
  revenue: 85500,
  revenueChangePct: 12.4,
  visitors: 145,
  orders: 3,
  conversionRatePct: 2.07,
  conversionChangePct: 0.4,
};

export const mockProductStats: ProductStats[] = [
  { productId: "p1", visits: 45, orders: 2 },
  { productId: "p2", visits: 30, orders: 1 },
  { productId: "p3", visits: 25, orders: 0 },
  { productId: "p4", visits: 20, orders: 0 },
  { productId: "p5", visits: 25, orders: 0 },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: "rec-1",
    tone: "success",
    message: "Vos 2 meilleurs produits représentent 80% de vos ventes.",
    action: "Mettez-les en avant sur la page d'accueil.",
    ctaLabel: "Voir les produits",
    ctaHref: "/dashboard/produits",
  },
  {
    id: "rec-2",
    tone: "warning",
    message: "Les Sandales Cuir ont 20 visites mais 0 commandes.",
    action: "Vérifiez la description ou le prix.",
    ctaLabel: "Modifier le produit",
    ctaHref: "/dashboard/produits/p4",
  },
  {
    id: "rec-3",
    tone: "info",
    message: "Les clients qui achètent des vêtements achètent souvent des accessoires.",
    action: "Proposez le Collier Perles en complément.",
    ctaLabel: "Voir les statistiques",
    ctaHref: "/dashboard/analytics",
  },
];
