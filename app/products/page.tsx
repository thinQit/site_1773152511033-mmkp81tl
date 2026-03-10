export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import ProductCards from "@/components/ProductCards";
import CTASparkles from "@/components/CTASparkles";

export default function ProductsPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577705/site-images/hero-backgrounds/12981881.jpg"
        headline="Skincare and wellness essentials, curated."
        subheadline="We stock a small, intentional selection of products we trust—chosen for comfort, performance, and a luxurious sensorial feel."
        primaryCta={{ label: "Ask for a Routine", href: "/contact" }}
        secondaryCta={{ label: "Book a Facial", href: "/booking" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <ProductCards />
      </Section>
      <Section>
        <CTASparkles
          title="Want a simple routine that works?"
          subtitle="Tell us your skin type and goals. We’ll recommend a 3–4 step routine you can stick to."
          ctaLabel="Get Recommendations"
          ctaHref="/contact"
          secondaryCtaLabel="Book a Skin Consultation"
          secondaryCtaHref="/booking"
        />
      </Section>
    </>
  );
}
