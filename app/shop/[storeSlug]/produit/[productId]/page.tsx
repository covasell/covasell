"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/shop/ProductCard";
import { useToast, Toast } from "@/components/ui/Modal";
import { useCart } from "@/lib/cart-context";
import { getProductById, mockProducts, mockStore } from "@/lib/mock-data";
import type { ProductVariant } from "@/lib/types";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = getProductById(params.productId);
  const router = useRouter();
  const { addItem } = useCart();
  const { toast, showToast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product?.variants?.[0]
  );

  if (!product) {
    return <div className="p-6 text-center text-sm text-ink-600">Produit introuvable.</div>;
  }

  const similar = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    addItem(product!, selectedVariant);
    showToast("Ajouté au panier");
  }

  function handleOrderNow() {
    addItem(product!, selectedVariant);
    router.push(`/${mockStore.slug}/checkout`);
  }

  return (
    <div className="pb-28">
      <header className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3.5">
        <Link href={`/${mockStore.slug}/catalogue`} className="text-lg text-ink-900">
          ←
        </Link>
        <h1 className="line-clamp-1 font-display text-[14px] font-semibold text-ink-900">
          {product.name}
        </h1>
      </header>

      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-teal-100 to-[#F3ECE3] text-sm text-teal-700">
        Photo produit
      </div>

      <div className="px-4 py-4">
        {product.badge && (
          <div className="mb-2">
            <Badge>{product.badge}</Badge>
          </div>
        )}
        <h1 className="font-display text-lg font-bold text-ink-900">{product.name}</h1>
        <p className="mt-1 text-xl font-bold text-teal-900">{formatFcfa(product.price)}</p>

        {!product.available && (
          <p className="mt-2 rounded-sig-sm bg-error/10 px-3 py-2 text-[13px] font-medium text-error">
            Ce produit est actuellement indisponible.
          </p>
        )}

        {product.variants && product.variants.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-[13px] font-semibold text-ink-900">Variante</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`rounded-sig-sm border px-3 py-1.5 text-[12.5px] font-medium ${
                    selectedVariant?.id === v.id
                      ? "border-teal-700 bg-teal-700 text-white"
                      : "border-border text-ink-700"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="mt-4 text-[13.5px] leading-relaxed text-ink-600">{product.description}</p>

        <a
          href="https://wa.me/22900000000"
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-center gap-2 text-[13px] font-medium text-teal-700"
        >
          💬 Une question ? Contacter la boutique sur WhatsApp
        </a>
        <Link
          href={`/${mockStore.slug}/assistant`}
          className="mt-2 flex items-center gap-2 text-[13px] font-medium text-teal-700"
        >
          🧑‍💼 Demander au commercial
        </Link>

        {similar.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 font-display text-base font-semibold text-ink-900">
              Produits similaires
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {similar.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {product.available && (
        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-border bg-surface p-3">
          <div className="flex gap-2.5">
            <Button variant="outline" size="lg" className="flex-1" onClick={handleAddToCart}>
              Ajouter au panier
            </Button>
            <Button variant="primary" size="lg" className="flex-1" onClick={handleOrderNow}>
              Commander
            </Button>
          </div>
        </div>
      )}

      <Toast toast={toast} />
    </div>
  );
}
