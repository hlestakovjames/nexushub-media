import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Headphones,
  Mic2,
  Play,
  Radio,
  Trophy,
} from 'lucide-react';

import MediaHeroSlider from '@/components/media/MediaHeroSlider';
import ContentCard from '@/components/media/content/ContentCard';
import { getAllMediaContent } from '@/lib/content/media';

const channels = [
  {
    name: 'Nexus Hub TV',
    label: 'Broadcast',
    description:
      'Shows, programmes, news, video and live experiences from the Nexus Hub television network.',
    href: '/nexus-hub-tv',
    image: '/images/media/hero/media-digital.jpeg',
    icon: Radio,
  },
  {
    name: 'NHTV Football',
    label: 'Sports',
    description:
      'Football coverage across teams, players, fixtures, results, competitions and video.',
    href: '/nhtv-football',
    image: '/images/media/hero/media-network.jpeg',
    icon: Trophy,
  },
  {
    name: 'NHTV Stories',
    label: 'Documentary',
    description:
      'People, culture, community and experiences told through meaningful stories.',
    href: '/nhtv-stories',
    image: '/images/media/hero/media-stories.jpeg',
    icon: Play,
  },
  {
    name: 'NHTV Voices',
    label: 'Conversations',
    description:
      'Interviews, podcasts, opinions, features and conversations that explore ideas.',
    href: '/nhtv-voices',
    image: '/images/media/hero/media-hub.jpeg',
    icon: Mic2,
  },
];

export default function MediaHomePage() {
  const content = getAllMediaContent();
  const featured = content.filter((item) => item.featured);
  const latest = content.slice(0, 4);

  return (
    <>
      <MediaHeroSlider />

      <section className="border-b border-[#050A30]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                Nexus Hub Media
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#050A30] sm:text-4xl">
                A media network built around people, stories and ideas.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#050A30]/65 sm:text-lg">
              Explore a connected collection of television, sport, stories and
              voices. Different formats, different audiences and different
              perspectives — brought together through one growing media
              platform.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                The network
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Choose your channel.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/55">
              Four media destinations, each with its own voice and format.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <Link
                  key={channel.href}
                  href={channel.href}
                  className="group relative min-h-[360px] overflow-hidden rounded-3xl bg-black"
                >
                  <Image
                    src={channel.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-[#050A30]/45 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <Icon size={18} aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">
                        {channel.label}
                      </span>
                    </div>

                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                      {channel.name}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                      {channel.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Explore channel
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {featured.length > 0 ? (
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                  Featured
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050A30] sm:text-4xl">
                  From the newsroom
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featured.slice(0, 2).map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {latest.length > 0 ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-end justify-between gap-6 border-b border-[#050A30]/10 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                  Latest
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050A30]">
                  Latest from Nexus Hub Media
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latest.map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="overflow-hidden bg-[#0B123F] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/media/Creative Branding Studio Setup.png"
              alt="Creative media production environment"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B123F]/70 lg:bg-gradient-to-r" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-8 lg:px-14">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                Beyond one format
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Watch it. Read it. Hear it. Follow the story.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65">
                Nexus Hub Media is designed to let stories move naturally
                between television, video, articles, conversations, sport and
                live experiences.
              </p>

              <Link
                href="/nexus-hub-tv"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-white"
              >
                Start exploring
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 text-[#050A30]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em]">
              Nexus Hub Media
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              Create • Connect • Grow
            </p>
          </div>

          <Link
            href="/nhtv-voices"
            className="inline-flex items-center gap-2 text-sm font-bold"
          >
            Explore NHTV Voices
            <Headphones size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
