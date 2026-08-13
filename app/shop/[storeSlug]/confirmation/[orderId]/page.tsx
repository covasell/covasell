import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/Badge";
import { mockStore } from "@/lib/mock-data";

export default function ConfirmationPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-sig bg-success/10 text-3xl">
        ✅
      </span>
      <h1 className="font-display text-xl font-bold text-ink-900">Commande confirmée ✓</h1>
      <p className="mt-1 text-sm text-ink-600">
        Numéro de commande <span className="font-semibold text-ink-900">#{params.orderId}</span>
      </p>

      <div className="mt-5 w-full max-w-xs rounded-sig border border-border bg-surface p-4 text-left">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-ink-600">Statut</span>
          <StatusPill status="nouvelle" />
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-ink-600">
          La boutique va confirmer votre commande sous peu. Vous pouvez suivre son statut à tout
          moment.
        </p>
      </div>

      <div className="mt-6 flex w-full max-w-xs flex-col gap-2.5">
        <Link href={`/${mockStore.slug}/commande/${params.orderId}`}>
          <Button variant="primary" size="md" className="w-full">
            Suivre ma commande
          </Button>
        </Link>
        <a href="https://wa.me/22900000000" target="_blank" rel="noreferrer">
          <Button variant="outline" size="md" className="w-full">
            💬 Contacter la boutique sur WhatsApp
          </Button>
        </a>
        <Link href={`/${mockStore.slug}`}>
          <Button variant="ghost" size="md" className="w-full">
            Retour à la boutique
          </Button>
        </Link>
      </div>
    </div>
  );
}
