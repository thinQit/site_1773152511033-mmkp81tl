"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
}

interface Category {
  title: string;
  items: ServiceItem[];
}

interface ServiceCategoryCardsProps {
  categories?: Category[];
}

export default function ServiceCategoryCards({
  categories = [
    {
      title: 'Massage Therapy',
      items: [
        { name: 'Swedish Serenity', duration: '60 min', price: '$145' },
        { name: 'Deep Tissue Reset', duration: '75 min', price: '$175' },
        { name: 'Hot Stone Ritual', duration: '90 min', price: '$210' },
      ],
    },
    {
      title: 'Facial Treatments',
      items: [
        { name: 'Hydra Glow Facial', duration: '50 min', price: '$160' },
        { name: 'Age Renewal Lift', duration: '75 min', price: '$205' },
        { name: 'Oxygen Brightening', duration: '60 min', price: '$185' },
      ],
    },
    {
      title: 'Holistic Wellness',
      items: [
        { name: 'Aromatherapy Journey', duration: '60 min', price: '$155' },
        { name: 'Sound & Scalp Therapy', duration: '45 min', price: '$120' },
        { name: 'Mind-Body Reset', duration: '90 min', price: '$230' },
      ],
    },
  ],
}: Partial<ServiceCategoryCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {categories.map((category) => (
        <Card key={category.title} className="rounded-2xl border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-[#2D2D2D]">{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {category.items.map((item) => (
              <div key={item.name} className="rounded-xl bg-[#FFF5EE] p-4">
                <p className="font-medium text-[#2D2D2D]">{item.name}</p>
                <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{item.duration}</span>
                  <span className="text-[#B76E79]">{item.price}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
