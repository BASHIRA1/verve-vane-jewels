# Verve & Vane Luxe

Build a high-converting, mobile-first e-commerce website for a UK-based luxury jewelry brand named "Verve & Vane". 

### Tech Stack & Style Preferences:

- Design: Modern, high-contrast, street-luxe, clean dark aesthetic.

- UI Components: Use Shadcn UI (Cards, Dialogs, Sheet for slide-out cart, NavigationMenu, Buttons).

- Icons: Use Lucide-react icons (ShoppingBag, Search, Menu, X, ArrowRight, ShieldCheck, Truck, Sparkles).

- Color Palette (Tailwind CSS custom classes):

  * Primary Background: Deep Emerald Green (`#081C15`)

  * Surface Cards: Dark Marble Charcoal (`#121212`) or Light Warm Stone (`#E1D8C9`)

  * Accents: Brushed Gold (`#D4AF37`) for CTA buttons and highlighted text

  * Text: Crisp Off-White (`#F9F9F9`) for headings, Muted Gray (`#A1A1AA`) for secondary text

### Target Audience & Brand Vibe:

- Target: Male and fashion-forward unisex audience, ages 18–35 in the UK.

- Product Focus: Bold silver/gold chains (rope, wheat, box links) and geometric black/dark pendant necklaces.

---

### Key Page Sections to Build:

1. Sticky Navigation Bar:

   - Left: Brand Name "VERVE & VANE" in a bold, tracked-out serif font.

   - Center: Desktop Nav Links (Chains, Pendants, Best Sellers, Drops).

   - Right: Search trigger, Account icon, and a Cart Button with a badge showing item count.

   - Mobile: Clean drawer menu using Shadcn Sheet.

2. Hero Section:

   - Dark background with a full-width background video/image container showing a close-up of a gold chain.

   - Headline: "The Bold Statement."

   - Subheading: "Premium UK chains and statement pendants built for the confident aesthetic."

   - Primary CTA: "Shop Collection" button in Gold (`#D4AF37`) with dark text.

   - Secondary CTA: "View Drops" outlined button.

3. Features / Trust Banner:

   - A 3-column banner with Lucide icons:

     * Free UK Express Shipping over £50 (Truck icon)

     * Premium Stainless Steel & 18K Gold Plating (ShieldCheck icon)

     * Designed in the UK (Sparkles icon)

4. Featured Products Grid (4 Columns on Desktop, 2 Columns on Mobile):

   - Display a mock array of 4 products:

     1. "The Obsidian Pendant" - £45.00

     2. "Classic 18k Gold Box Chain" - £55.00

     3. "Heavy Silver Wheat Chain" - £50.00

     4. "Embossed Dog Tag Chain" - £40.00

   - Product Cards: Hover state shows a subtle gold border (`#D4AF37`), quick "Add to Bag" button on hover, clean visual presentation on dark cards.

5. Product Spotlight (Split Banner Layout):

   - Left side: Large featured product showcase (e.g., textured chain detail on marble pedestal).

   - Right side: Bold text block titled "Engineered for Street-Luxe," highlighting link density, weight, and durability. Includes a direct "Explore Craftsmanship" button.

6. Slide-Out Slide Cart (Shadcn Sheet Component):

   - Opens when clicking the cart icon or "Add to Bag".

   - Displays added items, subtotal in GBP (£), a free UK shipping progress bar, and a prominent "Proceed to Checkout" button.

7. Footer:

   - Newsletter signup input titled "JOIN THE CLUB" for drop announcements.

   - Footer links: Shipping & Returns (UK), Care Guide, Contact Us, Terms.

   - Social links: TikTok, Instagram, Facebook.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://verve-vane-jewels.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/503af087-1863-41bb-b53d-8284c04766c0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
