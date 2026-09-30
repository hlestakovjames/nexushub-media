import Link from 'next/link';

const voicesPrinciples = [
  {
    number: '01',
    title: 'Many voices',
    description:
      'NHTV Voices creates room for different people, experiences, ideas, and perspectives to contribute to the wider conversation.',
  },
  {
    number: '02',
    title: 'Meaningful conversation',
    description:
      'The platform is designed around content that gives subjects enough space for thoughtful discussion, context, and reflection.',
  },
  {
    number: '03',
    title: 'Clear editorial identity',
    description:
      'Podcasts, interviews, opinion, features, and video remain distinct formats while working together within one media property.',
  },
  {
    number: '04',
    title: 'Built to evolve',
    description:
      'The frontend establishes the experience now while leaving room for a full editorial, publishing, media, and contributor system later.',
  },
];

const voicesAreas = [
  {
    title: 'Podcasts',
    description:
      'Audio-first series, episodes, conversations, and special productions.',
    href: '/nhtv-voices/podcasts',
  },
  {
    title: 'Interviews',
    description:
      'Structured conversations with people, contributors, practitioners, and experts.',
    href: '/nhtv-voices/interviews',
  },
  {
    title: 'Opinion',
    description:
      'Commentary, analysis, columns, and clearly attributed perspectives.',
    href: '/nhtv-voices/opinion',
  },
  {
    title: 'Features',
    description:
      'Long-form and in-depth editorial storytelling with room for context and detail.',
    href: '/nhtv-voices/features',
  },
  {
    title: 'Video',
    description:
      'Visual conversations, features, podcast video, and special productions.',
    href: '/nhtv-voices/video',
  },
];

const publishingLayers = [
  'People and contributors',
  'Editorial content',
  'Audio and video media',
  'Categories and topics',
  'Publication workflow',
  'Related content',
  'Featured selection',
  'Search and discovery',
];

export default function NHTVVoicesAboutPage() {
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
              About
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A platform
              <br />
              for voices.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              NHTV Voices is a dedicated media property for conversations,
              ideas, perspectives, and stories presented through audio,
              written, and visual formats.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS NHTV VOICES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Give ideas and experiences room to develop.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Voices is built for content where the value comes
                from what people have to say, how ideas are explored, and
                how different perspectives contribute to a wider
                conversation.
              </p>

              <p>
                It brings together podcasts, interviews, opinion,
                features, and video while keeping each format and editorial
                purpose clearly separated.
              </p>

              <p>
                The property is designed to grow into a structured media
                publishing platform with contributors, editorial workflows,
                media management, taxonomy, search, and content
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Our Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A wider conversation needs more than one format.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Voices platform is organised around distinct editorial
              experiences that can connect without becoming interchangeable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {voicesPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {principle.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Voices Structure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One property. Distinct editorial experiences.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Each area has its own purpose while contributing to the
                wider NHTV Voices ecosystem.
              </p>
            </div>

            <Link
              href="/nhtv-voices"
              className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
            >
              Voices Home →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {voicesAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                  NHTV Voices
                </p>

                <h3 className="mt-4 text-2xl font-bold tracking-tight group-hover:text-[#1266B6]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#1266B6]">
                  Explore {area.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW FORMATS CONNECT */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Connected Formats
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Content can move across formats without losing its identity.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                A conversation can become a podcast, an interview can
                support a feature, an opinion piece can become a video,
                and a feature can be expanded through additional media.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Podcast',
                  description:
                    'Audio-first recurring conversations and episodes.',
                },
                {
                  title: 'Interview',
                  description:
                    'Focused conversations with identified guests or contributors.',
                },
                {
                  title: 'Opinion',
                  description:
                    'Clearly attributed viewpoint, commentary, and analysis.',
                },
                {
                  title: 'Feature',
                  description:
                    'Deeper editorial storytelling with broader context.',
                },
                {
                  title: 'Video',
                  description:
                    'Visual presentation for selected Voices content.',
                },
              ].map((format) => (
                <div
                  key={format.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{format.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {format.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLISHING SYSTEM */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing System
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Prepared for a real media backend.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend defines the content experience first. The
                backend can later provide publishing, media storage,
                editorial controls, contributor management, search, and
                relationships across formats.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {publishingLayers.map((item) => (
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

      {/* RELATION TO OTHER MEDIA PROPERTIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  NHTV Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Voices is one part of a wider Nexus Hub media network.
                </h2>

                <p className="mt-5 leading-7 text-white/65">
                  Each NHTV property has its own editorial purpose,
                  audience experience, and content structure.
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="space-y-5">
                  <Link
                    href="/nexus-hub-tv"
                    className="block border-b border-slate-200 pb-5"
                  >
                    <p className="text-sm font-semibold text-[#1266B6]">
                      Nexus Hub TV
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Shows, programs, live broadcasting, videos, and TV
                      news.
                    </p>
                  </Link>

                  <Link
                    href="/nhtv-football"
                    className="block border-b border-slate-200 pb-5"
                  >
                    <p className="text-sm font-semibold text-[#1266B6]">
                      NHTV Football
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Football news, fixtures, results, teams,
                      competitions, and video.
                    </p>
                  </Link>

                  <Link
                    href="/nhtv-stories"
                    className="block"
                  >
                    <p className="text-sm font-semibold text-[#1266B6]">
                      NHTV Stories
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      People, culture, community, featured stories, and
                      video storytelling.
                    </p>
                  </Link>
                </div>
              </div>
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
            Everyone has something worth saying.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the conversations, ideas, perspectives, and stories
            that make up NHTV Voices.
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
              Explore Podcasts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
