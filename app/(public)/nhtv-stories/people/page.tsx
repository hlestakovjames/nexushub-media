import Link from 'next/link';

const storyTypes = [
  {
    number: '01',
    title: 'Profiles',
    description:
      'Thoughtful profiles that introduce audiences to people, their work, identities, experiences, and the ideas that shape their journeys.',
  },
  {
    number: '02',
    title: 'Journeys',
    description:
      'Personal journeys exploring growth, challenges, transitions, achievements, and the experiences behind meaningful milestones.',
  },
  {
    number: '03',
    title: 'Perspectives',
    description:
      'Stories that give people space to share their experiences, viewpoints, lessons, and reflections in their own context.',
  },
];

const editorialFocus = [
  'Human experiences',
  'Personal journeys',
  'Achievements and milestones',
  'Challenges and resilience',
  'Ideas and perspectives',
  'Community impact',
];

export default function NHTVStoriesPeoplePage() {
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
              People
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The people
              <br />
              behind the story.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Stories that put people at the centre — their journeys,
              experiences, achievements, challenges, and perspectives.
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
                People Stories
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every person carries a story worth understanding.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                The People section explores the human side of the subjects
                and events that matter. It gives audiences a closer look at
                the experiences behind achievements, decisions, ideas, and
                everyday realities.
              </p>

              <p>
                Stories can range from long-form profiles and personal
                journeys to interviews, perspectives, and human-interest
                features, all managed through the future editorial
                publishing system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY TYPES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Story Types
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different ways to tell a human story.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              People stories can take different editorial forms while
              maintaining the same focus on context, experience, and
              human perspective.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {storyTypes.map((storyType) => (
              <article
                key={storyType.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {storyType.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  {storyType.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {storyType.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT STATE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#050A30] p-8 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5FC9E6]">
                  People Stories
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  A publishing space ready for real people and real
                  experiences.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-white/65">
                  Published profiles, interviews, journeys, and human
                  interest stories can populate this section once the
                  editorial publishing workflow is connected.
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Current State
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-[#050A30]">
                    No People stories published yet.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Future content can include titles, profiles, images,
                    contributors, categories, publication dates, related
                    stories, and media assets.
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

      {/* EDITORIAL FOCUS */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Focus
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What we look for in People stories.
              </h2>

              <p className="mt-5 leading-7 text-white/65">
                The section is designed to surface meaningful human
                experiences rather than simply listing personalities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {editorialFocus.map((item) => (
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

      {/* RELATED AREAS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              People stories connect with the wider Stories platform.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-stories/culture"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Culture
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore cultural stories.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover identity, heritage, creativity, traditions, and
                changing cultural experiences.
              </p>
            </Link>

            <Link
              href="/nhtv-stories/community"
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Community
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Explore community stories.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                See the people, initiatives, places, and experiences
                shaping communities.
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
                Watch People stories.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the video side of the NHTV Stories experience.
              </p>
            </Link>
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
                Start with the people.
              </h2>

              <p className="mt-4 leading-7 text-white/65">
                Explore the wider Stories platform through Featured,
                Culture, Community, and Video.
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
