import { ORDER_STATUS_LABELS, type OrderStatus } from "@/lib/tokens";

export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-sig-sm bg-coral-500 px-2 py-0.5 text-[10px] font-bold text-white">
      {children}
    </span>
  );
}

const paymentStatusStyles: Record<string, string> = {
  succes: "bg-success/10 text-success",
  en_attente: "bg-warning/10 text-warning",
  echec: "bg-error/10 text-error",
};

const paymentStatusLabels: Record<string, string> = {
  succes: "Paiement confirmé",
  en_attente: "Paiement en attente",
  echec: "Paiement échoué",
};

export function PaymentStatusBadge({ status }: { status: "succes" | "en_attente" | "echec" }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-sig-sm px-2.5 py-1 text-[10.5px] font-bold ${paymentStatusStyles[status]}`}
    >
      {paymentStatusLabels[status]}
    </span>
  );
}

const statusStyles: Record<OrderStatus, string> = {
  nouvelle: "bg-coral-500/10 text-coral-600",
  confirmee: "bg-info/10 text-info",
  en_livraison: "bg-warning/10 text-warning",
  livree: "bg-success/10 text-success",
  echec_annulee: "bg-error/10 text-error",
};

export function StatusPill({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-sig-sm px-2.5 py-1 text-[10.5px] font-bold ${statusStyles[status]}`}
    >
      {ORDER_STATUS_LABELS[status]}
    </span>
  );
}
