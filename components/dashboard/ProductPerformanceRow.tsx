import type { Product, ProductStats } from "@/lib/types";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

interface ProductPerformanceRowProps {
  product: Product;
  stats: ProductStats;
}

export function ProductPerformanceRow({ product, stats }: ProductPerformanceRowProps) {
  const conversionRate = stats.visits > 0 ? (stats.orders / stats.visits) * 100 : 0;
  const revenue = stats.orders * product.price;

  return (
    <div className="mb-2 flex items-center justify-between rounded-sig-sm border border-border bg-surface px-3.5 py-3 last:mb-0">
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-ink-900">{product.name}</p>
        <p className="text-[11.5px] text-ink-600">
          {stats.visits} visites · {stats.orders} commandes · {formatFcfa(revenue)}
        </p>
      </div>
      <div className="flex-none text-right">
        <p
          className={`text-[13.5px] font-bold ${
            conversionRate >= 5 ? "text-success" : conversionRate < 2 ? "text-error" : "text-ink-900"
          }`}
        >
          {conversionRate.toFixed(1)}%
        </p>
        <p className="text-[10.5px] text-ink-400">conversion</p>
      </div>
    </div>
  );
}
