import Link from 'next/link';

import PageHero from '@/components/hero/PageHero';

const fixtureViews = [
  {
    number: '01',
    title: 'Upcoming',
    description:
      'Focus on matches that have not yet been played, giving audiences a clear view of what is coming next.',
  },
  {
    number: '02',
    title: 'By Competition',
    description:
      'Organize fixtures around leagues, tournaments, cups, and other football competitions.',
  },
  {
    number: '03',
    title: 'By Team',
    description:
      'Allow audiences to follow upcoming matches for the teams they care about.',
  },
  {
    number: '04',
    title: 'Match Detail',
    description:
      'Provide a dedicated destination for individual matches with teams, competition, date, time, venue, and related coverage.',
  },
];

const fixtureData = [
  {
    label: 'DATE',
    title: 'Match date',
    description:
      'The scheduled date on which the fixture is expected to take place.',
  },
  {
    label: 'TIME',
    title: 'Kick-off time',
    description:
      'The planned start time for the match, presented according to the audience-facing timezone.',
  },
  {
    label: 'MATCH',
    title: 'Teams',
    description:
      'The participating teams with clear home and away context where applicable.',
  },
  {
    label: 'CONTEXT',
    title: 'Competition',
    description:
      'The competition, stage, round, or other context associated with the fixture.',
  },
];

const matchFlow = [
  {
    number: '01',
    title: 'Scheduled',
    description:
      'The fixture is announced and becomes discoverable through the upcoming schedule.',
  },
  {
    number: '02',
    title: 'Matchday',
    description:
      'The fixture becomes the immediate focus for match-related coverage and audience discovery.',
  },
  {
    number: '03',
    title: 'Completed',
    description:
      'Once the match ends, the fixture moves into the Results experience with the final outcome.',
  },
  {
    number: '04',
    title: 'Archived',
    description:
      'The completed match can remain connected to news, teams, videos, and historical records.',
  },
];

export default function NHTVFootballFixturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="NHTV Football Fixtures"
        title={
          <>
            Know what is
            <br />
            coming next.
          </>
        }
        description="NHTV Football Fixtures is the upcoming-match destination for football audiences, bringing scheduled matches, competition context, team information, and future match coverage together."
        image="/images/hero/hero-team.jpeg"
        primaryAction={{
          label: 'View Results',
          href: '/nhtv-football/results',
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
                Upcoming Matches
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A clear home for what is ahead.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Fixtures provides the structured view of upcoming football
                matches. It answers a simple question for the audience:
                what is coming next?
              </p>

              <p>
                The experience should make it easy to discover a match by date,
                competition, or team while preserving enough context for the
                fixture to make sense.
              </p>

              <p>
                Once the backend and football data services are connected,
                this section can become a dynamic match schedule rather than a
                static content page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIXTURE BOARD */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Fixture Board
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Upcoming matches will be presented here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This interface is intentionally ready for real fixture data
                once the football information source and backend services are
                connected.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Fixture feed
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[330px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <span className="text-2xl text-[#1266B6]">F</span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Upcoming Fixtures
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your live fixture schedule will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The fixture board can later support live filtering, dates,
                  competition groupings, team filters, match status, and links
                  into individual fixture detail pages.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Date
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Time
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Teams
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Competition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXTURE VIEWS */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find fixtures the way you follow football.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Different audiences need different ways to navigate the match
              schedule. The fixture system should support each of them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {fixtureViews.map((view) => (
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

      {/* FIXTURE DATA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Match Information
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The essential information should always be visible.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                A fixture card or fixture detail page needs enough information
                for an audience member to immediately understand the match.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {fixtureData.map((item) => (
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

      {/* MATCH LIFECYCLE */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Match Lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A fixture should follow the match from announcement to archive.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {matchFlow.map((stage) => (
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

      {/* CONNECTIONS */}
      <section className="bg-slate-50 text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Football Data
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Fixtures should connect to the rest of the football platform.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nhtv-football/teams"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-xl font-bold">
                Who is playing?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect each fixture to the teams participating in the match.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/results"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What happens after?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Completed fixtures can transition into the results system.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Results →
              </span>
            </Link>

            <Link
              href="/nhtv-football/news"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-xl font-bold">
                Follow the story.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Match previews and related football stories can connect
                directly to fixtures.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Read News →
              </span>
            </Link>

            <Link
              href="/nhtv-football/videos"
              className="group rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">VIDEOS</p>

              <h3 className="mt-3 text-xl font-bold">
                Watch related coverage.
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Interviews, previews, highlights, and analysis can be tied to
                a specific match.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Browse Videos →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE DYNAMIC SYSTEM */}
      <section className="bg-white text-[#050A30]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Live Football Data
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for a real fixture service.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Once connected to the football data layer, Fixtures can
                  support real-time or regularly updated schedules, competition
                  filtering, team filtering, timezone handling, match status,
                  venue data, and individual fixture detail.
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
            NHTV Football Fixtures
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Know the match before the whistle.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Follow upcoming matches and move naturally from fixtures to teams,
            news, results, and football video coverage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Teams
            </Link>

            <Link
              href="/nhtv-football/results"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Results
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
