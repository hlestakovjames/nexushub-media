import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Clapperboard,
  Play,
  Radio,
} from 'lucide-react';

import PageHero from '@/components/hero/PageHero';
import ContentCard from '@/components/media/content/ContentCard';
import LiveBroadcastCard from '@/components/media/live/LiveBroadcastCard';
import {
  getCurrentLiveBroadcasts,
  getUpcomingLiveBroadcasts,
  getMediaContentByProperty,
} from '@/lib/content/media';

export default function NexusHubTvPage() {
  const content = getMediaContentByProperty('nexus-hub-tv');
  const live = getCurrentLiveBroadcasts().filter(
    (broadcast) => broadcast.property === 'nexus-hub-tv',
  );
  const upcoming = getUpcomingLiveBroadcasts().filter(
    (broadcast) => broadcast.property === 'nexus-hub-tv',
  );

  return (
    <>
      <PageHero
        eyebrow="NEXUS HUB TV"
        title={
          <>
            Television that moves
            <span className="text-cyan-300"> with the story.</span>
          </>
        }
        description="Programmes, shows, news, video and live experiences from the Nexus Hub television network."
        image="/images/media/hero/media-digital.jpeg"
        primaryAction={{
          label: 'Watch videos',
          href: '/nexus-hub-tv/videos',
        }}
        secondaryAction={{
          label: 'Go live',
          href: '/nexus-hub-tv/live',
        }}
        height="large"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                label: 'Live',
                title: 'Watch live',
                text: 'See what is broadcasting now and discover upcoming live experiences.',
                href: '/nexus-hub-tv/live',
                icon: Radio,
              },
              {
                label: 'Programmes',
                title: 'Explore programmes',
                text: 'Browse the shows and recurring formats shaping the NHTV schedule.',
                href: '/nexus-hub-tv/programs',
                icon: CalendarDays,
              },
              {
                label: 'Video',
                title: 'Watch videos',
                text: 'Find the latest video experiences from Nexus Hub TV.',
                href: '/nexus-hub-tv/videos',
                icon: Play,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-[#050A30]/10 bg-[#F7F9FB] p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <Icon
                    size={26}
                    className="text-cyan-700"
                    aria-hidden="true"
                  />
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#050A30]/45">
                    {item.label}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#050A30]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#050A30]/60">
                    {item.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {live.length > 0 ? (
        <section className="bg-[#050A30] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                  On air
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Live now
                </h2>
              </div>

              <Link
                href="/nexus-hub-tv/live"
                className="hidden items-center gap-2 text-sm font-semibold text-cyan-300 sm:inline-flex"
              >
                View live
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {live.map((broadcast) => (
                <LiveBroadcastCard
                  key={broadcast.id}
                  stream={broadcast}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                NHTV
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050A30] sm:text-4xl">
                A television experience built for more than one screen.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#050A30]/60">
              Discover programming, follow the latest stories, watch video and
              join live moments as the Nexus Hub TV network grows.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#050A30]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[360px]">
                <Image
                  src="/images/media/hero/media-hub.jpeg"
                  alt="Nexus Hub TV media environment"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center p-8 text-white sm:p-12">
                <div>
                  <Clapperboard
                    size={30}
                    className="text-cyan-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                    Shows, programmes and video — connected.
                  </h3>
                  <p className="mt-5 leading-7 text-white/60">
                    The television property brings together scheduled
                    programming, on-demand video and live broadcasting in one
                    destination.
                  </p>
                  <Link
                    href="/nexus-hub-tv/shows"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                  >
                    Explore shows
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {upcoming.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Coming up
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#050A30]">
              Upcoming live experiences
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {upcoming.map((broadcast) => (
                <LiveBroadcastCard
                  key={broadcast.id}
                  stream={broadcast}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Latest
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#050A30]">
              Latest from NHTV
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.slice(0, 3).map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
