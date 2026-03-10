export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage";
import Section from "@/components/Section";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTASparkles from "@/components/CTASparkles";

export default function GalleryPage() {
  return (
    <>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577204/site-images/beauty-salon/15461411.jpg"
        headline="Step into calm."
        subheadline="Explore our lounge, treatment suites, and the details that make Serenity feel quietly luxurious."
        primaryCta={{ label: "Book a Visit", href: "/booking" }}
        secondaryCta={{ label: "See Services", href: "/services" }}
        overlayOpacity="bg-black/40"
      />
      <Section>
        <GalleryMasonry
          headline="Spaces & details"
          subheadline="Soft neutrals, warm textures, and rose-gold accents."
          images={[
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577204/site-images/beauty-salon/17371591.jpg", alt: "Spa lounge seating with cream upholstery and blush pillows", caption: "Lounge" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577212/site-images/beauty-salon/1654834.jpg", alt: "Herbal tea station with ceramic cups and dried botanicals", caption: "Tea Service" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577181/site-images/beauty-salon/11169551.jpg", alt: "Massage suite with warm lighting and plush linens", caption: "Massage" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577184/site-images/beauty-salon/15685120.jpg", alt: "Facial suite with skincare tools arranged neatly", caption: "Facials" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577216/site-images/beauty-salon/17784002.jpg", alt: "Hot stones warming tray with aromatherapy oils", caption: "Hot Stone" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577188/site-images/beauty-salon/12298452.jpg", alt: "Retail boutique shelf with skincare products", caption: "Boutique" },
          ]}
        />
      </Section>
      <Section>
        <CTASparkles
          title="Your quiet hour starts here."
          subtitle="Book online or reach out for couples appointments and package recommendations."
          ctaLabel="Book Online"
          ctaHref="/booking"
          secondaryCtaLabel="Call Us"
          secondaryCtaHref="tel:+15125550138"
        />
      </Section>
    </>
  );
}
