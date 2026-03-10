"use client";
import { SparklesCore } from "@/components/ui/backgrounds/sparkles";
import { Button } from "@/components/ui/button";

interface CTASparklesProps {
  title?: string;
  subtitle?: string;
  headline?: string; // backward compat
  description?: string; // backward compat
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  sparkleColor?: string;
}

export default function CTASparkles({
  title,
  subtitle,
  headline = "Ready for Your Signature Glow?",
  description = "Reserve your personalized session today.",
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  sparkleColor = "#f59e0b",
}: CTASparklesProps) {
  const resolvedTitle = title ?? headline;
  const resolvedSubtitle = subtitle ?? description;

  return (
    <section className="relative flex h-[30rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore id="cta-sparkles" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} particleColor={sparkleColor} />
      </div>
      <div className="relative z-10 px-4 text-center">
        <h2 className="text-center font-serif text-3xl font-bold text-white md:text-5xl lg:text-6xl">{resolvedTitle}</h2>
        {resolvedSubtitle && <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 md:text-lg">{resolvedSubtitle}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-[#f59e0b] px-8 py-6 text-lg text-black hover:bg-[#f59e0b]/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="border-[#f97316]/60 px-8 py-6 text-lg text-white hover:bg-[#ef4444]/20" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
