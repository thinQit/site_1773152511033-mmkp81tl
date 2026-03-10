"use client";

import { CalendarCheck2, CreditCard, Sparkles } from 'lucide-react';

interface StepItem {
  title: string;
  description: string;
  icon: string;
}

interface StepsProps {
  steps?: StepItem[];
}

const iconMap = {
  CalendarCheck2,
  CreditCard,
  Sparkles,
};

export default function Steps({
  steps = [
    {
      title: 'Choose Your Experience',
      description: 'Browse massage, facial, and wellness rituals tailored to your needs.',
      icon: 'Sparkles',
    },
    {
      title: 'Select Date & Time',
      description: 'Pick your preferred therapist and reserve your ideal appointment slot.',
      icon: 'CalendarCheck2',
    },
    {
      title: 'Confirm & Unwind',
      description: 'Secure your booking and prepare for a luxurious restorative visit.',
      icon: 'CreditCard',
    },
  ],
}: Partial<StepsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, idx) => {
        const Icon = iconMap[step.icon as keyof typeof iconMap] || Sparkles;
        return (
          <div key={step.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F8E8E8] text-sm font-semibold text-[#B76E79]">
              {idx + 1}
            </p>
            <Icon className="mb-3 h-5 w-5 text-[#B76E79]" />
            <h4 className="font-serif text-2xl text-[#2D2D2D]">{step.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
