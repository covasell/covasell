import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { OrderRow } from "@/components/dashboard/OrderRow";
import { mockOrders } from "@/lib/mock-data";
import { ORDER_STATUSES, ORDER_STATUS_LABELS } from "@/lib/tokens";

export default function DashboardOrdersPage() {
  return (
    <DashboardShell title="Commandes" subtitle={`${mockOrders.length} commandes au total`}>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        <span className="flex-none rounded-sig-sm border border-teal-700 bg-teal-700 px-3 py-1.5 text-[12px] font-semibold text-white">
          Toutes
        </span>
        {ORDER_STATUSES.map((status) => (
          <span
            key={status}
            className="flex-none rounded-sig-sm border border-border bg-surface px-3 py-1.5 text-[12px] font-medium text-ink-600"
          >
            {ORDER_STATUS_LABELS[status]}
          </span>
        ))}
      </div>
      <div>
        {mockOrders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </div>
    </DashboardShell>
  );
}
