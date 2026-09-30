import Link from 'next/link';

const fixtureViews = [
  {
    number: '01',
    title: 'Upcoming Matches',
    description:
      'A focused view of upcoming matches involving teams within the Men’s football environment.',
  },
  {
    number: '02',
    title: 'By Team',
    description:
      'Filter or discover fixtures through the specific men’s teams audiences follow.',
  },
  {
    number: '03',
    title: 'By Competition',
    description:
      'Organize upcoming matches according to the competitions in which men’s teams participate.',
  },
  {
    number: '04',
    title: 'Match Detail',
    description:
      'Open an individual fixture to view the participating teams, competition, date, time, venue, and related content.',
  },
];

const matchInformation = [
  {
    label: 'MATCH',
    title: 'Teams',
    description:
      'The participating teams with clear home and away context where applicable.',
  },
  {
    label: 'TIME',
    title: 'Date & Kick-off',
    description:
      'The scheduled date and time presented clearly for the audience.',
  },
  {
    label: 'COMPETITION',
    title: 'Competition',
    description:
      'The league, cup, tournament, round, or other competition context.',
  },
  {
    label: 'LOCATION',
    title: 'Venue',
    description:
      'The stadium or venue associated with the fixture where available.',
  },
];

const lifecycle = [
  {
    number: '01',
    title: 'Scheduled',
    description:
      'A future match enters the fixture system and becomes available for discovery.',
  },
  {
    number: '02',
    title: 'Matchday',
    description:
      'The fixture becomes an active part of matchday coverage and audience discovery.',
  },
  {
    number: '03',
    title: 'Completed',
    description:
      'Once the match ends, it can move into the Men’s results experience.',
  },
  {
    number: '04',
    title: 'Archived',
    description:
      'The completed fixture remains connected to teams, competition, news, and media history.',
  },
];

export default function NHTVFootballMenFixturesPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Men · Fixtures
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Know what is
              <br />
              coming next.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Upcoming men’s football matches, organized around teams,
              competitions, dates, and the matchday experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/men/results"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Men’s Fixtures
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A focused schedule for men’s football.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Men’s Fixtures module provides a focused view of upcoming
                matches associated with the men’s football teams represented
                within the platform.
              </p>

              <p>
                It complements the broader NHTV Football Fixtures experience by
                providing a more specific context beneath the Teams → Men
                hierarchy.
              </p>

              <p>
                Once connected to the football data service, this module can
                provide dynamic schedules, filters, team-specific views,
                competition groupings, match status, and individual fixture
                pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIXTURE BOARD */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Upcoming Fixtures
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Men’s fixture board will live here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This interface is prepared for real fixture records once the
                football data and backend services are connected.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Men’s fixture feed
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[360px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="text-3xl font-bold text-[#1266B6]">
                    F
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Upcoming Matches
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Men’s fixture records will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The live fixture system can later provide date navigation,
                  team filters, competition filters, match status, and direct
                  links into detailed fixture records.
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
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Venue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Fixture Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find the match through the context you know.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Audiences should not have to navigate the entire fixture list to
              find one match.
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

                <h3 className="mt-4 text-2xl font-bold">{view.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {view.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATCH DATA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Match Information
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The important details should be visible immediately.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Each fixture should expose the minimum information needed to
                understand the upcoming match while allowing deeper details
                through the individual match experience.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {matchInformation.map((item) => (
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

      {/* LIFECYCLE */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Match Lifecycle
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A fixture moves naturally through the football system.
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

                <h3 className="mt-4 text-xl font-bold">
                  {stage.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM + COMPETITION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/nhtv-football/teams/men/teams"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                TEAMS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Follow fixtures through a team.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore team entities and use their profiles as a gateway into
                upcoming and completed matches.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/competitions"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                COMPETITIONS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Follow fixtures through a competition.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover how upcoming matches fit into leagues, cups,
                tournaments, seasons, and other competition structures.
              </p>

              <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Explore Competitions →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED MODULES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The fixture is only one part of the match journey.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-football/teams/men/results"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                See completed matches.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Once a match is complete, its record belongs in Results.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                View Results →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/news"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                NEWS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Follow the story.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Match previews and related football stories can connect
                directly to upcoming fixtures.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Read News →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/videos"
              className="group rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                VIDEOS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Watch match coverage.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Previews, interviews, analysis, and other football videos can
                be connected to the fixture.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Browse Videos →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DATA SYSTEM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Football Data
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for a dedicated Men’s fixture service.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future fixture system can support football identifiers,
                  team relationships, competition relationships, dates, times,
                  venues, status, postponements, match detail, and links into
                  the wider football content system.
                </p>
              </div>

              <Link
                href="/nhtv-football/teams/men"
                className="inline-flex w-fit rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football · Men · Fixtures
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Know the match before it begins.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Follow upcoming men’s football matches and move naturally into
            teams, competitions, results, news, and video coverage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men/teams"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Teams
            </Link>

            <Link
              href="/nhtv-football/teams/men/results"
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
