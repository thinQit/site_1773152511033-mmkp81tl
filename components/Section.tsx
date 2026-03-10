"use client";

import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function Section({
  id = '',
  children = null,
  className = '',
  alternate = false,
}: Partial<SectionProps>) {
  return (
    <section id={id} className={cn('py-24 md:py-28', alternate ? 'bg-[#F8E8E8]' : 'bg-white', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  );
}
