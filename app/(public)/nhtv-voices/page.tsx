import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Headphones,
  MessageCircle,
  Mic2,
  Quote,
} from 'lucide-react';

import SplitPageHero from '@/components/hero/SplitPageHero';
import ContentCard from '@/components/media/content/ContentCard';
import { getMediaContentByProperty } from '@/lib/content/media';

const formats = [
  {
    label: 'Podcasts',
    title: 'Conversations you can carry with you.',
    description:
      'Long-form audio and discussions built around people, ideas and experience.',
    href: '/nhtv-voices/podcasts',
    icon: Headphones,
  },
  {
    label: 'Interviews',
    title: 'Ask better questions.',
    description:
      'Conversations that give people room to explain what they know and believe.',
    href: '/nhtv-voices/interviews',
    icon: Mic2,
  },
  {
    label: 'Opinion',
    title: 'Ideas deserve a voice.',
    description:
      'Perspectives and analysis across technology, society, business and culture.',
    href: '/nhtv-voices/opinion',
    icon: MessageCircle,
  },
];

export default function NhtvVoicesPage() {
  const content = getMediaContentByProperty('nhtv-voices');
  const featured = content.filter((item) => item.featured);
  const latest = content.slice(0, 3);

  return (
    <>
      <SplitPageHero
        eyebrow="NHTV VOICES"
        title={
          <>
            Give ideas room
            <span className="text-cyan-300"> to breathe.</span>
          </>
        }
        description="Interviews, podcasts, opinions, features and conversations exploring the ideas shaping people, business, technology and culture."
        image="/images/media/hero/media-hub.jpeg"
        primaryAction={{
          label: 'Latest voices',
          href: '/nhtv-voices',
        }}
        secondaryAction={{
          label: 'Listen to podcasts',
          href: '/nhtv-voices/podcasts',
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                The conversation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#050A30] sm:text-4xl">
                Different perspectives. Better conversations.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#050A30]/60">
              NHTV Voices is where Nexus Hub Media slows down enough to listen
              — through interviews, podcasts, opinion and thoughtful features.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {formats.map((format) => {
              const Icon = format.icon;

              return (
                <Link
                  key={format.href}
                  href={format.href}
                  className="group rounded-2xl border border-[#050A30]/10 bg-[#F7F9FB] p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <Icon
                    size={25}
                    className="text-cyan-700"
                    aria-hidden="true"
                  />

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#050A30]/45">
                    {format.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#050A30]">
                    {format.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#050A30]/60">
                    {format.description}
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

      {featured.length > 0 ? (
        <section className="bg-[#050A30] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Featured voice
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {featured[0].title}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                  {featured[0].excerpt}
                </p>

                <Link
                  href={`/${featured[0].property}/${featured[0].slug}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:bg-white"
                >
                  Read the story
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <div className="relative min-h-[330px] overflow-hidden rounded-3xl">
                <Image
                  src={
                    featured[0].heroImage?.src ??
                    '/images/media/hero/media-hub.jpeg'
                  }
                  alt={featured[0].heroImage?.alt ?? 'NHTV Voices'}
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/65 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#050A30]">
                    <Quote size={14} aria-hidden="true" />
                    Featured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex items-end justify-between gap-6 border-b border-[#050A30]/10 pb-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                Latest Voices
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050A30] sm:text-4xl">
                Latest from the conversation
              </h2>
            </div>
          </div>

          {latest.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latest.map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-[#050A30]/10">
              <MessageCircle
                size={32}
                className="mx-auto text-cyan-700"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-2xl font-semibold text-[#050A30]">
                More voices are coming.
              </h3>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-[#050A30]/60">
                Interviews, podcasts, opinion and features will appear here as
                the NHTV Voices editorial desk publishes new work.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B123F] text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/media/hero/media-network.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              NHTV Voices
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Listen to people. Challenge ideas. Keep the conversation moving.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
