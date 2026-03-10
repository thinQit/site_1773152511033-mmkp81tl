"use client";

import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTASection({
  title = 'Ready for Your Most Restorative Day?',
  description = 'Reserve your personalized spa ritual today and step into a calmer, more radiant you.',
  ctaLabel = 'Book Your Session',
  ctaHref = '#booking',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-[#2D2D2D] py-20">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="font-serif text-4xl text-[#FFF5EE] md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#FFF5EE]/80 md:text-base">{description}</p>
        <Button asChild className="mt-8 rounded-xl bg-[#B76E79] px-8 text-[#FFF5EE] hover:bg-[#a85f6a]">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </section>
  );
}
