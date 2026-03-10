export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import ServiceCategoryCards from "@/components/ServiceCategoryCards";
import PackagePricingCards from "@/components/PackagePricingCards";
import MembershipBanner from "@/components/MembershipBanner";
import TeamGrid from "@/components/TeamGrid";
import GalleryMasonry from "@/components/GalleryMasonry";
import ProductCards from "@/components/ProductCards";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CTASparkles from "@/components/CTASparkles";
import ContactForm from "@/components/ContactForm";
import ContactDetailsCard from "@/components/ContactDetailsCard";
import RoseGoldDivider from "@/components/RoseGoldDivider";

export default function HomePage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577178/site-images/beauty-salon/11360227.jpg"
        headline="A serene escape for skin, body, and spirit."
        subheadline="Serenity Wellness Spa is an upscale day spa in Rosewood District offering massage therapy, advanced facials, aromatherapy, hot stone rituals, and holistic wellness packages—crafted for deep relaxation and visible results."
        primaryCta={{ label: "Book an Appointment", href: "/booking" }}
        secondaryCta={{ label: "View Services & Pricing", href: "/services" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <ServiceCategoryCards />
      </Section>
      <RoseGoldDivider />
      <Section>
        <PackagePricingCards />
        <MembershipBanner />
      </Section>
      <Section>
        <TeamGrid
          headline="Expert hands. Calm presence."
          subheadline="Our licensed therapists and estheticians specialize in results-driven care with a luxury touch."
          members={[
            {
              name: "Ava Chen, LMT",
              title: "Lead Massage Therapist",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
              bio: "Ava blends clinical technique with spa-level comfort, focusing on shoulder and neck tension.",
            },
            {
              name: "Sofia Martinez",
              title: "Senior Esthetician",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              bio: "Sofia is known for calming facial massage and skin-barrier-first protocols.",
            },
            {
              name: "Noah Brooks, LMT",
              title: "Wellness & Recovery Therapist",
              imageUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              bio: "Noah helps active clients improve mobility and recover faster with therapeutic care.",
            },
          ]}
        />
      </Section>
      <RoseGoldDivider />
      <Section>
        <GalleryMasonry
          headline="A space designed for quiet luxury."
          subheadline="Soft lighting, warm textures, and a calm lounge—so your relaxation starts before the treatment begins."
          images={[
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576912/site-images/corporate/10384120.jpg",
              alt: "Cream-toned spa lounge with blush accents and tea service",
              caption: "Lounge",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577220/site-images/beauty-salon/14615063.jpg",
              alt: "Treatment room with massage table and warm lighting",
              caption: "Treatment Suite",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577174/site-images/beauty-salon/10775084.jpg",
              alt: "Facial bed setup with clean towels and skincare tools",
              caption: "Facials",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576893/site-images/corporate/10041276.jpg",
              alt: "Hot stone setup with basalt stones and aromatherapy oils",
              caption: "Hot Stone",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
              alt: "Retail shelf with curated skincare and wellness products",
              caption: "Boutique",
            },
            {
              url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577220/site-images/beauty-salon/10318045.jpg",
              alt: "Close-up of aromatherapy oils and botanicals on a tray",
              caption: "Aromatherapy",
            },
          ]}
        />
      </Section>
      <Section>
        <ProductCards />
      </Section>
      <RoseGoldDivider />
      <Section>
        <TestimonialsGrid
          headline="Loved by clients who value calm and quality."
          subheadline="A few words from guests who made Serenity part of their self-care routine."
          testimonials={[
            {
              quote:
                "The facial massage was unreal—my skin looked brighter immediately, and the whole experience felt genuinely luxurious.",
              name: "Danielle R.",
              title: "Rose Quartz Glow Facial",
              avatarUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
              rating: 5,
            },
            {
              quote:
                "Best deep tissue I’ve had in Austin. Targeted, professional, and still relaxing. My shoulders finally feel normal again.",
              name: "Michael T.",
              title: "Deep Tissue Release",
              avatarUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
              rating: 5,
            },
            {
              quote:
                "The hot stones and aromatherapy put me into a different universe. The lounge tea service afterward was the perfect finish.",
              name: "Priya S.",
              title: "Stone & Soul Package",
              avatarUrl:
                "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
              rating: 5,
            },
          ]}
        />
      </Section>
      <Section>
        <CTASparkles
          title="Ready to exhale?"
          subtitle="Book online in minutes. Prefer guidance? Our concierge will help you choose the right treatment and therapist."
          ctaLabel="Book Now"
          ctaHref="/booking"
          secondaryCtaLabel="Call (512) 555-0138"
          secondaryCtaHref="tel:+15125550138"
        />
      </Section>
      <Section>
        <ContactDetailsCard />
        <ContactForm
          headline="Visit Serenity Wellness Spa"
          subheadline="We’re located in the Rosewood District with easy garage parking and a calm, private entrance."
          contactInfo={[
            { icon: "MapPin", label: "Address", value: "214 Rosewood Ave, Suite 120, Austin, TX 78701" },
            { icon: "Phone", label: "Phone", value: "(512) 555-0138" },
            { icon: "Mail", label: "Email", value: "hello@serenitywellnessspa.com" },
          ]}
        />
      </Section>
    </>
  );
}
