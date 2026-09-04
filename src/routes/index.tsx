import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/lib/cart";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBanner } from "@/components/site/trust-banner";
import { ProductGrid } from "@/components/site/product-grid";
import { Spotlight } from "@/components/site/spotlight";
import { CartSheet } from "@/components/site/cart-sheet";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verve & Vane — Luxury UK Chains & Statement Pendants" },
      {
        name: "description",
        content:
          "Premium UK chains and statement pendants built for the confident aesthetic. Bold silver & 18K gold chains, free UK express shipping over £50.",
      },
      {
        property: "og:title",
        content: "Verve & Vane — Luxury UK Chains & Statement Pendants",
      },
      {
        property: "og:description",
        content:
          "Premium UK chains and statement pendants built for the confident aesthetic. Bold silver & 18K gold chains.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <TrustBanner />
          <ProductGrid />
          <Spotlight />
        </main>
        <Footer />
        <CartSheet />
        <Toaster theme="dark" position="bottom-center" />
      </div>
    </CartProvider>
  );
}
