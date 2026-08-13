import { InputHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, className = "", ...rest }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-[13px] font-medium text-ink-900">
        {label}
      </label>
      <input
        id={inputId}
        className={`h-11 rounded-sig-sm border px-3.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-teal-700 ${
          error ? "border-error" : "border-border"
        } ${className}`}
        {...rest}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: ReactNode;
}

export function Select({ label, id, children, className = "", ...rest }: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={selectId} className="text-[13px] font-medium text-ink-900">
        {label}
      </label>
      <select
        id={selectId}
        className={`h-11 rounded-sig-sm border border-border bg-surface px-3.5 text-sm text-ink-900 outline-none focus:border-teal-700 ${className}`}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
}
