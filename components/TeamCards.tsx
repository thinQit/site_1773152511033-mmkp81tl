"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  specialties: string[];
  bio: string;
}

interface TeamCardsProps {
  members?: TeamMember[];
}

export default function TeamCards({
  members = [
    {
      name: 'Elena Maris',
      role: 'Lead Esthetician',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg',
      specialties: ['Hydration Facials', 'Skin Barrier Repair'],
      bio: 'Elena blends advanced skin science with calming touch to deliver luminous, healthy skin.',
    },
    {
      name: 'Noah Bennett',
      role: 'Massage Therapist',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg',
      specialties: ['Deep Tissue', 'Sports Recovery'],
      bio: 'Noah is known for therapeutic precision and personalized sessions that release deep tension.',
    },
    {
      name: 'Camila Rose',
      role: 'Holistic Specialist',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg',
      specialties: ['Aromatherapy', 'Mindfulness Rituals'],
      bio: 'Camila creates sensory wellness journeys that restore calm and inner balance.',
    },
  ],
}: Partial<TeamCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {members.map((member) => (
        <Card key={member.name} className="overflow-hidden rounded-2xl border border-border">
          <div className="relative h-72 w-full">
            <Image src={member.imageSrc} alt={member.name} fill className="object-cover" unoptimized />
          </div>
          <CardContent className="space-y-3 p-5">
            <h4 className="font-serif text-2xl text-[#2D2D2D]">{member.name}</h4>
            <p className="text-sm text-[#B76E79]">{member.role}</p>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty) => (
                <Badge key={specialty} className="bg-[#F8E8E8] text-[#B76E79] hover:bg-[#F8E8E8]">
                  {specialty}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
