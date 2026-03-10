"use client";

import { Facebook, Instagram, MapPin, Phone, Clock3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  brandName?: string;
  address?: string;
  phone?: string;
  hours?: string[];
  quickLinks?: FooterLink[];
}

export default function Footer({
  brandName = 'Serenity Wellness Spa',
  address = '214 Rosewood Ave, Suite 120, Austin, TX 78701',
  phone = '(512) 555-0138',
  hours = ['Mon–Thu: 9:00 AM – 8:00 PM', 'Fri–Sat: 9:00 AM – 9:00 PM', 'Sun: 10:00 AM – 6:00 PM'],
  quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Team', href: '#team' },
    { label: 'Products', href: '#products' },
  ],
}: Partial<FooterProps>) {
  return (
    <footer className="bg-[#2D2D2D] text-[#FFF5EE]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl">{brandName}</h3>
          <p className="text-sm text-[#FFF5EE]/80">
            An elevated sanctuary for massage therapy, facials, and holistic wellness rituals.
          </p>
          <Button asChild className="rounded-xl bg-[#B76E79] text-[#FFF5EE] hover:bg-[#a85f6a]">
            <a href="#booking">Book a Signature Experience</a>
          </Button>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg">Visit Us</h4>
          <p className="flex items-start gap-2 text-sm text-[#FFF5EE]/80">
            <MapPin className="mt-0.5 h-4 w-4 text-[#B76E79]" />
            {address}
          </p>
          <p className="flex items-center gap-2 text-sm text-[#FFF5EE]/80">
            <Phone className="h-4 w-4 text-[#B76E79]" />
            {phone}
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg">Hours</h4>
          <div className="space-y-2 text-sm text-[#FFF5EE]/80">
            {hours.map((line) => (
              <p key={line} className="flex items-start gap-2">
                <Clock3 className="mt-0.5 h-4 w-4 text-[#B76E79]" />
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif text-lg">Quick Links</h4>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="block text-sm text-[#FFF5EE]/80 hover:text-[#B76E79]">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="Instagram" className="rounded-full border border-[#B76E79]/40 p-2 hover:bg-[#B76E79]/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-[#B76E79]/40 p-2 hover:bg-[#B76E79]/20">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#B76E79]/20 py-4 text-center text-xs text-[#FFF5EE]/60">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}
