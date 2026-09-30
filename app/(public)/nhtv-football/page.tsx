import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Play,
  Trophy,
  Users,
} from 'lucide-react';

import SplitPageHero from '@/components/hero/SplitPageHero';
import ContentCard from '@/components/media/content/ContentCard';
import { getMediaContentByProperty } from '@/lib/content/media';

const modules = [
  {
    label: 'Fixtures',
    title: 'What is coming next?',
    text: 'Follow upcoming matches and the football calendar.',
    href: '/nhtv-football/fixtures',
    icon: CalendarDays,
  },
  {
    label: 'Results',
    title: 'What happened?',
    text: 'Keep up with completed matches and results.',
    href: '/nhtv-football/results',
    icon: Trophy,
  },
  {
    label: 'Teams',
    title: 'Meet the teams',
    text: 'Explore teams, players and competitions.',
    href: '/nhtv-football/teams',
    icon: Users,
  },
  {
    label: 'Videos',
    title: 'Watch football',
    text: 'Discover football video and visual coverage.',
    href: '/nhtv-football/videos',
    icon: Play,
  },
];

export default function NhtvFootballPage() {
  const content = getMediaContentByProperty('nhtv-football');

  return (
    <>
      <SplitPageHero
        eyebrow="NHTV FOOTBALL"
        title={
          <>
            Football beyond
            <span className="text-cyan-300"> the scoreline.</span>
          </>
        }
        description="Coverage that brings together matches, teams, players, competitions, results, stories and video."
        image="/images/media/hero/media-network.jpeg"
        primaryAction={{
          label: 'Fixtures',
          href: '/nhtv-football/fixtures',
        }}
        secondaryAction={{
          label: 'Explore teams',
          href: '/nhtv-football/teams',
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <Link
                  key={module.href}
                  href={module.href}
                  className="group rounded-2xl border border-[#050A30]/10 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <Icon
                    size={24}
                    className="text-cyan-700"
                    aria-hidden="true"
                  />
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#050A30]/45">
                    {module.label}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-[#050A30]">
                    {module.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#050A30]/60">
                    {module.text}
                  </p>
                  <ArrowRight
                    size={16}
                    className="mt-5 text-cyan-700 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl">
              <Image
                src="/images/media/hero/media-hero.png"
                alt="NHTV Football media coverage"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/70 to-transparent" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                The football desk
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Follow the game from every angle.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/60">
                NHTV Football is designed as a sports-media destination, not
                simply a fixture board. Results, teams, players, competitions
                and video all connect to the wider football story.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/nhtv-football/news"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#050A30]"
                >
                  Football news
                </Link>
                <Link
                  href="/nhtv-football/videos"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
                >
                  Watch videos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {content.length > 0 ? (
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Latest
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#050A30]">
              Latest football coverage
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.slice(0, 3).map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-cyan-400 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                NHTV Football
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                The game is bigger than ninety minutes.
              </h2>
            </div>

            <Link
              href="/nhtv-football"
              className="inline-flex items-center gap-2 text-sm font-bold"
            >
              Explore football
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
