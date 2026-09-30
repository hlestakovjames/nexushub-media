import Link from 'next/link';

const cultureThemes = [
  {
    number: '01',
    title: 'Identity',
    description:
      'Stories exploring the experiences, identities, values, and expressions that help people and communities understand who they are.',
  },
  {
    number: '02',
    title: 'Heritage',
    description:
      'Stories documenting traditions, knowledge, places, practices, and histories that connect present communities with their past.',
  },
  {
    number: '03',
    title: 'Creativity',
    description:
      'Stories around art, music, fashion, performance, design, language, and other forms of creative expression.',
  },
  {
    number: '04',
    title: 'Cultural Change',
    description:
      'Stories examining how culture evolves as communities respond to new ideas, technologies, generations, and changing circumstances.',
  },
];

const contentFormats = [
  'Cultural profiles',
  'Heritage features',
  'Arts and creativity',
  'Traditions and practices',
  'Language and identity',
  'Intergenerational stories',
];

export default function NHTVStoriesCulturePage() {
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
              Culture
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The stories
              <br />
              that shape us.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Exploring identity, heritage, creativity, traditions, and
              the changing cultures that shape how communities experience
              the world.
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
                Culture Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Culture is more than what we inherit.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Stories explores culture as something lived, shared,
                remembered, created, and continuously shaped by people.
              </p>

              <p>
                This section provides a home for stories that help audiences
                understand cultural experiences through people, places,
                traditions, creativity, identity, and change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE THEMES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Culture Themes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Many expressions. One wider story.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cultural storytelling can take many forms. These themes
              provide a flexible editorial structure for future
              publishing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cultureThemes.map((theme) => (
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

      {/* FEATURED CULTURE STORY SPACE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-80 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Culture Feature
                </p>

                <div className="flex min-h-64 items-end">
                  <div>
                    <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                      A space for culture to be experienced, not simply
                      described.
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-white/65">
                      Future feature stories can combine written
                      storytelling, photography, interviews, audio, and
                      video to create a richer cultural experience.
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
                    No Culture stories published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The publishing layer can later populate this space
                    with cultural features, contributors, media assets,
                    topics, publication dates, and related stories.
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

      {/* EDITORIAL LENSES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Lenses
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Culture through different perspectives.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Strong cultural stories can connect the past and present
                while giving audiences room to discover different
                perspectives and experiences.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Past',
                  description:
                    'History, heritage, memory, and traditions.',
                },
                {
                  title: 'Present',
                  description:
                    'How people and communities experience culture today.',
                },
                {
                  title: 'Expression',
                  description:
                    'Art, language, creativity, performance, and identity.',
                },
                {
                  title: 'Future',
                  description:
                    'How culture evolves across generations and changing environments.',
                },
              ].map((lens) => (
                <div
                  key={lens.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{lens.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {lens.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT FORMATS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Content Formats
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible enough for different kinds of storytelling.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contentFormats.map((format) => (
              <div
                key={format}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <p className="text-sm font-semibold text-[#050A30]">
                  {format}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED STORIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Culture connects people, place, and community.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-stories/people"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                People
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Meet the people behind the culture.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore personal journeys, experiences, achievements,
                and perspectives.
              </p>
            </Link>

            <Link
              href="/nhtv-stories/community"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Community
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore culture in community.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover local experiences, initiatives, places, and
                community stories.
              </p>
            </Link>

            <Link
              href="/nhtv-stories/video"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Video
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Watch Culture stories.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Experience cultural stories through the visual side of
                NHTV Stories.
              </p>
            </Link>
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
            Culture gives stories their deeper meaning.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the people, communities, and experiences that make
            culture visible and memorable.
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
