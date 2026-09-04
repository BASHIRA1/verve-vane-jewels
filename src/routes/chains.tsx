import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/category-page";
import { CATEGORIES } from "@/lib/products";

const category = CATEGORIES[0]!;

export const Route = createFileRoute("/chains")({
  head: () => ({
    meta: [
      { title: "Chains — Silver & 18K Gold | Verve & Vane" },
      {
        name: "description",
        content:
          "Shop Verve & Vane chains: rope, spiga, franco, foxtail, curb and box links in sterling silver and 18K gold. Free UK express shipping over £50.",
      },
      { property: "og:title", content: "Chains — Silver & 18K Gold | Verve & Vane" },
      {
        property: "og:description",
        content:
          "Solid silver and 18K gold chains built for daily wear. Free UK express shipping over £50.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CategoryPage category={category} />,
});
