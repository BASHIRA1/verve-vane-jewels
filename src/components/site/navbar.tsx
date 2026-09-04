import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";

const NAV_LINKS = [
  { label: "Chains", to: "/chains" as const },
  { label: "Pendants", to: "/pendants" as const },
  { label: "Best Sellers", to: "/" as const, hash: "best-sellers" },
  { label: "Drops", to: "/" as const, hash: "best-sellers" },
];

export function Navbar() {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Mobile menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-gold"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-card text-foreground">
            <SheetHeader>
              <SheetTitle className="text-brand text-sm text-gold">
                VERVE &amp; VANE
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4 pt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  {...(link.hash ? { hash: link.hash } : {})}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Brand */}
        <Link to="/" className="text-brand text-sm sm:text-base text-foreground">
          VERVE <span className="text-gold">&amp;</span> VANE
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.to}
                    {...(link.hash ? { hash: link.hash } : {})}
                    className="gold-underline px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-gold"
            aria-label="Search"
          >
            <Search className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:inline-flex text-foreground hover:text-gold"
            aria-label="Account"
          >
            <User className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-foreground hover:text-gold"
            aria-label="Open cart"
            onClick={openCart}
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <Badge className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-gold p-0 text-[10px] font-bold text-primary-foreground hover:bg-gold">
                {count}
              </Badge>
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
