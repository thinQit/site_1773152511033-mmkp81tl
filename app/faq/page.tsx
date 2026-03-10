export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13216333.jpg"
        headline="Frequently asked questions"
        subheadline="Everything you need to know for a smooth, relaxing visit."
        primaryCta={{ label: "Book Now", href: "/booking" }}
        secondaryCta={{ label: "Contact Concierge", href: "/contact" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <FAQAccordion
          headline="Quick answers"
          subheadline="If you don’t see your question, message us anytime."
          items={[
            {
              question: "What should I wear to my appointment?",
              answer: "Wear whatever feels comfortable. For massage, you’ll be draped securely. For facials, we provide a wrap and headband.",
            },
            {
              question: "Can I book a couples massage?",
              answer: "Yes—couples appointments are available by request. Please call (512) 555-0138 for coordination.",
            },
            {
              question: "Do you offer pregnancy-safe services?",
              answer: "We offer prenatal massage in the 2nd–3rd trimester. Please share details during booking.",
            },
            {
              question: "What if I’m not sure which facial to choose?",
              answer: "Book any 60-minute facial and your esthetician will customize it after consultation.",
            },
            {
              question: "Do you sell gift cards?",
              answer: "Yes—gift cards are available for any amount and can be used toward services, packages, or retail.",
            },
          ]}
        />
      </Section>
    </>
  );
}
