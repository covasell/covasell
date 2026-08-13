"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mockOrders } from "@/lib/mock-data";

interface BottomNavProps {
  storeSlug: string;
}

export function BottomNav({ storeSlug }: BottomNavProps) {
  const pathname = usePathname();
  const lastOrderId = mockOrders[0]?.id;
  const items = [
    { href: `/${storeSlug}`, icon: "⌂", label: "Boutique" },
    { href: `/${storeSlug}/assistant`, icon: "💬", label: "Assistant" },
    { href: `/${storeSlug}/panier`, icon: "🛒", label: "Panier" },
    { href: `/${storeSlug}/commande/${lastOrderId}`, icon: "📦", label: "Suivi" },
  ];

  return (
    <nav className="sticky bottom-0 z-40 flex border-t border-border bg-surface px-2 pb-3 pt-2">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 flex-col items-center gap-0.5 text-[10px] font-semibold ${
              active ? "text-teal-700" : "text-ink-400"
            }`}
          >
            <span className="text-lg leading-none">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
