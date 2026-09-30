import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const newsCategories = [
  {
    number: '01',
    title: 'Match News',
    description:
      'Reports, previews, reactions, and developments surrounding matches and competitions.',
  },
  {
    number: '02',
    title: 'Transfer & Team News',
    description:
      'News and updates around squads, players, clubs, managers, transfers, and team developments.',
  },
  {
    number: '03',
    title: 'Football Analysis',
    description:
      'Tactical analysis, opinions, trends, performances, and deeper discussion around the game.',
  },
  {
    number: '04',
    title: 'Football Stories',
    description:
      'Human-interest stories, journeys, communities, rivalries, personalities, and moments that go beyond match statistics.',
  },
];

const articleElements = [
  {
    title: 'Headline',
    description:
      'A clear headline communicating the central development or story.',
  },
  {
    title: 'Summary',
    description:
      'A concise introduction that gives the audience immediate context.',
  },
  {
    title: 'Story',
    description:
      'The main editorial content with relevant football context and supporting information.',
  },
  {
    title: 'Related Content',
    description:
      'Connections to fixtures, results, teams, videos, competitions, and other football stories.',
  },
];

export default function NHTVFootballNewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Football News"
        title={
          <>
            The latest from
            <br />
            the football world.
          </>
        }
        description="NHTV Football News is the dedicated editorial destination for football updates, match coverage, team developments, analysis, transfers, stories, and conversations around the game."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'View Fixtures',
          href: '/nhtv-football/fixtures',
        }}
        secondaryAction={{
          label: 'View Results',
          href: '/nhtv-football/results',
        }}
        height="large"
      />

      {/* INTRO */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Football Newsroom
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                More than match results.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                NHTV Football News is the editorial layer that explains what
                is happening around the game. It can cover match developments,
                teams, players, transfers, competitions, analysis, and the
                stories surrounding football.
              </p>

              <p>
                It complements the structured information available through
                Fixtures, Results, and Teams while providing the narrative and
                editorial context those modules cannot provide on their own.
              </p>

              <p>
                As the football platform grows, this newsroom can become a
                dynamic publishing system with categories, featured stories,
                search, related content, authors, media attachments, and
                publishing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Featured Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The story everyone should see first.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A featured story can occupy the primary editorial position,
                giving important developments, analysis, or special features
                greater visibility.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Football editorial
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-[#050A30] shadow-sm">
            <div className="grid min-h-[420px] lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative flex items-end p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.2),_transparent_42%)]" />

                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                    Featured NHTV Football
                  </p>

                  <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Your leading football story will appear here.
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                    This area is ready for a real published football article,
                    image, publication date, author, category, and related
                    content once the editorial system is active.
                  </p>

                  <Link
                    href="/nhtv-football/news"
                    className="mt-7 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
                  >
                    Read Featured Story
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-white/10 bg-white/5 p-8 lg:border-l lg:border-t-0">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                    <span className="text-3xl font-bold text-[#5FC9E6]">
                      F
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/40">
                    Story Media
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
                    Article imagery or supporting media can be connected here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Coverage
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different football stories. One newsroom.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Coverage can be organized into distinct editorial categories so
              audiences can find the type of football content they care about.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {newsCategories.map((category) => (
              <article
                key={category.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {category.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Latest Football News
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Stay close to what is happening.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Recent football stories can be presented here in a dynamic
                editorial feed as publishing becomes active.
              </p>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              News feed ready for CMS integration
            </span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                Matchday
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Matchday stories will appear here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Reports, previews, reactions, and post-match editorial can
                feed into this space.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                Teams
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Team developments can be featured here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Articles can connect directly to team profiles, fixtures,
                results, and related media.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1266B6]">
                Analysis
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Deeper football discussion can live here.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Tactical analysis, opinion, trends, and broader football
                conversations can sit alongside breaking updates.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* EDITORIAL MODEL */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Editorial Model
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every article should provide context.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                NHTV Football News should make it easy for audiences to
                understand not only what happened, but why the story matters
                and what other football content connects to it.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {articleElements.map((element) => (
                <article
                  key={element.title}
                  className="border-l border-white/15 pl-6"
                >
                  <h3 className="text-xl font-bold">{element.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {element.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATION + EDITORIAL */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Football Content
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              News works alongside the structured football modules.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nhtv-football/fixtures"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FIXTURES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What is coming up?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Link news stories to upcoming matches and scheduled
                competitions.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Fixtures →
              </span>
            </Link>

            <Link
              href="/nhtv-football/results"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What happened?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect reports and reactions to completed matches and
                results.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Results →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-xl font-bold">
                Who is involved?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect football stories to the teams and entities involved in
                them.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/videos"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">VIDEOS</p>

              <h3 className="mt-3 text-xl font-bold">
                Watch the story.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect editorial articles with interviews, highlights,
                features, and other football videos.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE SYSTEM */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for a Growing Newsroom
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  A football editorial system ready to become dynamic.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future publishing system can support drafts, editorial
                  review, authors, categories, tags, publication status,
                  featured stories, search, media attachments, related
                  fixtures, team relationships, and video connections.
                </p>
              </div>

              <Link
                href="/nhtv-football/about"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                About NHTV Football
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football News
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Stay informed beyond the scoreline.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Follow the latest football developments, discover deeper stories,
            and move naturally between news, fixtures, results, teams, and
            videos.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/fixtures"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              View Fixtures
            </Link>

            <Link
              href="/nhtv-football/videos"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse Videos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
