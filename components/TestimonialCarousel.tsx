'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  service: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  intervalMs?: number;
}

export default function TestimonialCarousel({
  testimonials = [
    {
      name: 'Sophia L.',
      service: 'Hot Stone Ritual',
      quote: 'The ambiance is magical. I walked out lighter, calmer, and genuinely renewed.',
      rating: 5,
    },
    {
      name: 'Amelia R.',
      service: 'Age Renewal Facial',
      quote: 'My skin looked visibly brighter after one session. The care here is exceptional.',
      rating: 5,
    },
    {
      name: 'Maya K.',
      service: 'Aromatherapy Journey',
      quote: 'A perfect reset after a hectic month. Every detail feels luxurious and intentional.',
      rating: 5,
    },
  ],
  intervalMs = 5000,
}: Partial<TestimonialCarouselProps>) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, testimonials.length]);

  const current = testimonials[active];

  return (
    <Card className="rounded-2xl border border-border bg-white">
      <CardContent className="space-y-4 p-8 text-center">
        <div className="flex justify-center gap-1">
          {Array.from({ length: current.rating }).map((_, idx) => (
            <Star key={idx} className="h-5 w-5 fill-[#B76E79] text-[#B76E79]" />
          ))}
        </div>
        <p className="mx-auto max-w-2xl font-serif text-2xl text-[#2D2D2D]">“{current.quote}”</p>
        <p className="text-sm text-[#B76E79]">{current.service}</p>
        <p className="text-sm text-muted-foreground">— {current.name}</p>
        <div className="flex justify-center gap-2 pt-1">
          {testimonials.map((t, idx) => (
            <button
              key={t.name + idx}
              type="button"
              className={`h-2.5 w-2.5 rounded-full ${idx === active ? 'bg-[#B76E79]' : 'bg-[#F8E8E8]'}`}
              onClick={() => setActive(idx)}
              aria-label={'Go to testimonial ' + (idx + 1)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
