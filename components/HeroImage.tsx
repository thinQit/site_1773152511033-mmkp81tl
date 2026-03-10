'use client';

import { Button } from '@/components/ui/button';

interface HeroImageProps {
  imageUrl: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlayOpacity?: string;
}

export default function HeroImage({
  imageUrl = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/11829357.jpg',
  headline = 'Luxury Hair, Skin & Bridal Beauty in the Heart of the City',
  subheadline = 'Indulge in bespoke salon rituals designed by expert stylists, colorists, and skincare specialists for your most radiant look.',
  primaryCta = { label: 'Book Your Appointment', href: '#contact' },
  secondaryCta = { label: 'Explore Services', href: '#services' },
  overlayOpacity = 'bg-black/50',
}: Partial<HeroImageProps>) {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center md:min-h-[700px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
      <div className={'absolute inset-0 ' + overlayOpacity} />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center text-white">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">{headline}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-[#f59e0b] px-8 py-6 text-lg text-black hover:bg-[#f59e0b]/90" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="border-[#f59e0b] px-8 py-6 text-lg text-white hover:bg-[#f59e0b]/20" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
