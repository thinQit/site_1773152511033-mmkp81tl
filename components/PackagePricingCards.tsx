"use client";

import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface Package {
  name: string;
  price: string;
  recommendedFor: string;
  includes: string[];
}

interface PackagePricingCardsProps {
  packages?: Package[];
}

export default function PackagePricingCards({
  packages = [
    {
      name: 'Glow Day Retreat',
      price: '$349',
      recommendedFor: 'First-time spa guests',
      includes: ['60-min signature massage', 'Hydra glow facial', 'Herbal tea lounge access'],
    },
    {
      name: 'Couples Harmony',
      price: '$620',
      recommendedFor: 'Anniversaries & special dates',
      includes: ['90-min couples massage', 'Aromatherapy ritual', 'Champagne & chocolate service'],
    },
    {
      name: 'Ultimate Renewal',
      price: '$495',
      recommendedFor: 'Stress recovery weekends',
      includes: ['Hot stone therapy', 'Age renewal facial', 'Guided breathwork session'],
    },
  ],
}: Partial<PackagePricingCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {packages.map((pkg) => (
        <Card key={pkg.name} className="rounded-2xl border border-border">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-[#2D2D2D]">{pkg.name}</CardTitle>
            <p className="text-2xl font-semibold text-[#B76E79]">{pkg.price}</p>
            <Badge className="w-fit bg-[#F8E8E8] text-[#B76E79] hover:bg-[#F8E8E8]">{pkg.recommendedFor}</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {pkg.includes.map((line) => (
              <p key={line} className="flex items-center gap-2 text-sm text-[#2D2D2D]">
                <CheckCircle2 className="h-4 w-4 text-[#B76E79]" />
                {line}
              </p>
            ))}
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full rounded-xl bg-[#B76E79] text-[#FFF5EE] hover:bg-[#a85f6a]">
              <a href="#booking">Book Package</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
