export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import ContactDetailsCard from "@/components/ContactDetailsCard";
import ContactForm from "@/components/ContactForm";
import CTASparkles from "@/components/CTASparkles";

export default function ContactPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577696/site-images/hero-backgrounds/12966920.jpg"
        headline="Questions? We’re here."
        subheadline="Reach out for package guidance, couples appointments, membership details, or product recommendations."
        primaryCta={{ label: "Call (512) 555-0138", href: "tel:+15125550138" }}
        secondaryCta={{ label: "Book Online", href: "/booking" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <ContactDetailsCard />
        <ContactForm
          headline="Contact details"
          subheadline="We respond to emails within 1 business day."
          contactInfo={[
            { icon: "MapPin", label: "Address", value: "214 Rosewood Ave, Suite 120, Austin, TX 78701" },
            { icon: "Phone", label: "Phone", value: "(512) 555-0138" },
            { icon: "Mail", label: "Email", value: "hello@serenitywellnessspa.com" },
          ]}
        />
      </Section>
      <Section>
        <CTASparkles
          title="Let us curate your perfect spa day."
          subtitle="Tell us what you’re feeling—tension, fatigue, dullness—and we’ll recommend a treatment plan."
          ctaLabel="Send a Message"
          ctaHref="#contact-details"
          secondaryCtaLabel="View Packages"
          secondaryCtaHref="/services"
        />
      </Section>
    </>
  );
}
