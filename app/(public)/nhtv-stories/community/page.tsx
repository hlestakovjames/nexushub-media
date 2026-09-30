import Link from 'next/link';

const communityThemes = [
  {
    number: '01',
    title: 'Local Initiatives',
    description:
      'Stories about projects, programmes, campaigns, and everyday initiatives created to respond to needs and opportunities within communities.',
  },
  {
    number: '02',
    title: 'Community Voices',
    description:
      'Perspectives and experiences from the people who live, work, organise, and participate within the communities being explored.',
  },
  {
    number: '03',
    title: 'Places',
    description:
      'Stories that explore the character, history, identity, and lived experiences connected to places and the people who call them home.',
  },
  {
    number: '04',
    title: 'Collective Impact',
    description:
      'Stories showing how individuals, groups, organisations, and communities work together to create meaningful change.',
  },
];

const coverageAreas = [
  'Community development',
  'Local organisations',
  'Education and opportunity',
  'Youth and social initiatives',
  'Culture within communities',
  'Community-led change',
];

export default function NHTVStoriesCommunityPage() {
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
              Community
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Stories from
              <br />
              where life happens.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Exploring the people, places, initiatives, organisations,
              and experiences that shape communities from within.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Community Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Communities are built through people and shared
                experiences.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The Community section looks beyond individual stories to
                understand the environments, relationships, initiatives,
                and shared experiences that connect people.
              </p>

              <p>
                It provides an editorial home for stories rooted in local
                realities, community activity, collective effort, and the
                people working to shape the places around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY THEMES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Community Themes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Telling stories from the ground up.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Community storytelling can cover everyday experiences,
              organised initiatives, places, and the collective efforts
              that influence how communities grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {communityThemes.map((theme) => (
              <article
                key={theme.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {theme.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {theme.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {theme.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE STORY SPACE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-80 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Community Feature
                </p>

                <div className="flex min-h-64 items-end">
                  <div>
                    <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                      A space for stories rooted in real communities.
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-white/65">
                      Future community features can combine people,
                      places, organisations, initiatives, photography,
                      interviews, audio, and video.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No Community stories published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Future publishing can support community profiles,
                    initiatives, locations, contributors, media assets,
                    publication dates, and related stories.
                  </p>
                </div>

                <Link
                  href="/nhtv-stories/featured"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  View Featured Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Coverage Areas
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Community stories can begin anywhere.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The publishing structure is deliberately broad enough to
                accommodate different community experiences without
                restricting future editorial coverage.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coverageAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-semibold text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY LAYERS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Story Layers
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Connecting the community back to the individual.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Strong community stories can connect shared experiences
              with the people, places, cultures, and initiatives behind
              them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-stories/people"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                People
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Meet the people involved.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the personal journeys and perspectives within
                community stories.
              </p>
            </Link>

            <Link
              href="/nhtv-stories/culture"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Culture
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Understand the culture around it.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the cultural identities, traditions, and
                expressions shaping community life.
              </p>
            </Link>

            <Link
              href="/nhtv-stories/video"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Video
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                See community stories.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the visual storytelling experience through
                community-focused video.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL WORKFLOW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing Workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for editorial and CMS integration.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend separates community storytelling from the
                future content-management and publishing layer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Story and headline',
                'Community or location',
                'Contributors and people',
                'Topics and categories',
                'Images, audio, and video',
                'Publication and update metadata',
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
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Stories
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Every community has stories waiting to be told.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Discover the people, culture, and experiences that shape
            communities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/nhtv-stories"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Stories Home
            </Link>

            <Link
              href="/nhtv-stories/featured"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Featured Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
