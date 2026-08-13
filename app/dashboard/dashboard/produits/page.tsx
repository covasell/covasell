import Link from "next/link";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ProductRow } from "@/components/dashboard/ProductRow";
import { Button } from "@/components/ui/Button";
import { mockProducts } from "@/lib/mock-data";

export default function DashboardProductsPage() {
  return (
    <DashboardShell title="Produits" subtitle={`${mockProducts.length} produits au catalogue`}>
      <div className="mb-4">
        <Link href="/dashboard/produits/nouveau">
          <Button variant="primary" size="md">
            + Ajouter un produit
          </Button>
        </Link>
      </div>
      <div>
        {mockProducts.map((product) => (
          <Link key={product.id} href={`/dashboard/produits/${product.id}`} className="block">
            <ProductRow product={product} />
          </Link>
        ))}
      </div>
    </DashboardShell>
  );
}
