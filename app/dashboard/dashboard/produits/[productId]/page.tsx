import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ProductForm } from "@/components/dashboard/ProductForm";
import { getProductById } from "@/lib/mock-data";

export default function EditProductPage({ params }: { params: { productId: string } }) {
  const product = getProductById(params.productId);
  return (
    <DashboardShell title="Modifier le produit">
      <ProductForm existing={product} />
    </DashboardShell>
  );
}
