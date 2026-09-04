import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chain.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Close-up of a gold chain necklace on dark emerald silk"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-gold">
            UK Luxury Street-Luxe
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] text-foreground sm:text-7xl">
            The Bold
            <br />
            <span className="italic text-gold">Statement.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Premium UK chains and statement pendants built for the confident
            aesthetic.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-gold px-8 text-sm font-bold uppercase tracking-widest text-primary-foreground hover:bg-gold-soft"
              asChild
            >
              <Link to="/chains">
                Shop Chains
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold/50 bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-gold hover:bg-gold/10 hover:text-gold"
              asChild
            >
              <Link to="/pendants">View Pendants</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
