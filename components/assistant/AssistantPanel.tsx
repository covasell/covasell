"use client";

import { useState, useRef, useEffect } from "react";
import { ChatBubble } from "./ChatBubble";
import type { ChatMessage, Product, Store } from "@/lib/types";

function searchProducts(query: string, catalog: Product[]): Product[] {
  const q = query.toLowerCase();
  const priceMatch = q.match(/(\d[\d\s]*)\s*(fcfa)?/);
  const maxPrice = priceMatch ? parseInt(priceMatch[1].replace(/\s/g, ""), 10) : undefined;

  return catalog.filter((p) => {
    if (!p.available) return false;
    const matchesText =
      q.split(" ").some((word) => word.length > 2 && p.name.toLowerCase().includes(word)) ||
      p.category.toLowerCase().includes(q);
    const matchesPrice = maxPrice ? p.price <= maxPrice : true;
    return (matchesText || !maxPrice) && matchesPrice;
  });
}

interface AssistantPanelProps {
  store: Store;
  catalog: Product[];
}

export function AssistantPanel({ store, catalog }: AssistantPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", from: "bot", text: `Bonjour 👋🏽 Que recherchez-vous aujourd'hui ?` },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const query = input.trim();
    if (!query) return;

    const userMessage: ChatMessage = { id: crypto.randomUUID(), from: "user", text: query };
    const results = searchProducts(query, catalog);

    let botMessage: ChatMessage;
    if (results.length > 0) {
      botMessage = {
        id: crypto.randomUUID(),
        from: "bot",
        text: `Voici ${results.length > 1 ? results.length + " modèles" : "un modèle"} disponible${
          results.length > 1 ? "s" : ""
        } qui correspond${results.length > 1 ? "ent" : ""} :`,
        products: results.slice(0, 4),
      };
    } else {
      botMessage = {
        id: crypto.randomUUID(),
        from: "bot",
        text: "Je n'ai pas trouvé de produit correspondant. Vous pouvez reformuler, ou contacter directement la boutique sur WhatsApp. 📲",
      };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 bg-teal-900 px-4 py-4 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-sig-sm bg-coral-500 font-bold">
          {store.initial}
        </span>
        <div>
          <p className="font-display text-sm font-semibold">{store.name}</p>
          <p className="text-[11px] text-teal-100/80">● Répond en quelques secondes</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-3.5 overflow-y-auto bg-bg px-4 py-4">
        {messages.map((m) => (
          <ChatBubble key={m.id} message={m} />
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-border bg-surface p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Écrire un message…"
          className="flex-1 rounded-sig-sm bg-bg px-3.5 py-2.5 text-[13px] text-ink-900 outline-none placeholder:text-ink-400"
        />
        <button
          onClick={handleSend}
          aria-label="Envoyer"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-sig-sm bg-coral-500 text-white"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
