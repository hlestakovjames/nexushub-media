import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const videoCategories = [
  {
    number: '01',
    title: 'Episodes',
    description:
      'Published episodes from recurring NHTV shows and series, organized so audiences can discover and return to them.',
  },
  {
    number: '02',
    title: 'Interviews',
    description:
      'Recorded conversations and interviews featuring people, expertise, experiences, and perspectives from across the Nexus Hub ecosystem.',
  },
  {
    number: '03',
    title: 'Features',
    description:
      'Longer-form visual stories, documentaries, field features, and productions built around a specific subject or narrative.',
  },
  {
    number: '04',
    title: 'Highlights & Clips',
    description:
      'Shorter extracts, highlights, previews, memorable moments, and supporting video content derived from larger productions.',
  },
];

const discoveryFeatures = [
  {
    title: 'Featured Videos',
    description:
      'Give selected productions prominent placement when a particular video deserves greater visibility.',
  },
  {
    title: 'Latest Videos',
    description:
      'Surface recently published content so returning audiences can quickly discover what is new.',
  },
  {
    title: 'Browse by Category',
    description:
      'Help audiences filter the library by format, subject, show, series, or other editorial classifications.',
  },
  {
    title: 'Related Content',
    description:
      'Connect each video with its show, programme, news coverage, related stories, and other relevant NHTV content.',
  },
];

export default function NexusHubTVVideosPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Videos"
        title={
          <>
            Watch the stories,
            <br />
            conversations, and productions.
          </>
        }
        description="NHTV Videos is the permanent watchable-content library for Nexus Hub TV, bringing published episodes, interviews, features, clips, highlights, and other video releases into one discoverable experience."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore Shows',
          href: '/nexus-hub-tv/shows',
        }}
        secondaryAction={{
          label: 'Explore Live',
          href: '/nexus-hub-tv/live',
        }}
        height="large"
      />

      {/* POSITIONING */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Video Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One place for published NHTV video.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Videos are the individual watchable media assets published by
                Nexus Hub TV. They can originate from shows, interviews, live
                broadcasts, special productions, or other editorial work.
              </p>

              <p>
                Unlike the Shows section, which describes the production
                itself, or Programs, which describes the broader programming
                structure, Videos focuses on the actual media that audiences
                can watch.
              </p>

              <p>
                Over time, this library can grow into a searchable and
                filterable archive with categories, playlists, related media,
                featured releases, and individual video pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Video
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A prominent space for the video that matters most.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The featured area is designed for a major release, important
                episode, special production, or editorial highlight selected
                by the NHTV content team.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Video library
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#050A30] shadow-sm">
            <div className="grid min-h-[440px] lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative flex items-end overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.20),_transparent_42%)]" />

                <div className="relative">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                    Featured Production
                  </span>

                  <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Your featured NHTV video will appear here.
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                    This presentation area is ready for a real video thumbnail,
                    player, title, summary, show information, and viewing
                    action once the video library is connected.
                  </p>

                  <div className="mt-7">
                    <Link
                      href="/nexus-hub-tv/videos"
                      className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                    >
                      Watch Featured Video
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-8 lg:border-l lg:border-t-0">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <span className="ml-1 text-2xl text-[#5FC9E6]">▶</span>
                  </div>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                    Video Player
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Player integration can be connected here when a published
                    video is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different formats. One watchable library.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The library should help audiences understand what they are
              watching while making it easy to discover content by format.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {videoCategories.map((category) => (
              <article
                key={category.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {category.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for finding the right video quickly.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A strong video library is not just a collection of files. It
              needs useful discovery, context, relationships, and clear
              pathways between related pieces of content.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {discoveryFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold">{feature.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO DATA MODEL */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Video Content Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every video should carry its own context.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                When the content system is connected, each published video can
                contain the information needed for both viewing and discovery.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-l border-white/15 pl-6">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  IDENTITY
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Title & Thumbnail
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  A clear title, visual identity, short description, and
                  presentation image.
                </p>
              </div>

              <div className="border-l border-white/15 pl-6">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  CLASSIFICATION
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Category & Tags
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Classification that helps audiences discover related
                  material.
                </p>
              </div>

              <div className="border-l border-white/15 pl-6">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  RELATIONSHIPS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Show & Programme
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Connections to the show, programme, series, event, or live
                  broadcast that produced the video.
                </p>
              </div>

              <div className="border-l border-white/15 pl-6">
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  PUBLICATION
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Date & Status
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Publication date, availability, visibility, and other
                  publishing information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLAYLISTS / COLLECTIONS */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Collections
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Turn individual videos into viewing journeys.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                As the library grows, curated collections and playlists can
                group videos around shows, subjects, seasons, special
                productions, events, or editorial themes.
              </p>

              <Link
                href="/nexus-hub-tv/shows"
                className="mt-8 inline-flex rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Shows
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  SERIES
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Watch a show
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Group episodes from the same recurring production.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  TOPICS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Explore a subject
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Bring related productions together around a shared theme.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  SPECIALS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Follow an event
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Organize videos from a major event or special production.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  EDITORIAL
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Curated picks
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Highlight selected videos around a particular editorial
                  direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED TV MODULES */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected NHTV
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Videos connect the entire TV experience.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nexus-hub-tv/shows"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                SHOWS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Discover the production.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Move from an individual video back to the show or series it
                belongs to.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Shows →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/programs"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                PROGRAMS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Understand the programming.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Connect videos to the wider programming and scheduling
                experience.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Programs →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/live"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">LIVE</p>

              <h3 className="mt-3 text-xl font-bold">
                Revisit live broadcasts.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Move from a completed live stream into its permanent video
                record.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Live →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Videos
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Every published video becomes part of the story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Browse the future NHTV video library, discover productions, and
            move naturally between videos, shows, programmes, and live
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nexus-hub-tv/shows"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Shows
            </Link>

            <Link
              href="/nexus-hub-tv/news"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore NHTV News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
