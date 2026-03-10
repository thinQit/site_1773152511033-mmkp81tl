"use client";

import { Clock3, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactDetailsCardProps {
  address?: string;
  phone?: string;
  hours?: string[];
  mapLink?: string;
}

export default function ContactDetailsCard({
  address = '128 Rosewater Avenue, Suite 200, Beverly Hills, CA 90210',
  phone = '(310) 555-0148',
  hours = ['Mon–Thu: 9:00 AM – 8:00 PM', 'Fri–Sat: 9:00 AM – 9:00 PM', 'Sun: 10:00 AM – 6:00 PM'],
  mapLink = 'https://maps.google.com',
}: Partial<ContactDetailsCardProps>) {
  return (
    <Card className="rounded-2xl border border-[#B76E79]/25 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-[#2D2D2D]">Contact & Hours</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-[#2D2D2D]/90">
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 h-4 w-4 text-[#B76E79]" />
          {address}
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-[#B76E79]" />
          {phone}
        </p>
        <div className="space-y-1">
          {hours.map((line) => (
            <p key={line} className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#B76E79]" />
              {line}
            </p>
          ))}
        </div>
        <a href={mapLink} target="_blank" rel="noreferrer" className="inline-block text-[#B76E79] underline underline-offset-4">
          Open in Maps
        </a>
      </CardContent>
    </Card>
  );
}
