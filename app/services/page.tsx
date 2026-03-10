export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import MenuList from "@/components/MenuList";
import PricingTable from "@/components/PricingTable";
import MembershipBanner from "@/components/MembershipBanner";
import CTASparkles from "@/components/CTASparkles";
import RoseGoldDivider from "@/components/RoseGoldDivider";

export default function ServicesPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577174/site-images/beauty-salon/10318048.jpg"
        headline="Services & pricing designed for true restoration."
        subheadline="From therapeutic massage to glow-boosting facials, every treatment begins with a brief consultation and ends with personalized aftercare."
        primaryCta={{ label: "Book a Service", href: "/booking" }}
        secondaryCta={{ label: "Call for Couples Booking", href: "tel:+15125550138" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <MenuList />
      </Section>
      <RoseGoldDivider />
      <Section>
        <PricingTable
          headline="Membership"
          subheadline="Consistent care, preferred pricing, and priority booking."
          tiers={[
            {
              name: "Monthly Essential",
              price: "$129",
              period: "per month",
              description: "One 60-min service credit monthly.",
              features: ["Massage or facial credit", "10% off retail", "Priority booking"],
              ctaLabel: "Join Membership",
              ctaHref: "/contact",
            },
            {
              name: "Monthly Plus",
              price: "$229",
              period: "per month",
              description: "Two 60-min service credits monthly.",
              features: ["Two service credits", "15% off retail", "One complimentary add-on monthly"],
              ctaLabel: "Join Membership",
              ctaHref: "/contact",
              highlighted: true,
            },
          ]}
        />
        <MembershipBanner />
      </Section>
      <Section>
        <CTASparkles
          title="Not sure what to book?"
          subtitle="Tell us your goals—stress relief, recovery, glow, or calm—and we’ll recommend the perfect treatment."
          ctaLabel="Message the Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="Book Online"
          secondaryCtaHref="/booking"
        />
      </Section>
    </>
  );
}
