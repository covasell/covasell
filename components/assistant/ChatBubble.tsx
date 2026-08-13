import Link from "next/link";
import type { ChatMessage } from "@/lib/types";

function formatFcfa(amount: number) {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
}

export function ChatBubble({ message }: { message: ChatMessage }) {
  const isBot = message.from === "bot";
  return (
    <div className={`flex flex-col gap-2 ${isBot ? "items-start" : "items-end"}`}>
      <div
        className={`max-w-[80%] px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
          isBot
            ? "rounded-sig-sm bg-surface text-ink-900 border border-border"
            : "rounded-[14px_14px_4px_14px] bg-teal-700 text-white"
        }`}
      >
        {message.text}
      </div>

      {message.products && message.products.length > 0 && (
        <div className="flex w-full gap-2.5 overflow-x-auto pb-1">
          {message.products.map((p) => (
            <Link
              key={p.id}
              href={`/${p.storeSlug}/produit/${p.id}`}
              className="flex-none w-32 overflow-hidden rounded-sig-sm border border-border bg-surface"
            >
              <div className="flex h-20 items-center justify-center bg-gradient-to-br from-teal-100 to-[#F3ECE3]" />
              <div className="p-2">
                <p className="line-clamp-2 text-[11.5px] font-medium leading-tight text-ink-900">
                  {p.name}
                </p>
                <p className="mt-0.5 text-xs font-bold text-teal-900">{formatFcfa(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
