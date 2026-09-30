import Link from 'next/link';

const videoFormats = [
  {
    number: '01',
    title: 'Video Conversations',
    description:
      'Recorded conversations that bring interviews, discussions, and expert perspectives into a visual format.',
  },
  {
    number: '02',
    title: 'Visual Features',
    description:
      'Produced feature pieces that combine storytelling, people, places, ideas, and supporting visuals.',
  },
  {
    number: '03',
    title: 'Podcast Video',
    description:
      'Video versions of selected podcast productions, allowing audio-led conversations to reach visual audiences as well.',
  },
  {
    number: '04',
    title: 'Special Productions',
    description:
      'Standalone visual productions created for specific subjects, events, editorial projects, or special conversations.',
  },
];

const publishingCapabilities = [
  'Video publishing',
  'Thumbnail and cover media',
  'Hosts and contributors',
  'Categories and topics',
  'Publication metadata',
  'Related Voices content',
];

export default function NHTVVoicesVideoPage() {
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
              Video
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hear the idea.
              <br />
              See the conversation.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              A visual space for interviews, features, podcast
              productions, conversations, and special video stories from
              NHTV Voices.
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
                Voices Video
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Some conversations work best on screen.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Voices Video provides a dedicated visual experience
                for content that benefits from faces, gestures, locations,
                demonstrations, and richer visual storytelling.
              </p>

              <p>
                Video entries can stand independently or connect back to
                podcasts, interviews, opinion pieces, and feature stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO LIBRARY STATE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Video Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A publishing-ready visual library.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No published videos yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-96 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <div className="flex h-full min-h-72 items-center justify-center">
                  <div className="w-full max-w-xl text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5.5V18.5L18 12L8 5.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                      NHTV Voices Video
                    </p>

                    <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                      The video library is ready for publication.
                    </h3>

                    <p className="mt-4 leading-7 text-white/65">
                      Published videos can appear here with thumbnails,
                      titles, descriptions, duration, contributors,
                      categories, dates, and related editorial content.
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
                    No Voices videos published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Future publishing can manage video assets, thumbnails,
                    titles, contributors, topics, categories, publishing
                    dates, and links to related Voices content.
                  </p>
                </div>

                <Link
                  href="/nhtv-voices/podcasts"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  Explore Podcasts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO FORMATS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Formats
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different visual formats for different voices.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Voices Video supports different forms of visual storytelling
              while keeping each underlying editorial concept distinct.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {videoFormats.map((format) => (
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

      {/* CONNECTED CONTENT */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Connected Content
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Video can become another doorway into the conversation.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                Visual productions can connect back to the original
                interview, podcast, feature, or opinion piece without
                turning every format into the same content type.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/nhtv-voices/podcasts"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Podcasts
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Turn audio into a visual experience.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Selected podcast productions can also be presented as
                  video.
                </p>
              </Link>

              <Link
                href="/nhtv-voices/interviews"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Interviews
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Put the conversation on screen.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Visual interviews can connect directly to dedicated
                  interview records.
                </p>
              </Link>

              <Link
                href="/nhtv-voices/opinion"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Opinion
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Add visual commentary.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Selected opinion productions can be adapted into a
                  video-led format.
                </p>
              </Link>

              <Link
                href="/nhtv-voices/features"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Features
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Give deeper stories a visual layer.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Feature stories can be extended through visual
                  production and documentary-style content.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Designed for browsing as well as watching.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A mature video library can help audiences discover new
              productions while moving naturally between visual and
              editorial content.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Featured',
                description:
                  'Surface selected video productions for greater visibility.',
              },
              {
                title: 'Recent',
                description:
                  'Keep newly published video content easy to discover.',
              },
              {
                title: 'Related',
                description:
                  'Connect videos to the podcasts, interviews, opinion, and features they support.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLISHING CAPABILITIES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Publishing Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for a proper video workflow.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the visual experience while the
                future backend can manage storage, publishing, metadata,
                search, and editorial controls.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {publishingCapabilities.map((item) => (
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
            See the conversation from another angle.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore video alongside podcasts, interviews, opinion, and
            features.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/nhtv-voices"
              className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Voices Home
            </Link>

            <Link
              href="/nhtv-voices/features"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
