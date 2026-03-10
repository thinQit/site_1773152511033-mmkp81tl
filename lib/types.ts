export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface SectionBase {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image?: string;
}

export interface ServiceItem {
  name: string;
  duration?: string;
  price: number;
  description: string;
}

export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  quote: string;
}

export interface Product {
  name: string;
  price: number;
  description: string;
  bestFor?: string;
  howToUse?: string;
}
