'use client';

import { useState } from 'react';
import { Menu, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  brandName?: string;
  items?: NavItem[];
  bookHref?: string;
}

export default function Navbar({
  brandName = 'Serenity Wellness Spa',
  items = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Team', href: '#team' },
    { label: 'Products', href: '#products' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  bookHref = '#booking',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B76E79]/20 bg-[#FFF5EE]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FFF5EE]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#B76E79]" />
          <span className="font-serif text-lg text-[#2D2D2D] md:text-xl">{brandName}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm text-[#2D2D2D]/90 transition-colors hover:text-[#2D2D2D]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#B76E79] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-xl bg-[#B76E79] px-6 py-2 text-[#FFF5EE] hover:bg-[#a85f6a]">
            <a href={bookHref}>Book</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#2D2D2D] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-[#B76E79]/20 bg-[#FFF5EE] transition-all md:hidden',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-2 py-2 text-[#2D2D2D] hover:bg-[#F8E8E8]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full rounded-xl bg-[#B76E79] text-[#FFF5EE] hover:bg-[#a85f6a]">
            <a href={bookHref} onClick={() => setOpen(false)}>
              Book Your Appointment
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
