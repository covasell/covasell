import { CartProvider } from "@/lib/cart-context";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto min-h-screen max-w-md bg-bg">{children}</div>
    </CartProvider>
  );
}
