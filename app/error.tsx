"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">Please try again. If the issue persists, contact us.</p>
      <button
        className="mt-6 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
