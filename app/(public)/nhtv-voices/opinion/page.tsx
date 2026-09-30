import Link from 'next/link';

const opinionFormats = [
  {
    number: '01',
    title: 'Commentary',
    description:
      'Author-led commentary that examines subjects, developments, ideas, and experiences through a clearly expressed viewpoint.',
  },
  {
    number: '02',
    title: 'Analysis',
    description:
      'Structured interpretation that helps audiences understand the context, implications, and different dimensions of a subject.',
  },
  {
    number: '03',
    title: 'Columns',
    description:
      'Recurring opinion pieces built around a consistent author, theme, perspective, or editorial voice.',
  },
  {
    number: '04',
    title: 'Guest Perspectives',
    description:
      'Selected contributions that give external contributors room to present their experiences, arguments, and viewpoints.',
  },
];

const editorialStandards = [
  'Clear authorship',
  'Distinct viewpoint',
  'Relevant context',
  'Reasoned argument',
  'Transparent sourcing',
  'Constructive discussion',
];

export default function NHTVVoicesOpinionPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-voices"
              className="text-sm font-semibold text-[#5FC9E6] transition hover:opacity-80"
            >
              ← NHTV Voices
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              Opinion
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Ideas deserve
              <br />
              a place to be heard.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              A dedicated space for commentary, analysis, columns, and
              considered perspectives from NHTV Voices contributors.
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
                Opinion & Analysis
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Make room for perspective.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Voices Opinion provides a distinct editorial space for
                viewpoints, commentary, interpretation, and analysis.
              </p>

              <p>
                Opinion content is different from straight reporting or
                interviews: the author's perspective is part of the
                content itself and should be clearly identified.
              </p>

              <p>
                The future publishing system can support both internal
                contributors and selected guest voices while keeping
                authorship and publication metadata explicit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPINION LIBRARY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Opinion Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A publishing space for distinct voices.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No opinion pieces published yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Editorial Space
                </p>

                <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  A place for ideas, arguments, and interpretation.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Future opinion pieces can appear here with clear
                  authorship, publication details, topics, categories,
                  featured status, and related Voices content.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                    Commentary
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                    Analysis
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
                    Columns
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No opinion content published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Once publishing is connected, this space can surface
                    recent, featured, topical, or author-specific opinion
                    pieces.
                  </p>
                </div>

                <Link
                  href="/nhtv-voices/interviews"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Interviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Opinion Formats
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different ways to express a viewpoint.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Opinion section supports multiple editorial formats
              while keeping opinion distinct from factual news and
              interview content.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {opinionFormats.map((format) => (
              <article
                key={format.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {format.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {format.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {format.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL STANDARDS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Standards
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Perspective should still have structure.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Opinion is naturally viewpoint-driven, but the publishing
                experience should make the author, context, and basis of
                the piece clear to the audience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {editorialStandards.map((item) => (
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

      {/* OPINION + OTHER VOICES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Voices
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Opinion sits alongside conversation and storytelling.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The wider Voices platform allows ideas to move between
              editorial formats without treating them as the same type
              of content.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-voices/podcasts"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Podcasts
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Hear ideas develop.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore audio-led discussions and recurring podcast
                productions.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/interviews"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Interviews
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Hear directly from people.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore structured conversations with guests,
                contributors, and experts.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/features"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Features
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Go deeper into the subject.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore broader editorial storytelling beyond a single
                viewpoint.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE PUBLISHING WORKFLOW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Editorial Workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for structured opinion publishing.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the presentation model while the
                future backend can manage authors, drafts, review,
                publication, taxonomy, media, and related content.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Author and contributor records',
                'Opinion title and body',
                'Categories and topics',
                'Editorial status',
                'Publication and update dates',
                'Featured selection',
                'Images and media',
                'Related Voices content',
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
            NHTV Voices
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Different voices can create a richer conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore podcasts, interviews, features, and the wider Voices
            platform.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/nhtv-voices"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Voices Home
            </Link>

            <Link
              href="/nhtv-voices/podcasts"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Podcasts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
