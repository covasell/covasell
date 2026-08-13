import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/types";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.storeSlug}/produit/${product.id}`}
      className="block overflow-hidden rounded-sig border border-border bg-surface shadow-sm2 transition-shadow hover:shadow-md2"
    >
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-teal-100 to-[#F3ECE3] text-[11px] font-medium text-teal-700">
        Photo produit
        {!product.available && (
          <span className="absolute inset-0 flex items-center justify-center bg-ink-900/50 text-xs font-semibold text-white">
            Indisponible
          </span>
        )}
      </div>
      <div className="p-3">
        {product.badge && (
          <div className="mb-1.5">
            <Badge>{product.badge}</Badge>
          </div>
        )}
        <p className="mb-1 line-clamp-2 text-[13px] font-medium leading-snug text-ink-900">
          {product.name}
        </p>
        <p className={`text-sm font-bold ${product.available ? "text-teal-900" : "text-ink-400"}`}>
          {formatFcfa(product.price)}
        </p>
      </div>
    </Link>
  );
}
