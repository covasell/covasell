import Link from "next/link";
import { StatusPill } from "@/components/ui/Badge";
import { PAYMENT_METHOD_LABELS } from "@/lib/tokens";
import type { Order } from "@/lib/types";

export function OrderRow({ order }: { order: Order }) {
  const itemCount = order.items.reduce((sum, it) => sum + it.quantity, 0);
  return (
    <Link
      href={`/dashboard/commandes/${order.id}`}
      className="mb-2.5 flex items-center justify-between rounded-sig-sm border border-border bg-surface px-3.5 py-3 last:mb-0"
    >
      <div>
        <p className="text-[13px] font-bold text-ink-900">#{order.id}</p>
        <p className="mt-0.5 text-[11.5px] text-ink-600">
          {itemCount} article{itemCount > 1 ? "s" : ""} · {PAYMENT_METHOD_LABELS[order.paymentMethod]}
        </p>
      </div>
      <StatusPill status={order.status} />
    </Link>
  );
}
