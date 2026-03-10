"use client";

import { cn } from '@/lib/utils';

interface RoseGoldDividerProps {
  className?: string;
}

export default function RoseGoldDivider({ className = '' }: Partial<RoseGoldDividerProps>) {
  return <div className={cn('mx-auto h-px w-full max-w-7xl bg-gradient-to-r from-[#F8E8E8] via-[#B76E79] to-[#F8E8E8]', className)} />;
}
