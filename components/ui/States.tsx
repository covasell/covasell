import { ReactNode } from "react";
import { Button } from "./Button";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon = "🛍️", title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <span className="mb-3 text-4xl">{icon}</span>
      <p className="font-display text-base font-semibold text-ink-900">{title}</p>
      {description && <p className="mt-1 max-w-xs text-sm text-ink-600">{description}</p>}
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction} className="mt-4">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-20 animate-pulse rounded-sig bg-border/60" />
      ))}
    </div>
  );
}

export function ErrorState({ message, children }: { message: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-sig bg-error/5 px-5 py-8 text-center">
      <span className="text-2xl">⚠️</span>
      <p className="text-sm font-medium text-error">{message}</p>
      {children}
    </div>
  );
}
