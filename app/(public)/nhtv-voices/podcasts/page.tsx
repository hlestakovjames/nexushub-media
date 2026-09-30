import Link from 'next/link';

const podcastTypes = [
  {
    number: '01',
    title: 'Series',
    description:
      'Recurring podcast productions organised around a consistent theme, subject, audience, or editorial concept.',
  },
  {
    number: '02',
    title: 'Episodes',
    description:
      'Individual published episodes with titles, descriptions, contributors, publication dates, duration, and media information.',
  },
  {
    number: '03',
    title: 'Conversations',
    description:
      'Audio-led discussions that bring together people, ideas, experiences, and perspectives around a focused subject.',
  },
  {
    number: '04',
    title: 'Special Episodes',
    description:
      'Standalone or limited podcast productions created for particular stories, events, themes, or special editorial projects.',
  },
];

const publishingCapabilities = [
  'Podcast series management',
  'Episode publishing',
  'Audio media and cover artwork',
  'Hosts and contributors',
  'Categories and topics',
  'Publication and update metadata',
];

export default function NHTVVoicesPodcastsPage() {
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
              Podcasts
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Conversations
              <br />
              worth hearing.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              An audio-first space for podcast series, episodes,
              conversations, and stories built to be heard.
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
                Podcasting
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Give ideas room to breathe.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Voices Podcasts provides a dedicated home for
                audio-led storytelling, discussions, interviews, and
                recurring productions.
              </p>

              <p>
                The structure separates the podcast series itself from
                individual episodes, allowing the future publishing system
                to manage both levels independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST STATE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Podcast Library
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A publishing-ready audio library.
              </h2>
            </div>

            <span className="text-sm font-medium text-slate-500">
              No published podcasts yet
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-96 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <div className="flex h-full min-h-72 items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 3.5C10.62 3.5 9.5 4.62 9.5 6V12C9.5 13.38 10.62 14.5 12 14.5C13.38 14.5 14.5 13.38 14.5 12V6C14.5 4.62 13.38 3.5 12 3.5Z"
                          fill="currentColor"
                        />

                        <path
                          d="M6.5 11.5V12C6.5 15.04 8.91 17.5 12 17.5C15.09 17.5 17.5 15.04 17.5 12V11.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        <path
                          d="M12 17.5V21"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />

                        <path
                          d="M9.5 21H14.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#5FC9E6]">
                      NHTV Voices Podcasts
                    </p>

                    <h3 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight">
                      The podcast library is ready for publication.
                    </h3>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-white/65">
                      Future podcasts can appear here with cover artwork,
                      series information, episode listings, audio players,
                      contributors, categories, and publication details.
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
                    No podcast series or episodes published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The future publishing layer can manage podcast
                    series, episodes, audio files, contributors, artwork,
                    topics, and publishing metadata.
                  </p>
                </div>

                <Link
                  href="/nhtv-voices/about"
                  className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                >
                  About NHTV Voices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Podcast Structure
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a list of audio files.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Podcasts are treated as structured media experiences, with
              series and episodes carrying their own relationships,
              metadata, and publishing states.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {podcastTypes.map((type) => (
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

      {/* DISCOVERY */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Listening Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for discovery and return visits.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                A mature podcast experience can help audiences discover
                series, return to favourite productions, and move between
                episodes and related Voices content.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Series-first',
                  description:
                    'Browse recurring podcast productions before exploring individual episodes.',
                },
                {
                  title: 'Episode discovery',
                  description:
                    'Surface recent, featured, or topic-specific episodes.',
                },
                {
                  title: 'Related content',
                  description:
                    'Connect episodes with interviews, opinion, features, and video.',
                },
                {
                  title: 'Rich metadata',
                  description:
                    'Provide duration, contributors, topics, dates, and descriptions.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED VOICES FORMATS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Explore Voices
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Podcasts are one part of a wider Voices platform.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Audio can connect naturally with the other editorial formats
              within NHTV Voices while keeping each content type distinct.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                Explore the dedicated interview experience within Voices.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/opinion"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Opinion
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore ideas and viewpoints.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the opinion and perspective side of NHTV Voices.
              </p>
            </Link>

            <Link
              href="/nhtv-voices/video"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Video
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Watch Voices content.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the visual side of the Voices platform.
              </p>
            </Link>
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
                Ready for a proper audio workflow.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the experience now while leaving
                storage, audio processing, publishing, search, and
                editorial controls for the backend stage.
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
            Good conversations deserve to be heard.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore podcasts alongside interviews, opinion, features, and
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
              href="/nhtv-voices/about"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About NHTV Voices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
