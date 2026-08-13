import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatusPill } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { mockOrders } from "@/lib/mock-data";
import { PAYMENT_METHOD_LABELS } from "@/lib/tokens";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  const order = mockOrders.find((o) => o.id === params.orderId);

  if (!order) {
    return (
      <DashboardShell title="Commande introuvable">
        <Link href="/dashboard/commandes" className="text-sm text-teal-700 underline">
          ← Retour aux commandes
        </Link>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell title={`Commande #${order.id}`}>
      <div className="mb-4 flex items-center justify-between rounded-sig-sm border border-border bg-surface p-4">
        <div>
          <p className="text-[13px] font-semibold text-ink-900">{order.customerName}</p>
          <p className="text-[12px] text-ink-600">{order.customerPhone}</p>
        </div>
        <StatusPill status={order.status} />
      </div>

      <div className="mb-4 rounded-sig-sm border border-border bg-surface p-4">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-ink-400">Articles</p>
        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between py-1 text-[13px] text-ink-900">
            <span>
              {item.quantity} × {item.productName}
            </span>
            <span>{formatFcfa(item.unitPrice * item.quantity)}</span>
          </div>
        ))}
        <div className="mt-2 flex justify-between border-t border-border pt-2 text-[13.5px] font-bold text-ink-900">
          <span>Total</span>
          <span>{formatFcfa(order.total)}</span>
        </div>
        <p className="mt-1 text-[12px] text-ink-600">
          Paiement : {PAYMENT_METHOD_LABELS[order.paymentMethod]}
        </p>
      </div>

      <div className="flex gap-2.5">
        <Button variant="outline" size="md" className="flex-1">
          Refuser
        </Button>
        <Button variant="primary" size="md" className="flex-1">
          Confirmer la commande
        </Button>
      </div>
    </DashboardShell>
  );
}
