import obsidian from "@/assets/product-obsidian.jpg";
import goldBox from "@/assets/product-gold-box.jpg";
import wheat from "@/assets/product-wheat.jpg";
import dogTag from "@/assets/product-dogtag.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "obsidian-pendant",
    name: "The Obsidian Pendant",
    price: 45.0,
    image: obsidian,
    tag: "Best Seller",
  },
  {
    id: "gold-box-chain",
    name: "Classic 18k Gold Box Chain",
    price: 55.0,
    image: goldBox,
    tag: "New Drop",
  },
  {
    id: "silver-wheat-chain",
    name: "Heavy Silver Wheat Chain",
    price: 50.0,
    image: wheat,
  },
  {
    id: "dog-tag-chain",
    name: "Embossed Dog Tag Chain",
    price: 40.0,
    image: dogTag,
  },
];

export const FREE_SHIPPING_THRESHOLD = 50;

export const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(n);
