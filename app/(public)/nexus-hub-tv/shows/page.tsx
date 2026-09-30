import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const showTypes = [
  {
    number: '01',
    title: 'Original Series',
    description:
      'Recurring productions developed specifically for Nexus Hub TV, with their own identity, format, audience, and editorial direction.',
  },
  {
    number: '02',
    title: 'Interview Series',
    description:
      'Ongoing conversations featuring people, practitioners, creators, leaders, and voices with experiences or perspectives worth exploring.',
  },
  {
    number: '03',
    title: 'Feature Series',
    description:
      'Story-driven productions that explore people, places, projects, communities, culture, and ideas through a recurring format.',
  },
  {
    number: '04',
    title: 'Special Productions',
    description:
      'Limited or event-led productions created around particular subjects, occasions, initiatives, or moments.',
  },
];

const showLifecycle = [
  {
    number: '01',
    title: 'Concept',
    description:
      'An idea begins with a clear audience, subject, purpose, and editorial direction.',
  },
  {
    number: '02',
    title: 'Development',
    description:
      'The concept is shaped into a repeatable format that can support episodes or multiple releases.',
  },
  {
    number: '03',
    title: 'Production',
    description:
      'Episodes and productions are created, edited, packaged, and prepared for publication.',
  },
  {
    number: '04',
    title: 'Publication',
    description:
      'Completed content becomes part of the NHTV catalogue and can feed into videos, news, and featured surfaces.',
  },
];

export default function NexusHubTVShowsPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Shows"
        title={
          <>
            Productions with
            <br />
            an identity of their own.
          </>
        }
        description="NHTV Shows is the home for recurring Nexus Hub TV productions, series, and branded formats. Each show can develop its own voice while remaining part of the wider NHTV ecosystem."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'Explore Programs',
          href: '/nexus-hub-tv/programs',
        }}
        secondaryAction={{
          label: 'Browse Videos',
          href: '/nexus-hub-tv/videos',
        }}
        height="large"
      />

      {/* POSITIONING */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The Shows Catalogue
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A home for recurring productions.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Shows are the identifiable productions that audiences can
                return to. They may have a recurring title, format, subject,
                style, host, cast, or editorial concept.
              </p>

              <p>
                This makes Shows different from the broader Programs layer.
                Programs can describe the wider programming catalogue or
                presentation schedule, while Shows describe the productions
                themselves.
              </p>

              <p>
                As the NHTV catalogue grows, each production can have its own
                profile, episodes, description, category, media assets,
                release history, and related content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOW CATALOGUE */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Show Catalogue
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A flexible home for future NHTV productions.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This catalogue is designed to accommodate individual show
                records as the NHTV programming library is developed.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Shows catalogue
            </span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {showTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {type.number}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Format
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">{type.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {type.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Future catalogue structure
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Show profile · Episodes · Featured video · Latest release
                    · Related content
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOW MODEL */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Show Structure
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Every show can become its own content hub.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A show should not simply be a title in a list. Its future
              content model can connect the production to every relevant part
              of the NHTV platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                IDENTITY
              </p>

              <h3 className="mt-3 text-xl font-bold">Show Profile</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Title, description, category, artwork, editorial identity,
                and other core metadata.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                CONTENT
              </p>

              <h3 className="mt-3 text-xl font-bold">Episodes</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Published episodes or instalments connected to the show.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                DISCOVERY
              </p>

              <h3 className="mt-3 text-xl font-bold">Related Media</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Videos, news items, clips, interviews, and other content
                related to the production.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">
                CONTINUITY
              </p>

              <h3 className="mt-3 text-xl font-bold">Series History</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Release history, seasons, episodes, and future publishing
                structure as the show matures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                From Idea to Audience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                How a show grows inside NHTV.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                A clear production lifecycle gives each show a path from
                concept through publication and audience discovery.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {showLifecycle.map((stage) => (
                <article
                  key={stage.number}
                  className="border-l border-white/15 pl-6"
                >
                  <span className="text-sm font-semibold text-[#5FC9E6]">
                    {stage.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">{stage.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWS VS OTHER TV CONTENT */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Understanding the Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Shows, Programs, Videos, and News have different jobs.
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">SHOWS</p>

                <h3 className="mt-3 text-xl font-bold">
                  Productions
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Recurring or branded productions with their own identity.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  PROGRAMS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Programming
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The broader presentation, organisation, and programming
                  layer of NHTV.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  VIDEOS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Published media
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Individual video releases and watchable media content.
                </p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-[#1266B6]">
                  NEWS
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Editorial updates
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  News, announcements, updates, and editorial coverage
                  connected to NHTV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED TV PAGES */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore the rest of Nexus Hub TV.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/nexus-hub-tv/programs"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                PROGRAMS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Discover the wider programming layer.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore how NHTV programming can be organised and presented to
                the audience.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Programs →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/videos"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                VIDEOS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Browse published video content.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the watchable media layer where individual releases
                can be surfaced.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/about"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                ABOUT NHTV
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Understand the platform.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn about Nexus Hub TV, its role within Nexus Hub Media, and
                the principles guiding the platform.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                About NHTV →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Shows
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Every great show begins with a strong idea.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore how Nexus Hub TV can turn ideas into recurring productions
            that audiences can discover, follow, and return to.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nexus-hub-tv/programs"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to Nexus Hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
