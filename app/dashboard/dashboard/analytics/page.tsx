import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ProductPerformanceRow } from "@/components/dashboard/ProductPerformanceRow";
import { mockProductStats, mockProducts, mockKpis } from "@/lib/mock-data";

export default function AnalyticsPage() {
  const withProducts = mockProductStats
    .map((stats) => ({
      stats,
      product: mockProducts.find((p) => p.id === stats.productId)!,
      conversion: stats.visits > 0 ? (stats.orders / stats.visits) * 100 : 0,
    }))
    .filter((row) => row.product);

  const performants = [...withProducts].sort((a, b) => b.conversion - a.conversion).slice(0, 3);
  const aAmeliorer = [...withProducts].sort((a, b) => a.conversion - b.conversion).slice(0, 3);

  return (
    <DashboardShell title="Analytics" subtitle="Comprendre où vous gagnez et perdez des ventes">
      <div className="mb-6 rounded-sig border border-teal-700/20 bg-teal-100 p-4">
        <p className="text-[12px] font-medium text-teal-900">Taux de conversion global</p>
        <p className="mt-1 font-display text-2xl font-bold text-teal-900">
          {mockKpis.conversionRatePct}%
        </p>
      </div>

      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-ink-400">
        🏆 Vos meilleurs produits
      </p>
      <div className="mb-6">
        {performants.map((row) => (
          <ProductPerformanceRow key={row.product.id} product={row.product} stats={row.stats} />
        ))}
      </div>

      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wide text-ink-400">
        📉 Produits à améliorer
      </p>
      <div>
        {aAmeliorer.map((row) => (
          <ProductPerformanceRow key={row.product.id} product={row.product} stats={row.stats} />
        ))}
      </div>
    </DashboardShell>
  );
}
