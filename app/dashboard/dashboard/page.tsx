import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { OrderRow } from "@/components/dashboard/OrderRow";
import { RecommendationCard } from "@/components/dashboard/RecommendationCard";
import { mockOrders, mockKpis, mockRecommendations, mockProductStats, mockProducts } from "@/lib/mock-data";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

function ChangeTag({ pct }: { pct: number }) {
  const positive = pct >= 0;
  return (
    <span className={`ml-1.5 text-[11px] font-semibold ${positive ? "text-success" : "text-error"}`}>
      {positive ? "↑" : "↓"} {Math.abs(pct).toFixed(1)}%
    </span>
  );
}

export default function DashboardHomePage() {
  const bestProduct = mockProductStats[0];
  const bestProductInfo = mockProducts.find((p) => p.id === bestProduct.productId)!;

  return (
    <DashboardShell title="Vue d'ensemble">
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-ink-400">
        Ce qui s'est passé cette semaine
      </p>
      <div className="mb-3 grid grid-cols-2 gap-2.5">
        <KpiCard label="Chiffre d'affaires" value={formatFcfa(mockKpis.revenue)} />
        <KpiCard label="Commandes" value={String(mockKpis.orders)} />
      </div>
      <div className="mb-6 rounded-sig border border-teal-700/20 bg-teal-100 p-4">
        <p className="text-[12px] font-medium text-teal-900">Taux de conversion</p>
        <p className="mt-1 font-display text-2xl font-bold text-teal-900">
          {mockKpis.conversionRatePct}% <span className="text-sm font-normal">de vos visiteurs achètent</span>
          <ChangeTag pct={mockKpis.conversionChangePct} />
        </p>
        <p className="mt-1 text-[11.5px] text-teal-700">{mockKpis.visitors} visiteurs cette semaine</p>
      </div>

      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-ink-400">Pourquoi</p>
      <div className="mb-6 rounded-sig-sm border border-border bg-surface p-3.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] font-semibold text-ink-900">🏆 {bestProductInfo.name}</p>
            <p className="text-[11.5px] text-ink-600">
              {bestProduct.visits} visites · {bestProduct.orders} commandes
            </p>
          </div>
          <Link href="/dashboard/analytics" className="text-[12px] font-semibold text-teal-700">
            Voir tout →
          </Link>
        </div>
      </div>

      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-ink-400">
        💡 CovaSell vous recommande
      </p>
      <div className="mb-6 flex flex-col gap-2.5">
        {mockRecommendations.map((rec) => (
          <RecommendationCard key={rec.id} rec={rec} />
        ))}
      </div>

      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-ink-400">
        Commandes récentes
      </p>
      <div>
        {mockOrders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
      </div>
    </DashboardShell>
  );
}
