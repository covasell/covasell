"use client";

import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink-900/40 sm:items-center">
      <div
        className="w-full max-w-md rounded-sig bg-surface p-5 shadow-md2 sm:mx-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-3 flex items-center justify-between">
          {title && <h2 className="font-display text-lg font-semibold text-ink-900">{title}</h2>}
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-ink-600 hover:bg-bg"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

interface ToastState {
  message: string;
  tone?: "success" | "error";
}

export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null);

  function showToast(message: string, tone: ToastState["tone"] = "success") {
    setToast({ message, tone });
    setTimeout(() => setToast(null), 2500);
  }

  return { toast, showToast };
}

export function Toast({ toast }: { toast: ToastState | null }) {
  useEffect(() => {}, [toast]);
  if (!toast) return null;
  return (
    <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-sig-sm bg-ink-900 px-4 py-2.5 text-sm text-white shadow-md2">
      {toast.message}
    </div>
  );
}
