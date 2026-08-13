"use client";

interface CategoryChipsProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

export function CategoryChips({ categories, active, onChange }: CategoryChipsProps) {
  const all = ["Tout", ...categories];
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
      {all.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`flex-none rounded-sig-sm border px-3.5 py-2 text-[12.5px] font-semibold transition-colors ${
              isActive
                ? "border-teal-700 bg-teal-700 text-white"
                : "border-border bg-surface text-ink-600"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
