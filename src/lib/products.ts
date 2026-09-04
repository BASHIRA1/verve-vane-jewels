import silverRope from "@/assets/silver-rope-chain.jpg.asset.json";
import sterlingLink from "@/assets/sterling-link-chain.jpg.asset.json";
import silverFranco from "@/assets/silver-franco-chain.jpg.asset.json";
import silverFoxtail from "@/assets/silver-foxtail-chain.jpg.asset.json";
import silverCurb from "@/assets/silver-curb-chain.jpg.asset.json";
import goldBox from "@/assets/gold-box-chain.jpg.asset.json";
import goldCable from "@/assets/gold-cable-chain.jpg.asset.json";
import noirEdge from "@/assets/noir-edge-pendant.jpg.asset.json";
import stagNoir from "@/assets/stag-noir-pendant.jpg.asset.json";

export type CategorySlug = "chains" | "pendants";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: CategorySlug;
  description: string;
  tag?: string;
}

export interface Category {
  slug: CategorySlug;
  title: string;
  eyebrow: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "chains",
    title: "Chains",
    eyebrow: "The Foundation",
    description:
      "Solid rope, spiga, franco, curb and box links in sterling silver and 18K gold finish. Tarnish-resistant, built for daily wear.",
  },
  {
    slug: "pendants",
    title: "Pendants",
    eyebrow: "The Statement",
    description:
      "Sharp, minimal hardware. Onyx tablets and blacked-out tags on matched chains — the finishing move for any stack.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "silver-rope-chain",
    name: "Silver Rope Chain",
    price: 48.0,
    image: silverRope.url,
    category: "chains",
    description:
      "A tightly twisted rope link in polished sterling silver. Catches light from every angle.",
    tag: "Best Seller",
  },
  {
    id: "the-sterling-link",
    name: "The Sterling Link",
    price: 52.0,
    image: sterlingLink.url,
    category: "chains",
    description:
      "Woven sterling braid with a dense, fluid drape. Substantial without the weight.",
  },
  {
    id: "silver-franco-chain",
    name: "Silver Franco Chain",
    price: 58.0,
    image: silverFranco.url,
    category: "chains",
    description:
      "Four-sided franco weave, machined tight for a seamless mirror finish.",
    tag: "New Drop",
  },
  {
    id: "silver-foxtail-chain",
    name: "Silver Foxtail Chain",
    price: 54.0,
    image: silverFoxtail.url,
    category: "chains",
    description:
      "Flat foxtail links with a soft sheen. Sits flush against the collarbone.",
  },
  {
    id: "silver-curb-chain",
    name: "Heavy Silver Curb Chain",
    price: 62.0,
    image: silverCurb.url,
    category: "chains",
    description:
      "Wide, flattened curb links — the loudest piece in the vault. Lobster clasp secured.",
    tag: "Best Seller",
  },
  {
    id: "gold-box-chain",
    name: "18K Gold Box Chain",
    price: 65.0,
    image: goldBox.url,
    category: "chains",
    description:
      "Rounded box links in a rich 18K gold finish. Warm, architectural, unmistakable.",
    tag: "New Drop",
  },
  {
    id: "gold-cable-chain",
    name: "18K Gold Cable Chain",
    price: 45.0,
    image: goldCable.url,
    category: "chains",
    description:
      "A fine cable link for layering. Understated gold that plays well with pendants.",
  },
  {
    id: "noir-edge-pendant",
    name: "The Noir Edge Pendant",
    price: 55.0,
    image: noirEdge.url,
    category: "pendants",
    description:
      "Jet-black tablet set in a polished silver frame on a slim snake chain. Clean lines, zero noise.",
    tag: "Best Seller",
  },
  {
    id: "stag-noir-pendant",
    name: "The Stag Noir Pendant",
    price: 50.0,
    image: stagNoir.url,
    category: "pendants",
    description:
      "Matte black dog tag crowned with the gold Stag Noir crest, hung on a blackened box chain.",
    tag: "New Drop",
  },
];

export const productsByCategory = (slug: CategorySlug) =>
  PRODUCTS.filter((p) => p.category === slug);

export const FREE_SHIPPING_THRESHOLD = 50;

export const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(n);
