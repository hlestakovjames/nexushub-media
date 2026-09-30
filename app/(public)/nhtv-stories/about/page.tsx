import Link from 'next/link';

const storyPrinciples = [
  {
    number: '01',
    title: 'People first',
    description:
      'We look beyond events and headlines to understand the people, experiences, and perspectives behind a story.',
  },
  {
    number: '02',
    title: 'Context matters',
    description:
      'Stories become more meaningful when audiences can understand the background, setting, and circumstances around them.',
  },
  {
    number: '03',
    title: 'Meaningful storytelling',
    description:
      'NHTV Stories is intended for thoughtful storytelling that gives subjects the space and context they deserve.',
  },
  {
    number: '04',
    title: 'Many formats',
    description:
      'Written stories, photography, interviews, audio, and video can work together to tell a more complete story.',
  },
];

const storyAreas = [
  {
    title: 'Featured',
    description:
      'A curated editorial showcase for selected stories that deserve greater visibility and deeper attention.',
    href: '/nhtv-stories/featured',
  },
  {
    title: 'People',
    description:
      'Profiles, journeys, experiences, achievements, and perspectives centred on people.',
    href: '/nhtv-stories/people',
  },
  {
    title: 'Culture',
    description:
      'Stories about identity, heritage, creativity, traditions, and cultural change.',
    href: '/nhtv-stories/culture',
  },
  {
    title: 'Community',
    description:
      'Stories from communities, local initiatives, places, organisations, and collective experiences.',
    href: '/nhtv-stories/community',
  },
  {
    title: 'Video',
    description:
      'Visual storytelling through features, interviews, documentaries, and short-form video.',
    href: '/nhtv-stories/video',
  },
];

export default function NHTVStoriesAboutPage() {
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
              About
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Stories that
              <br />
              connect us.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              NHTV Stories is a dedicated storytelling platform focused
              on the people, experiences, cultures, and communities behind
              the subjects that matter.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS NHTV STORIES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                What We Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Going beyond the headline.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                NHTV Stories exists to give audiences a deeper way to
                encounter people, places, experiences, cultures, and
                communities.
              </p>

              <p>
                Rather than treating every subject as a quick headline,
                Stories creates space for context, perspective, detail,
                and the human experiences that make a subject meaningful.
              </p>

              <p>
                The platform is designed to support both editorial
                storytelling and rich multimedia publishing as the NHTV
                media ecosystem develops.
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
              Our Storytelling Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How NHTV Stories is structured.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The platform is designed around a simple idea: stories
              become stronger when audiences can understand the people,
              context, and experiences behind them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {storyPrinciples.map((principle) => (
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

      {/* CONTENT AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Stories Structure
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One platform, distinct storytelling areas.
              </h2>
            </div>

            <Link
              href="/nhtv-stories"
              className="text-sm font-semibold text-[#1266B6] transition hover:text-[#050A30]"
            >
              Stories Home →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {storyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1266B6]">
                  NHTV Stories
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

      {/* EDITORIAL + MULTIMEDIA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial + Multimedia
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for stories that can grow beyond one format.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                A single subject may eventually become a written feature,
                a profile, an interview, a photo-led story, or a video
                production. The platform is structured to support those
                relationships without turning them into one undifferentiated
                content type.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Written',
                  description:
                    'Long-form and editorial storytelling.',
                },
                {
                  title: 'Visual',
                  description:
                    'Photography and visual storytelling.',
                },
                {
                  title: 'Audio',
                  description:
                    'Future audio and interview formats.',
                },
                {
                  title: 'Video',
                  description:
                    'Produced video stories and documentaries.',
                },
              ].map((format) => (
                <div
                  key={format.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold">
                    {format.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {format.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PUBLISHING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Future Publishing System
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for an editorial backend.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The frontend establishes the content structure now while
                leaving publishing, media management, search, taxonomy,
                and editorial controls for the backend stage.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Stories and articles',
                'Categories and topics',
                'People and contributors',
                'Community and place metadata',
                'Images, audio, and video',
                'Publication status and dates',
                'Related stories',
                'Featured editorial selection',
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

      {/* RELATION TO NHTV */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                  Part of the NHTV Ecosystem
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  One media ecosystem. Different editorial purposes.
                </h2>

                <p className="mt-5 leading-7 text-white/65">
                  NHTV Stories exists alongside Nexus Hub TV, NHTV
                  Football, and NHTV Voices, with each property designed
                  around its own audience experience and content purpose.
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
                      Broadcast, shows, programs, live, video, and TV
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
                      Football coverage across news, competitions,
                      teams, fixtures, results, and video.
                    </p>
                  </Link>

                  <Link
                    href="/nhtv-voices"
                    className="block"
                  >
                    <p className="text-sm font-semibold text-[#1266B6]">
                      NHTV Voices
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      A future platform for podcasts, interviews,
                      opinion, features, and video.
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
            NHTV Stories
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Every story deserves the space to be understood.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore the Stories platform and discover how people,
            culture, community, and video come together.
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
