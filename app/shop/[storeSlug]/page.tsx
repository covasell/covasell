"use client";

import { useState } from "react";
import Link from "next/link";
import { ShopHeader } from "@/components/shop/ShopHeader";
import { CategoryChips } from "@/components/shop/CategoryChips";
import { ProductCard } from "@/components/shop/ProductCard";
import { BottomNav } from "@/components/shop/BottomNav";
import { HowItWorks } from "@/components/shop/HowItWorks";
import { mockStore, mockProducts } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";

export default function ShopHomePage() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const { count } = useCart();

  const featured = mockProducts.filter(
    (p) => activeCategory === "Tout" || p.category === activeCategory
  );

  return (
    <>
      <ShopHeader store={mockStore} cartCount={count} showSearch={false} />

      <div className="bg-teal-900 px-4 pb-6 pt-1 text-white">
        <h1 className="font-display text-[19px] font-bold leading-snug">
          Votre commercial digital est là.
        </h1>
        <p className="mt-1.5 text-[13px] leading-relaxed text-teal-100/85">
          Il aide vos clients à trouver le bon produit, répond à leurs questions et les accompagne
          jusqu&apos;à la commande.
        </p>
        <div className="mt-4 flex gap-2.5">
          <Link
            href={`/${mockStore.slug}/assistant`}
            className="flex-1 rounded-sig-sm bg-coral-500 px-4 py-3 text-center text-[13.5px] font-semibold text-white"
          >
            💬 Trouver un produit
          </Link>
          <Link
            href={`/${mockStore.slug}/catalogue`}
            className="flex-1 rounded-sig-sm border border-white/25 px-4 py-3 text-center text-[13.5px] font-semibold text-white"
          >
            Voir la boutique
          </Link>
        </div>
      </div>

      <div className="px-4 pb-24 pt-4">
        <CategoryChips
          categories={mockStore.categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-base font-semibold text-ink-900">Mis en avant</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8">
          <HowItWorks />
        </div>
      </div>

      <BottomNav storeSlug={mockStore.slug} />
    </>
  );
}
