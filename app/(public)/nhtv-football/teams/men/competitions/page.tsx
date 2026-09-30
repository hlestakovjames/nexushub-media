import Link from 'next/link';

const competitionTypes = [
  {
    number: '01',
    title: 'Leagues',
    description:
      'League competitions organized around recurring seasons, participating teams, standings, fixtures, and results.',
  },
  {
    number: '02',
    title: 'Cups',
    description:
      'Knockout or cup competitions where teams progress through rounds toward a final outcome.',
  },
  {
    number: '03',
    title: 'Tournaments',
    description:
      'Structured football tournaments that may use groups, rounds, knockout stages, or other competition formats.',
  },
  {
    number: '04',
    title: 'Other Competitions',
    description:
      'Additional football competitions that do not fit neatly into the primary league, cup, or tournament categories.',
  },
];

const competitionData = [
  {
    label: 'IDENTITY',
    title: 'Competition Profile',
    description:
      'Name, type, country or region, season context, status, visual identity, and other supported metadata.',
  },
  {
    label: 'TEAMS',
    title: 'Participating Teams',
    description:
      'The teams competing in the competition, connected to their respective team profiles.',
  },
  {
    label: 'MATCHES',
    title: 'Fixtures & Results',
    description:
      'Upcoming and completed matches associated with the competition.',
  },
  {
    label: 'TABLE',
    title: 'Standings',
    description:
      'Competition standings where the competition format provides a table or ranking structure.',
  },
];

const competitionViews = [
  {
    title: 'All Competitions',
    description:
      'Browse the competitions available in the Men’s Football data system.',
  },
  {
    title: 'By Type',
    description:
      'Explore leagues, cups, tournaments, and other competition structures.',
  },
  {
    title: 'By Region',
    description:
      'Discover competitions through supported country or regional classifications.',
  },
  {
    title: 'By Season',
    description:
      'Follow competitions across their respective seasons and historical records.',
  },
];

export default function NHTVFootballMenCompetitionsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Men · Competitions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The Competitions
              <br />
              Behind the Game.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Explore football competitions and connect their teams, matches,
              standings, results, news, and media through one structured
              experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Men’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/men/teams"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Teams
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
                Competition Entities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Competitions provide the context around the matches.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A competition provides the broader structure in which football
                teams and matches exist. It can define a season, participating
                teams, rounds, standings, fixtures, and results.
              </p>

              <p>
                The Competition module gives those structures a persistent
                identity inside NHTV Football rather than treating competition
                names as plain text attached to individual matches.
              </p>

              <p>
                This creates a strong foundation for future standings,
                competition profiles, team relationships, season history,
                editorial coverage, and competition-focused media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITION DIRECTORY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Competition Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your competition catalogue will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This directory is ready for real football competition data.
                Once connected to the football data service, competitions can
                be loaded dynamically and grouped, filtered, and searched.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
              Competition directory
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[360px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="text-3xl font-bold text-[#1266B6]">
                    C
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Men’s Competitions
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Competition records will appear here when the data layer is
                  connected.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The directory can support search, competition types, regions,
                  seasons, status filters, pagination, sorting, and direct
                  links to individual competition profiles.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Search
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Type
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Region
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    Season
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Competition Types
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different competition structures need different context.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The platform can support different competition formats while
              maintaining a common underlying football entity model.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {competitionTypes.map((type) => (
              <article
                key={type.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {type.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
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

      {/* PROFILE MODEL */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Competition Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every competition can become its own football hub.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                Selecting a competition should provide more than its name. It
                should open the complete football context surrounding it.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {competitionData.map((item) => (
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

      {/* DISCOVERY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Competition Discovery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find competitions through different paths.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Audiences should be able to discover competitions directly or
              through the teams, regions, and seasons connected to them.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {competitionViews.map((view) => (
              <article
                key={view.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">{view.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {view.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STANDINGS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Standings
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Competition tables can become a core audience feature.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Where a competition uses a league-table structure, its profile
                can expose standings alongside fixtures, results, teams, and
                competition information.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                  Position
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                  Team
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                  Played
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                  Points
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1266B6]">
                Future Standings
              </p>

              <div className="mt-7 space-y-4">
                <div className="h-4 rounded-full bg-slate-100" />
                <div className="h-4 rounded-full bg-slate-100" />
                <div className="h-4 rounded-full bg-slate-100" />
                <div className="h-4 rounded-full bg-slate-100" />
                <div className="h-4 rounded-full bg-slate-100" />
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                Real standings can replace this presentation when competition
                data becomes available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATIONSHIPS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Connected Football Data
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Competitions sit at the centre of a football data network.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/nhtv-football/teams/men/teams"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>

              <h3 className="mt-3 text-xl font-bold">
                Who participates?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect competitions to their participating teams.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Explore Teams →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/fixtures"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FIXTURES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What is coming?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect competitions to upcoming matches.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                View Fixtures →
              </span>
            </Link>

            <Link
              href="/nhtv-football/teams/men/results"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                What happened?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect competitions to completed matches.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                View Results →
              </span>
            </Link>

            <Link
              href="/nhtv-football/news"
              className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-xl font-bold">
                What is the story?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Connect competitions to football editorial coverage and
                developments.
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6]">
                Read News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FUTURE DATA SYSTEM */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                  Built for Football Data
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready for a real competition service.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future competition system can support competition
                  identifiers, seasons, participating teams, standings,
                  fixtures, results, competition status, regions, editorial
                  coverage, media, and individual competition profiles.
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
            NHTV Football · Men · Competitions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Follow the competition behind every match.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Explore competitions and connect the teams, standings, fixtures,
            results, news, and media that surround them.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/nhtv-football/teams/men/teams"
              className="inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
            >
              Explore Teams
            </Link>

            <Link
              href="/nhtv-football/teams/men/fixtures"
              className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Fixtures
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
