import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const programmingTypes = [
  {
    number: '01',
    title: 'Original Programming',
    description:
      'Programming developed and produced within the Nexus Hub TV ecosystem, including recurring shows, special productions, interviews, and feature-led content.',
  },
  {
    number: '02',
    title: 'Featured Programming',
    description:
      'Selected programmes and productions given greater visibility through featured placements, campaigns, editorial collections, and audience discovery.',
  },
  {
    number: '03',
    title: 'Special Programming',
    description:
      'Focused programming created around major stories, events, initiatives, conversations, or subjects requiring dedicated coverage.',
  },
  {
    number: '04',
    title: 'Network Programming',
    description:
      'Content pathways that connect Nexus Hub TV with specialist properties such as NHTV Football, NHTV Stories, and NHTV Voices.',
  },
];

const programmingModel = [
  {
    title: 'Programme',
    description:
      'The identifiable programming item or scheduled content experience presented to the audience.',
  },
  {
    title: 'Episode',
    description:
      'A specific instalment belonging to a recurring show or series.',
  },
  {
    title: 'Time & Availability',
    description:
      'The planned presentation window, release timing, or availability of content.',
  },
  {
    title: 'Destination',
    description:
      'The part of the NHTV platform where the audience can discover or watch the content.',
  },
];

export default function NexusHubTVProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Programs"
        title={
          <>
            The programming layer
            <br />
            behind the experience.
          </>
        }
        description="NHTV Programs is the broader programming layer of Nexus Hub TV, organizing shows, productions, special content, and future scheduled experiences into a clear audience-facing structure."
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
                Programming
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Organizing what audiences see.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Programs provide the wider structure through which Nexus Hub
                TV presents its content. They help audiences understand what
                is available, what is being featured, what is coming next, and
                where particular content belongs.
              </p>

              <p>
                A programme can relate to a recurring show, a special
                production, a live experience, or another editorial package.
                This makes the Programs layer broader than the Shows layer.
              </p>

              <p>
                As the NHTV platform develops, this area can become the
                foundation for programme discovery, schedule information,
                release planning, featured programming, and future broadcast
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMING TYPES */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Programming Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different content can share one programming system.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The programming structure should be flexible enough to support
              different formats without forcing everything into the same
              editorial model.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programmingTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {type.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">{type.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM MODEL */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Content Model
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One programme can connect several parts of NHTV.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The programming system can act as the connective layer between
              shows, episodes, schedules, videos, news, and live experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programmingModel.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE PROGRAMMING GUIDE */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Programming Guide
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A future home for what is on, what is next, and what is new.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                As the NHTV catalogue becomes active, the Programs experience
                can evolve into a dynamic programming guide driven by the
                platform’s publishing and scheduling systems.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5FC9E6]">
                  NOW
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Current programming
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Surface content currently available or actively featured.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5FC9E6]">
                  NEXT
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Upcoming programming
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Present upcoming programmes, releases, and scheduled
                  experiences.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5FC9E6]">
                  FEATURED
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Editorial highlights
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Give selected productions greater visibility across the
                  platform.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5FC9E6]">
                  ARCHIVE
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Previous programming
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Retain a discoverable history of previous programmes and
                  releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATIONSHIP TO OTHER MODULES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Modules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Programs connects the rest of the TV experience.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nexus-hub-tv/shows"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">SHOWS</p>

              <h3 className="mt-3 text-xl font-bold">
                Recurring productions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect programmes to their underlying shows and series.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Shows →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/videos"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">VIDEOS</p>

              <h3 className="mt-3 text-xl font-bold">
                Published content
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect programming with individual watchable video releases.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/live"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">LIVE</p>

              <h3 className="mt-3 text-xl font-bold">
                Live experiences
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect programming to future live broadcasts and streams.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Live →
              </span>
            </Link>

            <Link
              href="/nexus-hub-tv/news"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-xl font-bold">
                Editorial updates
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Keep audiences informed about NHTV developments and content.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CLARITY */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              A Simple Distinction
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Shows define the production. Programs organize the
              presentation.
            </h2>

            <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[#1266B6]">
                  SHOWS
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  A show is the production or recurring series itself — its
                  identity, format, episodes, and editorial concept.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#1266B6]">
                  PROGRAMS
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  A program is part of the broader presentation and
                  organisation layer — helping audiences discover what is
                  available, featured, or scheduled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Programs
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            A programming system built to scale with the platform.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            As Nexus Hub TV grows, the Programs layer can become the
            audience-facing bridge between content creation, publishing,
            scheduling, and discovery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nexus-hub-tv/shows"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Shows
            </Link>

            <Link
              href="/nexus-hub-tv/live"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Live
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
