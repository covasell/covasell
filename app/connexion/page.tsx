"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/dashboard"), 500);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6">
      <div className="mb-8 text-center">
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-sig bg-teal-900 text-lg font-bold text-white">
          C
        </span>
        <h1 className="font-display text-xl font-bold text-ink-900">Espace commerçant</h1>
        <p className="mt-1 text-[13px] text-ink-600">Connectez-vous pour gérer votre boutique.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <Input label="Email" type="email" placeholder="vous@boutique.com" required />
        <Input label="Mot de passe" type="password" placeholder="••••••••" required />
        <Button type="submit" variant="secondary" size="lg" loading={loading} className="mt-2">
          Se connecter
        </Button>
      </form>

      <p className="mt-6 text-center text-[12.5px] text-ink-600">
        Boutique pas encore configurée ?{" "}
        <a href="https://wa.me/22900000000" className="font-medium text-teal-700 underline">
          Contactez CovaLabs
        </a>
      </p>
    </div>
  );
}
