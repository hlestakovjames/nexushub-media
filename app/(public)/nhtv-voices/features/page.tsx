import Link from 'next/link';

const featureTypes = [
  {
    number: '01',
    title: 'Long-form Features',
    description:
      'In-depth editorial pieces that give a subject enough room for context, detail, background, and multiple dimensions.',
  },
  {
    number: '02',
    title: 'Profiles',
    description:
      'Richly developed stories centred on people, organisations, projects, ideas, or subjects that deserve closer attention.',
  },
  {
    number: '03',
    title: 'Explainers',
    description:
      'Accessible stories that unpack complex subjects, developments, systems, or ideas for a broader audience.',
  },
  {
    number: '04',
    title: 'Special Features',
    description:
      'Editorial productions created around specific themes, events, projects, communities, or special publishing initiatives.',
  },
];

const featureLenses = [
  'People and experiences',
  'Ideas and society',
  'Community and culture',
  'Technology and innovation',
  'Projects and initiatives',
  'Emerging conversations',
];

export default function NHTVVoicesFeaturesPage() {
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
              Features
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Go deeper.
              <br />
              See the bigger picture.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              In-depth stories that connect people, ideas, experiences,
              communities, and context beyond the immediate headline.
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
                Feature Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Some subjects need more than a single moment.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Voices Features provides space for stories that need
                additional reporting, context, narrative, or explanation.
              </p>

              <p>
                A feature may connect interviews, data, photography,
                commentary, background material, audio, or video while
                remaining a distinct editorial production.
              </p>

              <p>
                The section is therefore broader than Opinion while
                retaining a clear editorial identity of its own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE LIBRARY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Feature Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A space for deeper editorial work.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No published features yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-96 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  Featured Editorial Space
                </p>

                <div className="flex min-h-72 items-end">
                  <div>
                    <h3 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                      Room for context, detail, and the bigger story.
                    </h3>

                    <p className="mt-5 max-w-2xl leading-7 text-white/65">
                      Future feature productions can combine written
                      storytelling with interviews, photography, audio,
                      video, and supporting editorial material.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No feature stories published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Future publishing can surface feature stories by
                    topic, author, format, date, featured status, and
                    related Voices content.
                  </p>
                </div>

                <Link
                  href="/nhtv-voices/opinion"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Opinion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Feature Formats
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different formats for deeper storytelling.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Features can take different editorial forms depending on
              the subject, audience, available material, and desired
              depth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featureTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {type.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {type.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {type.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE LENSES */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Lenses
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Features can follow the story wherever it leads.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The feature structure is intentionally broad so future
                editorial coverage can develop around subjects rather than
                being restricted to a narrow content formula.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featureLenses.map((item) => (
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

      {/* MULTIMEDIA STORYTELLING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Multimedia Features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One feature can become a complete media experience.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The frontend is prepared for features that move between
              written material, interviews, podcasts, photography, and
              video without collapsing these into one content type.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Written',
                description:
                  'Long-form narrative and editorial content.',
              },
              {
                title: 'Interview',
                description:
                  'Direct voices and expert conversations.',
              },
              {
                title: 'Audio',
                description:
                  'Podcast and audio-led supporting material.',
              },
              {
                title: 'Video',
                description:
                  'Visual storytelling and produced features.',
              },
            ].map((format) => (
              <div
                key={format.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold">{format.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CONTENT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Voices
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Go deeper, then follow the conversation.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-voices/interviews"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Interviews
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Hear directly from people.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Add first-hand conversations and expert perspectives to
                the wider story.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/podcasts"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Podcasts
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Continue the discussion.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Extend feature subjects into recurring conversations and
                audio productions.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/video"
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Video
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                See the feature unfold.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Bring feature subjects into the visual side of NHTV
                Voices.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE PUBLISHING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Editorial Workflow
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for structured feature publishing.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the feature experience while the
                future backend can manage drafts, editorial review,
                authors, contributors, media, taxonomy, publication, and
                related content.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Feature title and body',
                'Authors and contributors',
                'Topics and categories',
                'Supporting media',
                'Publication and update dates',
                'Featured selection',
                'Related interviews and podcasts',
                'Related video content',
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
            Some stories deserve the bigger picture.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore features alongside interviews, podcasts, opinion, and
            video.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/nhtv-voices"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Voices Home
            </Link>

            <Link
              href="/nhtv-voices/interviews"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Interviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
