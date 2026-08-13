"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/States";
import { useCart } from "@/lib/cart-context";
import { mockStore } from "@/lib/mock-data";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export default function CartPage() {
  const { items, updateQuantity, subtotal } = useCart();
  const router = useRouter();

  return (
    <div className="pb-28">
      <header className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3.5">
        <Link href={`/${mockStore.slug}`} className="text-lg text-ink-900">
          ←
        </Link>
        <h1 className="font-display text-[15px] font-semibold text-ink-900">Mon panier</h1>
      </header>

      {items.length === 0 ? (
        <EmptyState
          icon="🛍️"
          title="Votre panier est vide"
          description="Découvrez les produits de la boutique."
          actionLabel="Découvrir la boutique"
          onAction={() => router.push(`/${mockStore.slug}`)}
        />
      ) : (
        <div className="px-4 py-4">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant?.id}`}
                className="flex items-center gap-3 rounded-sig-sm border border-border bg-surface p-3"
              >
                <div className="h-16 w-16 flex-none rounded-[12px_12px_12px_4px] bg-gradient-to-br from-teal-100 to-[#F3ECE3]" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-ink-900">
                    {item.product.name}
                  </p>
                  {item.variant && (
                    <p className="text-[11.5px] text-ink-600">{item.variant.label}</p>
                  )}
                  <p className="mt-0.5 text-[13px] font-bold text-teal-900">
                    {formatFcfa(item.product.price)}
                  </p>
                </div>
                <div className="flex flex-none items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.variant?.id, item.quantity - 1)
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-sig-sm border border-border text-ink-600"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-[13px] font-semibold">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.variant?.id, item.quantity + 1)
                    }
                    className="flex h-7 w-7 items-center justify-center rounded-sig-sm border border-border text-ink-600"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-sig-sm border border-border bg-surface p-4">
            <div className="flex justify-between text-[13.5px] text-ink-600">
              <span>Sous-total</span>
              <span>{formatFcfa(subtotal)}</span>
            </div>
            <p className="mt-1.5 text-[11.5px] text-ink-400">
              Frais de livraison calculés à l&apos;étape suivante
            </p>
          </div>
        </div>
      )}

      {items.length > 0 && (
        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-border bg-surface p-3">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => router.push(`/${mockStore.slug}/checkout`)}
          >
            Commander — {formatFcfa(subtotal)}
          </Button>
        </div>
      )}
    </div>
  );
}
