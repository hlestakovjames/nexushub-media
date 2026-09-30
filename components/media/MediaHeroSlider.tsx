'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

type MediaHeroSlide = {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imagePosition?: string;
  overlayClassName?: string;
};

const slides: MediaHeroSlide[] = [
  {
    id: 'media',
    image: '/images/media/hero/media-hero.png',
    eyebrow: 'NEXUS HUB MEDIA',
    title: 'One ecosystem. Four media experiences.',
    description:
      'Television, football, stories, and voices connected through one growing media ecosystem.',
    ctaLabel: 'Explore Media',
    ctaHref: '/nexus-hub-tv',
    imagePosition: 'center',
    overlayClassName:
      'bg-gradient-to-r from-[#050A30]/90 via-[#050A30]/55 to-[#050A30]/15',
  },
  {
    id: 'stories',
    image: '/images/media/hero/media-stories.jpeg',
    eyebrow: 'NHTV STORIES',
    title: 'Stories that bring people closer.',
    description:
      'Discover people, culture, community, and experiences through a more human lens.',
    ctaLabel: 'Explore Stories',
    ctaHref: '/nhtv-stories',
    imagePosition: 'center',
    overlayClassName:
      'bg-gradient-to-r from-[#050A30]/88 via-[#050A30]/48 to-transparent',
  },
  {
    id: 'tv',
    image: '/images/media/hero/media-digital.jpeg',
    eyebrow: 'NEXUS HUB TV',
    title: 'Watch. Discover. Stay connected.',
    description:
      'A television experience built around programmes, shows, videos, news, and live moments.',
    ctaLabel: 'Explore NHTV',
    ctaHref: '/nexus-hub-tv',
    imagePosition: 'center',
    overlayClassName:
      'bg-gradient-to-r from-[#050A30]/90 via-[#050A30]/52 to-[#050A30]/10',
  },
  {
    id: 'hub',
    image: '/images/media/hero/media-hub.jpeg',
    eyebrow: 'THE NEXUS',
    title: 'A connected media ecosystem.',
    description:
      'Different formats and perspectives brought together under the Nexus Hub Media experience.',
    ctaLabel: 'Explore Channels',
    ctaHref: '/nexus-hub-tv',
    imagePosition: 'center',
    overlayClassName:
      'bg-gradient-to-r from-[#050A30]/88 via-[#050A30]/50 to-transparent',
  },
  {
    id: 'voices',
    image: '/images/media/hero/media-network.jpeg',
    eyebrow: 'NHTV VOICES',
    title: 'Different perspectives. One media network.',
    description:
      'Conversations, interviews, podcasts, features, and opinions that give ideas room to breathe.',
    ctaLabel: 'Explore Voices',
    ctaHref: '/nhtv-voices',
    imagePosition: 'center',
    overlayClassName:
      'bg-gradient-to-r from-[#050A30]/90 via-[#050A30]/52 to-transparent',
  },
];

const AUTOPLAY_INTERVAL = 6500;

export default function MediaHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="relative min-h-[78vh] overflow-hidden bg-[#050A30] text-white sm:min-h-[82vh]"
      aria-label="Nexus Hub Media featured content"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: slide.imagePosition ?? 'center',
            }}
          />

          <div
            className={`absolute inset-0 ${
              slide.overlayClassName ??
              'bg-gradient-to-r from-[#050A30]/85 via-[#050A30]/45 to-transparent'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/75 via-transparent to-[#050A30]/10" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[78vh] items-end sm:min-h-[82vh]">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                {activeSlide.eyebrow}
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              {activeSlide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {activeSlide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={activeSlide.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#050A30]"
              >
                {activeSlide.ctaLabel}
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050A30]"
              >
                All Media
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-10 bg-cyan-400'
                    : 'w-5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft size={19} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
