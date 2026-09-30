import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const resultViews = [
  {
    number: '01',
    title: 'Recent Results',
    description:
      'Surface the latest completed matches so audiences can quickly see what happened most recently.',
  },
  {
    number: '02',
    title: 'By Competition',
    description:
      'Organize completed matches by league, tournament, cup, round, or other competition context.',
  },
  {
    number: '03',
    title: 'By Team',
    description:
      'Allow audiences to follow the completed matches and results of the teams they care about.',
  },
  {
    number: '04',
    title: 'Match Detail',
    description:
      'Provide a dedicated destination for an individual completed match with its final outcome and related coverage.',
  },
];

const resultData = [
  {
    label: 'FINAL SCORE',
    title: 'Match outcome',
    description:
      'The final score and result status should be the most immediately visible information.',
  },
  {
    label: 'TEAMS',
    title: 'Participating teams',
    description:
      'Identify the teams involved and maintain clear home and away context where applicable.',
  },
  {
    label: 'COMPETITION',
    title: 'Competition context',
    description:
      'Show the league, tournament, round, or stage associated with the completed match.',
  },
  {
    label: 'DATE',
    title: 'Match date',
    description:
      'Retain the date and timing information needed to place the result within its football timeline.',
  },
];

const postMatchFlow = [
  {
    number: '01',
    title: 'Completed',
    description:
      'A fixture transitions from the upcoming schedule into the completed-results experience.',
  },
  {
    number: '02',
    title: 'Result',
    description:
      'The final score and official result become the primary match information.',
  },
  {
    number: '03',
    title: 'Coverage',
    description:
      'News, analysis, interviews, highlights, and other related content can connect to the result.',
  },
  {
    number: '04',
    title: 'Archive',
    description:
      'The match remains discoverable as part of the historical football record.',
  },
];

export default function NHTVFootballResultsPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Football Results"
        title={
          <>
            Know what
            <br />
            happened.
          </>
        }
        description="NHTV Football Results is the completed-match destination for football audiences, bringing final scores, match context, competition information, and related coverage together."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'View Fixtures',
          href: '/nhtv-football/fixtures',
        }}
        secondaryAction={{
          label: 'Explore Teams',
          href: '/nhtv-football/teams',
        }}
        height="large"
      />

      {/* INTRO */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Completed Matches
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A clear record of what happened on the pitch.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Results provides the structured record of completed football
                matches. It gives audiences an immediate view of final
                outcomes while preserving the context around each match.
              </p>

              <p>
                It complements Fixtures by completing the match lifecycle:
                Fixtures answers what is coming, while Results answers what has
                already happened.
              </p>

              <p>
                Once connected to the football data layer, this section can
                become a dynamic historical results system with filtering,
                competition views, team views, and individual match detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT BOARD */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Results Board
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Recent results will be presented here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This interface is ready for real completed-match data once the
                football information source and backend services are
                connected.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Results feed
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[340px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <span className="text-2xl font-bold text-[#1266B6]">
                    R
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Completed Results
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your latest football results will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The results board can later support live filtering, date
                  ranges, competition groupings, team filters, match status,
                  scores, and links to individual match pages.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Final Score
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Teams
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Competition
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Date
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Result Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find results the way you follow football.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A good results system should serve both casual visitors checking
              the latest scores and audiences following specific teams or
              competitions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {resultViews.map((view) => (
              <article
                key={view.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {view.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {view.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {view.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULT INFORMATION */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Match Information
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The result should tell the story at a glance.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Completed matches need a concise presentation first, with
                deeper context available when the audience wants more.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {resultData.map((item) => (
                <article
                  key={item.title}
                  className="border-l border-white/15 pl-6"
                >
                  <p className="text-sm font-semibold text-[#5FC9E6]">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POST-MATCH */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              After the Match
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Results are the beginning of the post-match story.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {postMatchFlow.map((stage) => (
              <article
                key={stage.number}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {stage.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{stage.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED CONTENT */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Football Content
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Every result can lead somewhere deeper.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A result should not be an isolated score. It can become the entry
              point to the teams, match coverage, videos, and stories around
              the game.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nhtv-football/teams"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-xl font-bold">
                Who played?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect the completed match to the participating teams.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/news"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-xl font-bold">
                What was the story?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect results to match reports, reactions, analysis, and
                editorial stories.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Read Football News →
              </span>
            </Link>

            <Link
              href="/nhtv-football/videos"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">VIDEOS</p>

              <h3 className="mt-3 text-xl font-bold">
                Watch the coverage.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect the result to highlights, interviews, analysis, and
                football video content.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>

            <Link
              href="/nhtv-football/fixtures"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FIXTURES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What comes next?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Move from completed matches to the next upcoming fixture.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Fixtures →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DYNAMIC DATA */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Football Data
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for a dynamic results service.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  When the football data layer is connected, Results can
                  support competition filtering, team filtering, date ranges,
                  score states, match status, individual match pages, and
                  relationships to editorial and media content.
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
            NHTV Football Results
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            The final whistle starts the next story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Check completed matches, then move into the teams, news, videos,
            and upcoming fixtures surrounding the game.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/fixtures"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              View Fixtures
            </Link>

            <Link
              href="/nhtv-football/teams"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
