import Link from "next/link";
import type { Recommendation } from "@/lib/types";

const toneStyles: Record<Recommendation["tone"], { icon: string; border: string; bg: string }> = {
  warning: { icon: "⚠️", border: "border-warning/30", bg: "bg-warning/5" },
  success: { icon: "🔥", border: "border-success/30", bg: "bg-success/5" },
  info: { icon: "💡", border: "border-info/30", bg: "bg-info/5" },
};

export function RecommendationCard({ rec }: { rec: Recommendation }) {
  const style = toneStyles[rec.tone];
  const isExternal = rec.ctaHref.startsWith("http");

  return (
    <div className={`rounded-sig border ${style.border} ${style.bg} p-3.5`}>
      <p className="text-[13px] leading-snug text-ink-900">
        <span className="mr-1">{style.icon}</span>
        {rec.message}
      </p>
      <p className="mt-2 text-[12.5px] font-medium text-ink-600">
        Action recommandée : {rec.action}
      </p>
      <Link
        href={rec.ctaHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="mt-2.5 inline-block rounded-sig-sm bg-teal-700 px-3 py-1.5 text-[12px] font-semibold text-white"
      >
        {rec.ctaLabel}
      </Link>
    </div>
  );
}
