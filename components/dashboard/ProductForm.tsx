"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { mockStore } from "@/lib/mock-data";
import type { Product } from "@/lib/types";

export function ProductForm({ existing }: { existing?: Product }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => router.push("/dashboard/produits"), 500);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <Input label="Nom du produit" defaultValue={existing?.name} required />
      <Select label="Catégorie" defaultValue={existing?.category}>
        {mockStore.categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>
      <Input label="Prix (FCFA)" type="number" defaultValue={existing?.price} required />
      <Input
        label="Description courte"
        defaultValue={existing?.description}
        placeholder="2-3 phrases suffisent"
      />
      <div>
        <p className="mb-1.5 text-[13px] font-medium text-ink-900">Photos</p>
        <div className="flex h-24 w-24 items-center justify-center rounded-sig-sm border border-dashed border-border text-[11px] text-ink-400">
          + Ajouter
        </div>
      </div>
      <label className="flex items-center gap-2 text-[13px] text-ink-900">
        <input type="checkbox" defaultChecked={existing?.available ?? true} className="accent-teal-700" />
        Produit disponible à la vente
      </label>

      <div className="mt-3 flex gap-2.5">
        <Button
          type="button"
          variant="outline"
          size="md"
          className="flex-1"
          onClick={() => router.push("/dashboard/produits")}
        >
          Annuler
        </Button>
        <Button type="submit" variant="secondary" size="md" className="flex-1" loading={saving}>
          Enregistrer
        </Button>
      </div>
    </form>
  );
}
