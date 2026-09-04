import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import spotlight from "@/assets/spotlight.jpg";

const STATS = [
  { value: "6mm", label: "Link Density" },
  { value: "82g", label: "Solid Weight" },
  { value: "316L", label: "Steel Core" },
];

export function Spotlight() {
  return (
    <section id="chains" className="border-y border-border/60 bg-emerald-panel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[560px]">
          <img
            src={spotlight}
            alt="Textured gold chain draped over a white marble pedestal"
            loading="lazy"
            width={1200}
            height={1400}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-gold">
            The Craft
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            Engineered for
            <br />
            <span className="italic text-gold">Street-Luxe.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Every Verve &amp; Vane chain is built on a 316L stainless steel
            core with dense link architecture and 18K gold plating — weight
            you can feel, shine that holds, durability that outlasts trends.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Button
            size="lg"
            variant="outline"
            className="mt-10 w-fit border-gold/50 bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-gold hover:bg-gold/10 hover:text-gold"
          >
            Explore Craftsmanship
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
