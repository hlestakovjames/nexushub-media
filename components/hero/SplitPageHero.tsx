import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type SplitPageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
  backLink?: {
    label: string;
    href: string;
  };
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
};

export default function SplitPageHero({
  eyebrow,
  title,
  description,
  image,
  backLink,
  primaryAction,
  secondaryAction,
  children,
}: SplitPageHeroProps) {
  return (
    <section className="bg-[#050A30] text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2">
        <div className="flex items-center px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            {backLink && (
              <Link
                href={backLink.href}
                className="inline-flex text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
              >
                {backLink.label}
              </Link>
            )}

            {eyebrow && (
              <p
                className={
                  backLink
                    ? 'mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]'
                    : 'text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]'
                }
              >
                {eyebrow}
              </p>
            )}

            <h1 className="mt-5 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
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
                    className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}

            {children}
          </div>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
