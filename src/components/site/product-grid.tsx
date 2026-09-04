import { ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCTS, gbp, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <Card className="group overflow-hidden border-border/60 bg-card py-0 transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_-8px_var(--color-gold)]">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <Badge className="absolute left-3 top-3 bg-gold text-[10px] font-bold uppercase tracking-widest text-primary-foreground hover:bg-gold">
            {product.tag}
          </Badge>
        )}
        <Button
          onClick={() => addItem(product)}
          className="absolute inset-x-3 bottom-3 translate-y-2 bg-gold text-xs font-bold uppercase tracking-widest text-primary-foreground opacity-0 transition-all duration-300 hover:bg-gold-soft group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag className="mr-2 size-4" />
          Add to Bag
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
          {product.description}
        </p>
        <p className="mt-2 text-sm font-bold text-gold">{gbp(product.price)}</p>
      </CardContent>
    </Card>
  );
}

export function ProductGrid({
  products = PRODUCTS,
  eyebrow = "Featured",
  title = "The Collection",
  showViewAll = true,
}: {
  products?: Product[];
  eyebrow?: string;
  title?: string;
  showViewAll?: boolean;
}) {
  return (
    <section id="best-sellers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-gold">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>
        {showViewAll && (
          <Link
            to="/chains"
            className="gold-underline hidden text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground sm:block"
          >
            View All
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
