'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type HeroSlide = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

type HeroSliderProps = {
  slides: HeroSlide[];
  height?: 'screen' | 'large' | 'medium';
};

export default function HeroSlider({
  slides,
  height = 'screen',
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const slide = slides[currentSlide];

  const heightClass = {
    screen: 'min-h-[calc(100vh-4rem)]',
    large: 'min-h-[680px]',
    medium: 'min-h-[560px]',
  }[height];

  return (
    <section
      className={`relative isolate overflow-hidden bg-[#050A30] text-white ${heightClass}`}
      aria-label="Nexus Hub featured content"
    >
      {/* BACKGROUND IMAGES */}
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />

          {/* IMAGE OVERLAYS */}
          <div className="absolute inset-0 bg-[#050A30]/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050A30]/70 via-[#050A30]/50 to-[#050A30]/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/55 via-transparent to-[#050A30]/20" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              {slide.eyebrow}
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              {slide.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={slide.primaryAction.href}
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                {slide.primaryAction.label}
              </Link>

              {slide.secondaryAction && (
                <Link
                  href={slide.secondaryAction.href}
                  className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {slide.secondaryAction.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SLIDE CONTROLS */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    index === currentSlide
                      ? 'true'
                      : undefined
                  }
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-10 bg-[#5FC9E6]'
                      : 'w-5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <span className="text-xs font-medium tracking-[0.2em] text-white/50">
              {String(currentSlide + 1).padStart(2, '0')} /{' '}
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}