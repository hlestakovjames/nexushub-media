import Link from 'next/link';

const resultViews = [
  {
    number: '01',
    title: 'Recent Results',
    description:
      'A chronological view of completed matches involving teams within the Women’s football environment.',
  },
  {
    number: '02',
    title: 'By Team',
    description:
      'Trace completed matches through the record of a specific Women’s team.',
  },
  {
    number: '03',
    title: 'By Competition',
    description:
      'Group completed matches according to the competitions and seasons in which they were played.',
  },
  {
    number: '04',
    title: 'Match Detail',
    description:
      'Open an individual completed match for its score, teams, competition, date, and related coverage.',
  },
];

const resultData = [
  {
    label: 'SCORE',
    title: 'Final Result',
    description:
      'The completed scoreline becomes the primary result attached to the fixture.',
  },
  {
    label: 'MATCH',
    title: 'Teams',
    description:
      'The participating Women’s teams remain connected to their canonical team records.',
  },
  {
    label: 'COMPETITION',
    title: 'Competition Context',
    description:
      'The result retains its league, cup, tournament, round, and season context where available.',
  },
  {
    label: 'DATE',
    title: 'Matchday',
    description:
      'The completed match remains anchored to its scheduled and actual match information.',
  },
];

const lifecycle = [
  {
    number: '01',
    title: 'Fixture',
    description:
      'The match begins as a scheduled fixture inside the Women’s football system.',
  },
  {
    number: '02',
    title: 'Played',
    description:
      'Once the match is completed, its final state becomes a result.',
  },
  {
    number: '03',
    title: 'Published',
    description:
      'The result becomes discoverable through team, competition, and results views.',
  },
  {
    number: '04',
    title: 'Archived',
    description:
      'The historical result remains connected to the football entities and media surrounding it.',
  },
];

export default function NHTVFootballWomenResultsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Women · Results
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Remember what
              <br />
              happened.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Completed Women’s football matches, their final outcomes, and the
              team and competition context behind every result.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Women’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/women/fixtures"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Fixtures
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Women’s Results
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A permanent record of completed Women’s matches.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Women’s Results module records completed matches and
                presents them as a historical layer within the Teams → Women
                hierarchy.
              </p>

              <p>
                It complements the broader NHTV Football Results experience by
                giving the Women subsystem its own focused result discovery
                experience.
              </p>

              <p>
                Each result can later retain its relationships to teams,
                players, competitions, fixtures, seasons, news, and videos
                through the football backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Recent Results
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Women’s results board will live here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This interface is prepared for completed match records once the
                football backend and data services are connected.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Women’s results feed
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[360px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="text-3xl font-bold text-[#1266B6]">R</span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Completed Matches
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Women’s result records will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future results system can provide date navigation, team
                  filters, competition filters, scorelines, match status, and
                  direct access to individual match records.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">Date</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Teams</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Score</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Competition
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Result Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find the result through the context you need.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Results should work both as a quick record of a match and as a
              gateway into the deeper Women’s football data model.
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

                <h3 className="mt-4 text-2xl font-bold">{view.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {view.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Result Information
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The final score is only part of the record.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                A completed match should remain connected to the Women’s teams,
                competitions, dates, and surrounding football context.
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

                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Result Lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Every completed match becomes part of the record.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((stage) => (
              <article
                key={stage.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-football/teams/women/teams"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-2xl font-bold">
                Put every result in team context.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Team profiles can expose their completed matches alongside
                squads, fixtures, news, and videos.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/women/competitions"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                COMPETITIONS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Put every result in competition context.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Competition records can connect completed matches to standings,
                fixtures, teams, and season history.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore Competitions →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/women/news"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-2xl font-bold">
                Connect the score to the story.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Match reports, reactions, and analysis can reference completed
                Women’s results.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            NHTV Football · Women · Results
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Every result should lead somewhere deeper.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Move from a completed score into teams, competitions, players,
            fixtures, news, and the wider Women’s football record.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/nhtv-football/teams/women/teams"
              className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Teams
            </Link>

            <Link
              href="/nhtv-football/teams/women"
              className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30]"
            >
              Women’s Football Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
