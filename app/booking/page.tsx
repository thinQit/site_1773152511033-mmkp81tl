export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import EmbedFrame from "@/components/EmbedFrame";
import CTASparkles from "@/components/CTASparkles";

export default function BookingPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/11829357.jpg"
        headline="Book your appointment"
        subheadline="Choose a service, select a provider, and reserve your time. For couples bookings or special requests, call us directly."
        primaryCta={{ label: "Call for Couples Booking", href: "tel:+15125550138" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <Steps />
      </Section>
      <Section>
        <EmbedFrame />
      </Section>
      <Section>
        <CTASparkles
          title="Need help choosing a service?"
          subtitle="Our concierge can match your goals to the ideal treatment and therapist."
          ctaLabel="Contact Concierge"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Services"
          secondaryCtaHref="/services"
        />
      </Section>
    </>
  );
}
