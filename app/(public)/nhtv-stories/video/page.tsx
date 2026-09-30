import Link from 'next/link';

const videoFormats = [
  {
    number: '01',
    title: 'Story Features',
    description:
      'Produced video stories that explore people, experiences, communities, culture, and the context behind a subject.',
  },
  {
    number: '02',
    title: 'Interviews',
    description:
      'Video conversations that give people and contributors room to share their experiences, perspectives, and ideas.',
  },
  {
    number: '03',
    title: 'Documentary Stories',
    description:
      'Longer-form visual storytelling designed to explore a subject through people, place, context, and experience.',
  },
  {
    number: '04',
    title: 'Short Features',
    description:
      'Concise visual stories designed for focused subjects, individual moments, community highlights, and quick discovery.',
  },
];

const videoCapabilities = [
  'Video publishing',
  'Thumbnail and cover media',
  'Categories and topics',
  'Contributors and presenters',
  'Publication metadata',
  'Related written stories',
];

export default function NHTVStoriesVideoPage() {
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
              Video
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              See the story.
              <br />
              Experience the moment.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              A visual storytelling space for features, interviews,
              documentaries, and short-form stories from NHTV Stories.
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
                Video Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Some stories need to be seen as well as read.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Stories Video brings the platform's visual storytelling
                into one dedicated experience, allowing audiences to
                discover stories through moving images, conversations, and
                documentary-style work.
              </p>

              <p>
                Video can stand on its own while also connecting back to
                written stories, People, Culture, and Community coverage.
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
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="min-h-96 bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <div className="flex h-full min-h-72 items-center justify-center">
                  <div className="text-center">
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
                      NHTV Stories Video
                    </p>

                    <h3 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight">
                      The video library is ready for publication.
                    </h3>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-white/65">
                      Published videos can appear here with thumbnails,
                      titles, descriptions, categories, duration, dates,
                      and related story information.
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
                    No videos published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    The future publishing layer can populate this space
                    with video records, media files, thumbnails,
                    contributors, categories, and related stories.
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

      {/* VIDEO FORMATS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Video Formats
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different formats for different stories.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The video library supports a range of editorial formats
              without forcing every story into the same presentation.
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

      {/* VIDEO + STORY CONNECTION */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Connected Storytelling
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Video does not have to live on its own.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                A future video entry can connect audiences back to the
                wider editorial story, allowing one subject to be
                experienced across multiple formats.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/nhtv-stories/people"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  People
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Connect to profiles and journeys.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Link video interviews and profiles to the people
                  featured in a story.
                </p>
              </Link>

              <Link
                href="/nhtv-stories/culture"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Culture
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Connect to cultural stories.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Bring traditions, creativity, identity, and cultural
                  experiences into a visual format.
                </p>
              </Link>

              <Link
                href="/nhtv-stories/community"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Community
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Connect to community coverage.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Show community initiatives, places, and experiences
                  through video.
                </p>
              </Link>

              <Link
                href="/nhtv-stories/featured"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-[#5FC9E6]">
                  Featured
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Promote selected video stories.
                </h3>

                <p className="mt-3 leading-7 text-white/65">
                  Selected videos can later be surfaced through the
                  editorial Featured collection.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Publishing Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Designed for a proper media workflow.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The page separates the presentation layer from the
                future media-management and editorial systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {videoCapabilities.map((item) => (
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
                Take the story beyond the page.
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Explore the wider Stories platform through People,
                Culture, Community, and Featured.
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
                href="/nhtv-stories/featured"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Featured Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
