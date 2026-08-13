import type { Product } from "@/lib/types";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export function ProductRow({ product }: { product: Product }) {
  return (
    <div className="mb-2.5 flex items-center gap-3 rounded-sig-sm border border-border bg-surface p-2.5 last:mb-0">
      <div className="h-12 w-12 flex-none rounded-[10px_10px_10px_3px] bg-gradient-to-br from-teal-100 to-[#F3ECE3]" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-ink-900">{product.name}</p>
        <p className="text-[11.5px] text-ink-600">{product.category}</p>
      </div>
      <div className="flex-none text-right">
        <p className="text-[13px] font-bold text-teal-900">{formatFcfa(product.price)}</p>
        <p className={`text-[11px] ${product.available ? "text-success" : "text-error"}`}>
          {product.available ? "Disponible" : "Indisponible"}
        </p>
      </div>
    </div>
  );
}
