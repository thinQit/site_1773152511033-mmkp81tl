"use client";

interface EmbedFrameProps {
  src?: string;
  title?: string;
  fallbackHref?: string;
}

export default function EmbedFrame({
  src = 'https://example.com',
  title = 'Online Booking',
  fallbackHref = '#booking',
}: Partial<EmbedFrameProps>) {
  return (
    <div className="space-y-3">
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-[#FFF5EE] pt-[65%]">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Having trouble loading?{' '}
        <a href={fallbackHref} className="text-[#B76E79] underline underline-offset-4">
          Open booking page
        </a>
      </p>
    </div>
  );
}
