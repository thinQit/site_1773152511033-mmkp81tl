"use client";

import { Plus } from 'lucide-react';

interface MenuDuration {
  length: string;
  price: string;
}

interface MenuService {
  service: string;
  durations: MenuDuration[];
  addOns: string[];
}

interface MenuListProps {
  title?: string;
  services?: MenuService[];
}

export default function MenuList({
  title = 'Detailed Service Menu',
  services = [
    {
      service: 'Signature Massage',
      durations: [
        { length: '60 min', price: '$145' },
        { length: '90 min', price: '$205' },
        { length: '120 min', price: '$265' },
      ],
      addOns: ['CBD Balm +$20', 'Scalp Therapy +$25'],
    },
    {
      service: 'Customized Facial',
      durations: [
        { length: '50 min', price: '$160' },
        { length: '80 min', price: '$225' },
      ],
      addOns: ['LED Therapy +$30', 'Collagen Mask +$35'],
    },
  ],
}: Partial<MenuListProps>) {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-3xl text-[#2D2D2D]">{title}</h3>
      {services.map((item) => (
        <div key={item.service} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h4 className="font-serif text-2xl text-[#2D2D2D]">{item.service}</h4>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {item.durations.map((duration) => (
              <div key={duration.length} className="rounded-xl bg-[#F8E8E8] px-4 py-3 text-sm">
                <p className="text-[#2D2D2D]">{duration.length}</p>
                <p className="font-medium text-[#B76E79]">{duration.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Add-ons</p>
            {item.addOns.map((addon) => (
              <p key={addon} className="flex items-center gap-2 text-sm text-[#2D2D2D]/90">
                <Plus className="h-4 w-4 text-[#B76E79]" />
                {addon}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
