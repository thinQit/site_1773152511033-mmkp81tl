'use client';

import Image from 'next/image';
import { Clock3, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SparklesEffect from '@/components/ui/backgrounds/sparkles';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function Hero({
  title = 'Luxury Wellness, Tailored to You',
  subtitle = 'Experience curated massages, luminous facials, and holistic rituals designed to restore body, skin, and spirit.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1771576864/site-images/corporate/1367269.jpg',
}: Partial<HeroProps>) {
  return (
    <section className="relative overflow-hidden bg-[#FFF5EE]">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="Luxury spa interior" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/75 via-[#2D2D2D]/50 to-[#2D2D2D]/30" />
      </div>
      <SparklesEffect className="absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-28 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-36">
        <div className="space-y-6 text-[#FFF5EE]">
          <p className="inline-block rounded-full border border-[#B76E79]/40 bg-[#B76E79]/20 px-4 py-1 text-xs tracking-[0.2em]">
            SERENITY WELLNESS SPA
          </p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="max-w-2xl text-sm text-[#FFF5EE]/90 md:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="rounded-xl bg-[#B76E79] text-[#FFF5EE] hover:bg-[#a85f6a]">
              <a href="#booking">Book Your Escape</a>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-[#FFF5EE]/50 bg-transparent text-[#FFF5EE] hover:bg-[#FFF5EE]/10">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-[#B76E79]" />
              Licensed Therapists
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-[#B76E79]" />
              Organic Products
            </span>
          </div>
        </div>

        <div className="self-end rounded-2xl border border-white/20 bg-white/10 p-6 text-[#FFF5EE] backdrop-blur">
          <h3 className="mb-4 font-serif text-2xl">Quick Info</h3>
          <p className="mb-3 flex items-center gap-2 text-sm">
            <Clock3 className="h-4 w-4 text-[#B76E79]" />
            Mon–Sat: 9:00 AM – 9:00 PM | Sun: 10:00 AM – 6:00 PM
          </p>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 text-[#B76E79]" />
            128 Rosewater Avenue, Beverly Hills, CA
          </p>
        </div>
      </div>
    </section>
  );
}
