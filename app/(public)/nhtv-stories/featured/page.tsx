import Link from 'next/link';

const storyLanes = [
  {
    label: 'PEOPLE',
    title: 'Stories centred on people.',
    description:
      'Profiles, journeys, experiences, achievements, and perspectives that place people at the centre of the story.',
    href: '/nhtv-stories/people',
  },
  {
    label: 'CULTURE',
    title: 'Stories that explore culture.',
    description:
      'Traditions, identity, creativity, heritage, and the evolving ways communities express who they are.',
    href: '/nhtv-stories/culture',
  },
  {
    label: 'COMMUNITY',
    title: 'Stories from communities.',
    description:
      'Local experiences, initiatives, organisations, and everyday efforts that shape life at community level.',
    href: '/nhtv-stories/community',
  },
];

const editorialPrinciples = [
  {
    number: '01',
    title: 'Human-centred',
    description:
      'We begin with the people and experiences behind the subject rather than reducing a story to a headline.',
  },
  {
    number: '02',
    title: 'Context matters',
    description:
      'Featured stories should provide enough context to help audiences understand why an issue, experience, or moment matters.',
  },
  {
    number: '03',
    title: 'Depth over noise',
    description:
      'The featured collection is intended for stories that benefit from thoughtful presentation, strong storytelling, and meaningful perspective.',
  },
];

export default function NHTVStoriesFeaturedPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-stories"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← NHTV Stories
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Featured
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Stories in the
              <br />
              Spotlight.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              A curated front row for the stories that deserve deeper
              attention, stronger context, and a place to stay visible.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                The Featured Collection
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A place for stories worth spending time with.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Featured is the editorial showcase within NHTV Stories. It
                brings selected stories together so audiences can discover
                them through one focused experience.
              </p>

              <p>
                The collection can later be driven by editorial publishing,
                categories, media formats, publication dates, authors, and
                featured status from the CMS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT STATE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The editorial front row.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              Publishing-ready
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="min-h-80 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Featured Lead Story
                </p>

                <div className="flex min-h-64 items-end">
                  <div>
                    <h3 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                      The featured story space is ready for publication.
                    </h3>

                    <p className="mt-5 max-w-2xl leading-7 text-white/65">
                      Published stories can be promoted here through an
                      editorial selection process without changing the
                      underlying Stories architecture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Publication State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No featured stories published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Once editorial content is available, the CMS can
                    populate this space with the selected lead story,
                    supporting stories, media, author details, and
                    publication metadata.
                  </p>
                </div>

                <Link
                  href="/nhtv-stories/about"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  About NHTV Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY LANES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Stories
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured content can begin anywhere.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Featured stories can be drawn from the core editorial
              lanes of NHTV Stories while remaining connected to their
              original categories.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {storyLanes.map((lane) => (
              <article
                key={lane.href}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                  {lane.label}
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {lane.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {lane.description}
                </p>

                <Link
                  href={lane.href}
                  className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
                >
                  Explore {lane.label.toLowerCase()} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL PRINCIPLES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Editorial Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What makes a story worth featuring?
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              The featured collection should reflect the depth and
              purpose of the NHTV Stories platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {editorialPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-sm font-semibold text-[#5FC9E6]">
                  {principle.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CMS READINESS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing Layer
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for a real editorial workflow.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Featured story selection',
                'Publication status',
                'Category and topic metadata',
                'Author and contributor records',
                'Images and video media',
                'Publication date and timestamps',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-[#050A30]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-[#050A30] p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                NHTV Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Discover the story behind the story.
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Move through the Stories experience by people, culture,
                community, or video.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/nhtv-stories"
                className="rounded-md bg-[#5FC9E6] px-5 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Stories Home
              </Link>

              <Link
                href="/nhtv-stories/video"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Watch Video Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
