"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { mockStore } from "@/lib/mock-data";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "⌂", label: "Vue d'ensemble" },
  { href: "/dashboard/commandes", icon: "🧾", label: "Commandes" },
  { href: "/dashboard/produits", icon: "▤", label: "Produits" },
  { href: "/dashboard/analytics", icon: "📊", label: "Analytics" },
];

export function DashboardShell({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl md:gap-6 md:p-6">
      <aside className="hidden w-56 flex-none md:block">
        <div className="mb-6 flex items-center gap-2 px-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-sig-sm bg-coral-500 font-bold text-white">
            {mockStore.initial}
          </span>
          <span className="font-display font-semibold text-ink-900">CovaSell</span>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 rounded-sig-sm px-3 py-2.5 text-sm font-medium ${
                  active ? "bg-teal-700 text-white" : "text-ink-600 hover:bg-teal-100"
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <div className="hidden items-center justify-between bg-teal-900 px-6 py-1.5 text-[11px] font-medium text-teal-100/80 md:flex md:rounded-t-sig">
          <span>Espace commerçant — CovaSell</span>
          <Link href={`/${mockStore.slug}`} target="_blank" className="underline">
            Voir ma boutique publique ↗
          </Link>
        </div>
        <header className="border-b border-border bg-surface px-4 py-4 md:border-x">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-ink-600">Bonjour {mockStore.name} 👋🏽</p>
              <h1 className="font-display text-lg font-bold text-ink-900">{title}</h1>
              {subtitle && <p className="mt-0.5 text-[13px] text-ink-600">{subtitle}</p>}
            </div>
            <span className="hidden h-9 w-9 flex-none items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 md:flex">
              {mockStore.initial}
            </span>
          </div>
        </header>

        <main className="flex-1 bg-bg px-4 py-4 pb-24 md:rounded-sig md:pb-4">{children}</main>

        <nav className="sticky bottom-0 z-40 flex border-t border-border bg-surface px-2 pb-3 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => {
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
      </div>
    </div>
  );
}
