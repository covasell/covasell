interface KpiCardProps {
  label: string;
  value: string;
  tone?: "default" | "coral";
}

export function KpiCard({ label, value, tone = "default" }: KpiCardProps) {
  return (
    <div className="rounded-sig-sm border border-border bg-surface p-3.5">
      <p className="mb-1.5 text-[11px] text-ink-600">{label}</p>
      <p className={`font-display text-xl font-bold ${tone === "coral" ? "text-coral-600" : "text-teal-900"}`}>
        {value}
      </p>
    </div>
  );
}
