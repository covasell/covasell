"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { mockStore } from "@/lib/mock-data";
import { PAYMENT_METHODS, PAYMENT_METHOD_LABELS, type PaymentMethod } from "@/lib/tokens";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

const DEMO_DELIVERY_FEE = 1500;

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [payment, setPayment] = useState<PaymentMethod>("cash");
  const [submitting, setSubmitting] = useState(false);

  const total = subtotal + DEMO_DELIVERY_FEE;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const orderId = `CVS-${Math.floor(1000 + Math.random() * 9000)}`;
      clear();
      router.push(`/${mockStore.slug}/confirmation/${orderId}`);
    }, 700);
  }

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-sm text-ink-600">
        Votre panier est vide.{" "}
        <Link href={`/${mockStore.slug}`} className="text-teal-700 underline">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="pb-28">
      <header className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3.5">
        <Link href={`/${mockStore.slug}/panier`} className="text-lg text-ink-900">
          ←
        </Link>
        <h1 className="font-display text-[15px] font-semibold text-ink-900">Commande</h1>
      </header>

      <div className="flex flex-col gap-5 px-4 py-4">
        <section>
          <h2 className="mb-3 text-[13px] font-semibold text-ink-900">Vos coordonnées</h2>
          <div className="flex flex-col gap-3">
            <Input label="Nom complet" placeholder="Ex. Fadila Kora" required />
            <Input label="Téléphone" type="tel" placeholder="Ex. 97 00 00 00" required />
            <Input label="Adresse de livraison" placeholder="Quartier, repère" required />
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-[13px] font-semibold text-ink-900">Mode de paiement</h2>
          <div className="flex flex-col gap-2">
            {PAYMENT_METHODS.map((method) => (
              <label
                key={method}
                className={`flex cursor-pointer items-center justify-between rounded-sig-sm border px-3.5 py-3 text-[13.5px] font-medium ${
                  payment === method
                    ? "border-teal-700 bg-teal-100 text-teal-900"
                    : "border-border text-ink-700"
                }`}
              >
                {PAYMENT_METHOD_LABELS[method]}
                <input
                  type="radio"
                  name="payment"
                  className="accent-teal-700"
                  checked={payment === method}
                  onChange={() => setPayment(method)}
                />
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-sig-sm border border-border bg-surface p-4">
          <div className="flex justify-between text-[13px] text-ink-600">
            <span>Sous-total</span>
            <span>{formatFcfa(subtotal)}</span>
          </div>
          <div className="mt-1.5 flex justify-between text-[13px] text-ink-600">
            <span>Frais de livraison</span>
            <span>{formatFcfa(DEMO_DELIVERY_FEE)}</span>
          </div>
          <div className="mt-2 flex justify-between border-t border-border pt-2 text-[14px] font-bold text-ink-900">
            <span>Total</span>
            <span>{formatFcfa(total)}</span>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-border bg-surface p-3">
        <Button type="submit" variant="primary" size="lg" className="w-full" loading={submitting}>
          Confirmer la commande
        </Button>
      </div>
    </form>
  );
}
