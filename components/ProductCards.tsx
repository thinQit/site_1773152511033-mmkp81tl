"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  name: string;
  imageSrc: string;
  price: string;
  bestFor: string;
  usage: string;
}

interface ProductCardsProps {
  products?: Product[];
}

export default function ProductCards({
  products = [
    {
      name: 'Rose Quartz Cleansing Oil',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577204/site-images/beauty-salon/17371591.jpg',
      price: '$48',
      bestFor: 'Dry, dull skin',
      usage: 'Massage onto dry skin nightly, then rinse with warm water.',
    },
    {
      name: 'Botanical Recovery Serum',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577200/site-images/beauty-salon/15659486.jpg',
      price: '$72',
      bestFor: 'Post-treatment nourishment',
      usage: 'Apply 2 pumps morning and evening before moisturizer.',
    },
    {
      name: 'Lavender Body Elixir',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577199/site-images/beauty-salon/18623077.jpg',
      price: '$54',
      bestFor: 'Muscle relaxation',
      usage: 'Use after shower with circular strokes on shoulders and legs.',
    },
  ],
}: Partial<ProductCardsProps>) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {products.map((product) => (
        <Card key={product.name} className="overflow-hidden rounded-2xl border border-border">
          <div className="relative h-56 w-full">
            <Image src={product.imageSrc} alt={product.name} fill className="object-cover" unoptimized />
          </div>
          <CardContent className="space-y-2 p-5">
            <h4 className="font-serif text-2xl text-[#2D2D2D]">{product.name}</h4>
            <p className="text-lg font-semibold text-[#B76E79]">{product.price}</p>
            <p className="text-sm text-[#2D2D2D]">
              <span className="font-medium">Best for:</span> {product.bestFor}
            </p>
            <p className="text-sm text-muted-foreground">{product.usage}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
