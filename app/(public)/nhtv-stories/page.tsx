import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Heart,
  MapPin,
  Users,
} from 'lucide-react';

import SplitPageHero from '@/components/hero/SplitPageHero';
import ContentCard from '@/components/media/content/ContentCard';
import { getMediaContentByProperty } from '@/lib/content/media';

const destinations = [
  {
    label: 'People',
    title: 'The people behind the story.',
    description:
      'Profiles and personal journeys that put real people at the centre.',
    href: '/nhtv-stories/people',
    image: '/images/media/hero/media-stories.jpeg',
    icon: Users,
  },
  {
    label: 'Culture',
    title: 'Culture in motion.',
    description:
      'Ideas, traditions, creativity and everyday experiences worth seeing differently.',
    href: '/nhtv-stories/culture',
    image: '/images/media/hero/media-hub.jpeg',
    icon: Heart,
  },
  {
    label: 'Community',
    title: 'Stories from where we live.',
    description:
      'Community experiences, voices and moments that connect people.',
    href: '/nhtv-stories/community',
    image: '/images/media/hero/media-network.jpeg',
    icon: MapPin,
  },
];

export default function NhtvStoriesPage() {
  const content = getMediaContentByProperty('nhtv-stories');

  return (
    <>
      <SplitPageHero
        eyebrow="NHTV STORIES"
        title={
          <>
            There is always
            <span className="text-cyan-300"> more to the story.</span>
          </>
        }
        description="People, culture, community and experiences told with curiosity, context and a human perspective."
        image="/images/media/hero/media-stories.jpeg"
        primaryAction={{
          label: 'Featured stories',
          href: '/nhtv-stories/featured',
        }}
        secondaryAction={{
          label: 'Meet the people',
          href: '/nhtv-stories/people',
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Story desk
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#050A30] sm:text-4xl">
              Journalism that starts with people.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#050A30]/60">
              NHTV Stories is the documentary and feature side of Nexus Hub
              Media — a place for stories that deserve more than a headline.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {destinations.map((destination) => {
              const Icon = destination.icon;

              return (
                <Link
                  key={destination.href}
                  href={destination.href}
                  className="group relative min-h-[430px] overflow-hidden rounded-3xl bg-[#050A30]"
                >
                  <Image
                    src={destination.image}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-[#050A30]/40 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <Icon
                      size={23}
                      className="text-cyan-300"
                      aria-hidden="true"
                    />

                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                      {destination.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {destination.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/65">
                      {destination.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                      Explore
                      <ArrowRight
                        size={15}
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

      <section className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-5 border-b border-[#050A30]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                The latest
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#050A30] sm:text-4xl">
                Stories worth following
              </h2>
            </div>

            <Link
              href="/nhtv-stories/featured"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
            >
              Browse stories
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {content.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.slice(0, 3).map((item) => (
                <ContentCard key={item.id} content={item} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#050A30]">
                <Image
                  src="/images/media/hero/media-stories.jpeg"
                  alt="NHTV Stories"
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A30]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                    NHTV Stories
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    Coming soon: stories from the people and communities around
                    us.
                  </h3>
                </div>
              </div>

              <div className="flex items-center rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#050A30]/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                    Our promise
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[#050A30]">
                    Context before noise.
                  </h3>
                  <p className="mt-4 leading-7 text-[#050A30]/60">
                    We are building a storytelling destination where the
                    character, context and people behind a story matter.
                  </p>
                  <Link
                    href="/nhtv-stories/about"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                  >
                    About NHTV Stories
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              NHTV Stories
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Look closer. Listen longer. Tell the story properly.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
