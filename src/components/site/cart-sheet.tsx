import { Minus, Plus, ShoppingBag, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { FREE_SHIPPING_THRESHOLD, gbp } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function CartSheet() {
  const { items, subtotal, count, isOpen, closeCart, removeItem, updateQty } =
    useCart();

  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col bg-card text-foreground sm:max-w-md"
      >
        <SheetHeader className="border-b border-border/60">
          <SheetTitle className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            <ShoppingBag className="size-4 text-gold" />
            Your Bag ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag className="size-10 text-muted-foreground" strokeWidth={1} />
            <p className="text-sm text-muted-foreground">
              Your bag is empty. Time to make a statement.
            </p>
          </div>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-2">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-20 rounded-md border border-border/60 object-cover"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold leading-snug">
                      {product.name}
                    </p>
                    <button
                      onClick={() => removeItem(product.id)}
                      aria-label={`Remove ${product.name}`}
                      className="text-muted-foreground transition-colors hover:text-gold"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <p className="mt-1 text-sm font-bold text-gold">
                    {gbp(product.price * qty)}
                  </p>
                  <div className="mt-auto flex w-fit items-center gap-1 rounded-md border border-border/60">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 hover:text-gold"
                      onClick={() => updateQty(product.id, qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-3" />
                    </Button>
                    <span className="w-6 text-center text-xs font-semibold">
                      {qty}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 hover:text-gold"
                      onClick={() => updateQty(product.id, qty + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-border/60 px-4 py-4">
          <div className="mb-4">
            <p className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="size-4 text-gold" />
              {remaining > 0 ? (
                <span>
                  You&apos;re{" "}
                  <span className="font-bold text-gold">{gbp(remaining)}</span>{" "}
                  away from free UK express shipping
                </span>
              ) : (
                <span className="font-bold text-gold">
                  Free UK express shipping unlocked
                </span>
              )}
            </p>
            <Progress
              value={progress}
              className="h-1.5 bg-muted [&>div]:bg-gold"
            />
          </div>
          <Separator className="mb-4 bg-border/60" />
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Subtotal
            </span>
            <span className="text-lg font-bold text-foreground">
              {gbp(subtotal)}
            </span>
          </div>
          <Button
            size="lg"
            disabled={items.length === 0}
            className="w-full bg-gold text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-gold-soft"
          >
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
