import Link from "next/link";

export function AssistantFab({ storeSlug }: { storeSlug: string }) {
  return (
    <Link
      href={`/${storeSlug}/assistant`}
      aria-label="Ouvrir l'assistant commercial"
      className="fixed bottom-24 right-4 z-40 flex items-center justify-center rounded-sig bg-coral-500 text-xl text-white shadow-md2"
      style={{ width: 52, height: 52 }}
    >
      💬
    </Link>
  );
}
