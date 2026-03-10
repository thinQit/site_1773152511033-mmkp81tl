export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import FeaturesGrid from "@/components/FeaturesGrid";

export default function PoliciesPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577697/site-images/hero-backgrounds/1242348.jpg"
        headline="Spa policies"
        subheadline="Clear, respectful guidelines to keep the experience calm and consistent for every guest."
        primaryCta={{ label: "Book Appointment", href: "/booking" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <FeaturesGrid
          headline="What to know before you arrive"
          subheadline="Thank you for helping us maintain a serene environment."
          features={[
            { icon: "Clock3", title: "Arrival time", description: "Please arrive 10 minutes early. Late arrivals may shorten service time." },
            { icon: "CalendarX2", title: "Cancellation policy", description: "24-hour notice required. Late cancellations are charged 50%; no-shows 100%." },
            { icon: "VolumeX", title: "Quiet policy", description: "Please silence phones and help keep lounge and hallways peaceful." },
            { icon: "ShieldCheck", title: "Health considerations", description: "Share allergies, pregnancy, injuries, or conditions so we can tailor care safely." },
          ]}
        />
      </Section>
    </>
  );
}
