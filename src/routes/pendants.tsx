import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/category-page";
import { CATEGORIES } from "@/lib/products";

const category = CATEGORIES[1]!;

export const Route = createFileRoute("/pendants")({
  head: () => ({
    meta: [
      { title: "Pendants — Onyx & Blackout Tags | Verve & Vane" },
      {
        name: "description",
        content:
          "Statement pendants from Verve & Vane: onyx tablets and blacked-out dog tags on matched chains. Free UK express shipping over £50.",
      },
      {
        property: "og:title",
        content: "Pendants — Onyx & Blackout Tags | Verve & Vane",
      },
      {
        property: "og:description",
        content:
          "Onyx tablets and blacked-out tags on matched chains — the finishing move for any stack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CategoryPage category={category} />,
});
