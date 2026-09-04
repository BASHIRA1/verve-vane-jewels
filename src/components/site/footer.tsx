import { ArrowRight, Facebook, Instagram, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const LINKS = [
  "Shipping & Returns (UK)",
  "Care Guide",
  "Contact Us",
  "Terms",
];

const SOCIALS = [
  { icon: Music2, label: "TikTok" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer id="drops" className="border-t border-border/60 bg-emerald-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-[0.2em] text-foreground sm:text-3xl">
              JOIN THE CLUB
            </h2>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Early access to drops, restocks and members-only pricing. No
              noise, just the good stuff.
            </p>
            <form
              className="mt-6 flex max-w-md gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("You're in. Watch your inbox for the next drop.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <Input
                type="email"
                required
                placeholder="your@email.co.uk"
                aria-label="Email address"
                className="border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                className="bg-gold px-6 font-bold uppercase tracking-widest text-primary-foreground hover:bg-gold-soft"
              >
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Help
              </h3>
              <ul className="space-y-3">
                {LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Follow
              </h3>
              <div className="flex gap-2">
                {SOCIALS.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <span className="text-brand text-xs text-foreground">
            VERVE <span className="text-gold">&amp;</span> VANE
          </span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Verve &amp; Vane. Designed in the UK.
          </p>
        </div>
      </div>
    </footer>
  );
}
