import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  height?: 'large' | 'medium';
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  height = 'medium',
}: PageHeroProps) {
  const heightClass = {
    large: 'min-h-[560px]',
    medium: 'min-h-[440px]',
  }[height];

  return (
    <section
      className={`relative isolate overflow-hidden bg-[#050A30] text-white ${heightClass}`}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#050A30]/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050A30]/55 via-[#050A30]/50 to-[#050A30]/35" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/55 via-transparent to-[#050A30]/20" />
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1266B6]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#5FC9E6]/10 blur-3xl"
      />

      <div className="relative z-10 flex min-h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            {eyebrow && (
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
                {eyebrow}
              </p>
            )}

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                {description}
              </p>
            )}

            {(primaryAction || secondaryAction) && (
              <div className="mt-9 flex flex-wrap gap-4">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                  >
                    {primaryAction.label}
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}