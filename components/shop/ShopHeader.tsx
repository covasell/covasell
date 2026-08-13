import Link from "next/link";
import type { Store } from "@/lib/types";

interface ShopHeaderProps {
  store: Store;
  cartCount?: number;
  showSearch?: boolean;
}

export function ShopHeader({ store, cartCount = 0, showSearch = true }: ShopHeaderProps) {
  return (
    <header className="bg-teal-900 px-4 pb-5 pt-4 text-white">
      <div className="flex items-center justify-between">
        <Link href={`/${store.slug}`} className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-sig-sm bg-coral-500 text-[13px] font-bold">
            {store.initial}
          </span>
          <span className="font-display text-[15px] font-semibold">{store.name}</span>
        </Link>
        <Link
          href={`/${store.slug}/panier`}
          className="relative flex h-8 w-8 items-center justify-center rounded-sig-sm bg-white/10"
          aria-label="Panier"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral-500 px-1 text-[9px] font-bold">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
      {showSearch && (
        <Link
          href={`/${store.slug}/catalogue`}
          className="mt-3.5 flex items-center gap-2 rounded-sig-sm bg-white/10 px-3.5 py-2.5 text-[13.5px] text-white/70"
        >
          🔍 Rechercher un produit…
        </Link>
      )}
    </header>
  );
}
