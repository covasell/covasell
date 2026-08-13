import Link from "next/link";
import { StatusPill, PaymentStatusBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { mockOrders, mockStore } from "@/lib/mock-data";
import { ORDER_STATUSES } from "@/lib/tokens";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export default function OrderTrackingPage({ params }: { params: { orderId: string } }) {
  const order = mockOrders.find((o) => o.id === params.orderId);

  if (!order) {
    return (
      <div className="p-6 text-center text-sm text-ink-600">
        Aucune commande à suivre pour le moment.{" "}
        <Link href={`/${mockStore.slug}`} className="text-teal-700 underline">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const currentIndex = ORDER_STATUSES.indexOf(order.status);

  return (
    <div className="pb-10">
      <header className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3.5">
        <Link href={`/${mockStore.slug}`} className="text-lg text-ink-900">
          ←
        </Link>
        <h1 className="font-display text-[15px] font-semibold text-ink-900">
          Suivi — #{order.id}
        </h1>
      </header>

      <div className="px-4 py-5">
        <div className="rounded-sig border border-border bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <StatusPill status={order.status} />
            <PaymentStatusBadge status={order.status === "echec_annulee" ? "echec" : "succes"} />
          </div>

          <div className="mb-4 flex items-center">
            {ORDER_STATUSES.filter((s) => s !== "echec_annulee").map((status, i) => (
              <div key={status} className="flex flex-1 items-center last:flex-none">
                <div
                  className={`h-2.5 w-2.5 flex-none rounded-full ${
                    i <= currentIndex ? "bg-teal-700" : "bg-border"
                  }`}
                />
                {i < 3 && (
                  <div className={`h-0.5 flex-1 ${i < currentIndex ? "bg-teal-700" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

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
        </div>

        <a href="https://wa.me/22900000000" target="_blank" rel="noreferrer" className="mt-4 block">
          <Button variant="outline" size="md" className="w-full">
            💬 Contacter la boutique sur WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
}
