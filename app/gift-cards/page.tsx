export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import PricingTable from "@/components/PricingTable";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTASparkles from "@/components/CTASparkles";

export default function GiftCardsPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577714/site-images/hero-backgrounds/1279813.jpg"
        headline="Give the gift of calm."
        subheadline="Serenity gift cards can be used for any service, package, membership payment, or retail product."
        primaryCta={{ label: "Buy a Gift Card", href: "/contact" }}
        secondaryCta={{ label: "View Packages", href: "/services" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <PricingTable
          headline="Suggested gift amounts"
          subheadline="Simple gifting for every occasion."
          tiers={[
            {
              name: "Starter Calm",
              price: "$100",
              period: "gift value",
              description: "Great for add-ons or partial service.",
              features: ["Flexible use", "Any service", "Boutique products"],
              ctaLabel: "Purchase",
              ctaHref: "/contact",
            },
            {
              name: "Glow Gift",
              price: "$160",
              period: "gift value",
              description: "Perfect for a 60-min signature facial.",
              features: ["Skin-focused", "Customizable", "Luxury experience"],
              ctaLabel: "Purchase",
              ctaHref: "/contact",
              highlighted: true,
            },
            {
              name: "Ritual Gift",
              price: "$295",
              period: "gift value",
              description: "Ideal for a complete package experience.",
              features: ["Package-ready", "Premium treatments", "Deep relaxation"],
              ctaLabel: "Purchase",
              ctaHref: "/contact",
            },
          ]}
        />
      </Section>
      <Section>
        <FeaturesGrid
          headline="Gift card details"
          features={[
            { icon: "BadgeCheck", title: "No expiration", description: "Gift cards do not expire and can be used anytime." },
            { icon: "RefreshCw", title: "Transferable", description: "Transfer to another recipient with the original code." },
            { icon: "Receipt", title: "Non-refundable", description: "Gift cards are non-refundable and cannot be redeemed for cash." },
          ]}
        />
      </Section>
      <Section>
        <CTASparkles
          title="Give calm. Give care."
          subtitle="Choose digital delivery by email or printed pickup in-spa."
          ctaLabel="Contact to Purchase"
          ctaHref="/contact"
          secondaryCtaLabel="Book with Gift Card"
          secondaryCtaHref="/booking"
        />
      </Section>
    </>
  );
}
