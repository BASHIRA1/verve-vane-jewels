import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { TrustBanner } from "@/components/site/trust-banner";
import { ProductGrid } from "@/components/site/product-grid";
import { Spotlight } from "@/components/site/spotlight";
import { PRODUCTS } from "@/lib/products";

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
    <>
      <Hero />
      <TrustBanner />
      <ProductGrid
        products={PRODUCTS.filter((p) => p.tag).slice(0, 4)}
        eyebrow="Featured"
        title="The Collection"
      />
      <Spotlight />
    </>
  );
}
