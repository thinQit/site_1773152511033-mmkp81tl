"use client";

import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MembershipBannerProps {
  title?: string;
  benefits?: string[];
  finePrint?: string;
}

export default function MembershipBanner({
  title = 'Serenity Circle Membership',
  benefits = ['One monthly 60-min treatment', '10% off all add-ons & retail', 'Priority weekend booking'],
  finePrint = '*Membership billed monthly. 3-month minimum commitment applies.',
}: Partial<MembershipBannerProps>) {
  return (
    <div className="rounded-2xl border border-[#B76E79]/30 bg-[#FFF5EE] p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F8E8E8] px-3 py-1 text-xs text-[#B76E79]">
            <Crown className="h-4 w-4" />
            MEMBERSHIP
          </p>
          <h3 className="font-serif text-3xl text-[#2D2D2D]">{title}</h3>
          <ul className="space-y-1 text-sm text-[#2D2D2D]/85">
            {benefits.map((benefit) => (
              <li key={benefit}>• {benefit}</li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">{finePrint}</p>
        </div>
        <Button asChild className="rounded-xl bg-[#B76E79] px-6 text-[#FFF5EE] hover:bg-[#a85f6a]">
          <a href="#contact">Join Now</a>
        </Button>
      </div>
    </div>
  );
}
