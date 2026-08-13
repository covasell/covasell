import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ProductForm } from "@/components/dashboard/ProductForm";

export default function NewProductPage() {
  return (
    <DashboardShell title="Ajouter un produit">
      <ProductForm />
    </DashboardShell>
  );
}
