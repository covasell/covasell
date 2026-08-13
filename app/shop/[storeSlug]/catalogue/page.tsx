"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CategoryChips } from "@/components/shop/CategoryChips";
import { ProductCard } from "@/components/shop/ProductCard";
import { BottomNav } from "@/components/shop/BottomNav";
import { AssistantFab } from "@/components/shop/AssistantFab";
import { EmptyState } from "@/components/ui/States";
import { mockStore, mockProducts } from "@/lib/mock-data";

type SortOption = "pertinence" | "prix_asc" | "prix_desc";

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("pertinence");

  const results = useMemo(() => {
    let list = mockProducts.filter(
      (p) => activeCategory === "Tout" || p.category === activeCategory
    );
    if (query.trim()) {
      list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    }
    if (sort === "prix_asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "prix_desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, query, sort]);

  return (
    <>
      <header className="bg-teal-900 px-4 pb-4 pt-4 text-white">
        <div className="mb-3 flex items-center gap-2">
          <Link href={`/${mockStore.slug}`} className="text-lg">
            ←
          </Link>
          <h1 className="font-display text-[15px] font-semibold">Catalogue</h1>
        </div>
        <div className="flex items-center gap-2 rounded-sig-sm bg-white/10 px-3.5 py-2.5">
          <span>🔍</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit…"
            className="w-full bg-transparent text-[13.5px] text-white placeholder:text-white/60 outline-none"
          />
        </div>
      </header>

      <div className="px-4 pb-24 pt-4">
        <CategoryChips
          categories={mockStore.categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mb-3 flex items-center justify-between">
          <p className="text-[12.5px] text-ink-600">{results.length} produit(s)</p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-sig-sm border border-border bg-surface px-2.5 py-1.5 text-[12px] text-ink-900"
          >
            <option value="pertinence">Pertinence</option>
            <option value="prix_asc">Prix croissant</option>
            <option value="prix_desc">Prix décroissant</option>
          </select>
        </div>

        {results.length === 0 ? (
          <EmptyState
            title="Aucun produit trouvé"
            description="Essayez une autre recherche ou catégorie."
          />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <AssistantFab storeSlug={mockStore.slug} />
      <BottomNav storeSlug={mockStore.slug} />
    </>
  );
}
