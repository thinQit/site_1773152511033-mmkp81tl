export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import FeaturesGrid from "@/components/FeaturesGrid";
import TeamGrid from "@/components/TeamGrid";
import CTASparkles from "@/components/CTASparkles";
import RoseGoldDivider from "@/components/RoseGoldDivider";

export default function AboutPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577228/site-images/beauty-salon/10318043.jpg"
        headline="Luxury wellness, grounded in care."
        subheadline="Serenity Wellness Spa was created as a quiet refuge in the city—where expert technique meets a calming, elevated environment."
        primaryCta={{ label: "Meet the Team", href: "/about#team" }}
        secondaryCta={{ label: "Book a Visit", href: "/booking" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <FeaturesGrid
          badge="Our Philosophy"
          headline="We believe wellness should feel both indulgent and effective."
          subheadline="Every service begins with listening, then tailoring technique, products, and pacing to your goals."
          features={[
            { icon: "Sparkles", title: "Expertise", description: "Licensed providers and ongoing advanced training." },
            { icon: "Heart", title: "Intentional calm", description: "A quiet environment designed to downshift stress." },
            { icon: "Sun", title: "Results you can feel", description: "Better mobility, hydration, and skin vitality." },
          ]}
        />
      </Section>
      <RoseGoldDivider />
      <Section>
        <TeamGrid
          headline="Your care team"
          subheadline="Specialists in massage therapy, skincare, and holistic wellness."
          members={[
            {
              name: "Ava Chen, LMT",
              title: "Lead Massage Therapist",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg",
              bio: "10+ years helping clients reduce chronic tension with a calm, precise approach.",
            },
            {
              name: "Sofia Martinez",
              title: "Senior Esthetician",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
              bio: "Known for gentle technique and glow-focused treatments for sensitive skin.",
            },
            {
              name: "Noah Brooks, LMT",
              title: "Recovery Therapist",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
              bio: "Blends therapeutic work with relaxation to help active clients move better.",
            },
          ]}
        />
      </Section>
      <Section>
        <CTASparkles
          title="Experience Serenity in person."
          subtitle="Book a signature service or ask us to curate a package for your goals."
          ctaLabel="Book Appointment"
          ctaHref="/booking"
          secondaryCtaLabel="View Gallery"
          secondaryCtaHref="/gallery"
        />
      </Section>
    </>
  );
}
