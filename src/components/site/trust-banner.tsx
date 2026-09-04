import { ShieldCheck, Sparkles, Truck } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Free UK Express Shipping",
    description: "On all orders over £50",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description: "Premium stainless steel & 18K gold plating",
  },
  {
    icon: Sparkles,
    title: "Designed in the UK",
    description: "Crafted for the street-luxe aesthetic",
  },
];

export function TrustBanner() {
  return (
    <section className="border-y border-border/60 bg-card/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-center gap-4 px-6 py-6 sm:justify-center"
          >
            <Icon className="size-7 shrink-0 text-gold" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-bold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
