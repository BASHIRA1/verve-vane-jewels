import { ProductCard } from "@/components/site/product-grid";
import { productsByCategory, type Category } from "@/lib/products";

export function CategoryPage({ category }: { category: Category }) {
  const products = productsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-gold">
          {category.eyebrow}
        </p>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
          {category.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {category.description}
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {products.length} pieces
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
