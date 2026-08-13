import Link from "next/link";
import { mockStore } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-teal-900">CovaSell — Prototype UI/UX</h1>
      <p className="max-w-sm text-sm text-ink-600">
        Base de code pour reprise développeur. Choisissez un point d'entrée :
      </p>
      <div className="flex flex-col gap-3 pt-2">
        <Link
          href={`/${mockStore.slug}`}
          className="rounded-sig-sm bg-coral-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Voir la boutique cliente →
        </Link>
        <Link
          href="/connexion"
          className="rounded-sig-sm border border-teal-700 px-6 py-3 text-sm font-semibold text-teal-700"
        >
          Voir l&apos;espace commerçant →
        </Link>
      </div>
    </main>
  );
}
