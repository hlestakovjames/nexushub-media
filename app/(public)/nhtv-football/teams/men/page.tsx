import Link from 'next/link';

const modules = [
  {
    number: '01',
    title: 'Teams',
    description:
      'Browse the men’s football teams available within the NHTV Football data and media ecosystem.',
    href: '/nhtv-football/teams/men',
    label: 'Explore Teams',
  },
  {
    number: '02',
    title: 'Players',
    description:
      'Discover player profiles and the football information, statistics, matches, and media connected to them.',
    href: '/nhtv-football/teams/men/players',
    label: 'Explore Players',
  },
  {
    number: '03',
    title: 'Competitions',
    description:
      'Explore leagues, cups, tournaments, and other competitions connected to men’s football.',
    href: '/nhtv-football/teams/men/competitions',
    label: 'Explore Competitions',
  },
  {
    number: '04',
    title: 'Fixtures',
    description:
      'Follow upcoming men’s football matches through a team- and competition-aware fixture experience.',
    href: '/nhtv-football/teams/men/fixtures',
    label: 'View Fixtures',
  },
  {
    number: '05',
    title: 'Results',
    description:
      'Review completed men’s football matches, scores, and related match context.',
    href: '/nhtv-football/teams/men/results',
    label: 'View Results',
  },
  {
    number: '06',
    title: 'News',
    description:
      'Read men’s football news, team developments, analysis, stories, and editorial coverage.',
    href: '/nhtv-football/teams/men/news',
    label: 'Read News',
  },
  {
    number: '07',
    title: 'Videos',
    description:
      'Watch men’s football highlights, interviews, analysis, features, and related video content.',
    href: '/nhtv-football/teams/men/videos',
    label: 'Browse Videos',
  },
];

const dataRelationships = [
  {
    title: 'Teams',
    description:
      'Team entities provide the central identity around which matches, players, competitions, news, and videos can connect.',
  },
  {
    title: 'Players',
    description:
      'Player records can connect individuals to teams, matches, performances, statistics, and editorial coverage.',
  },
  {
    title: 'Competitions',
    description:
      'Competition records provide the league, tournament, stage, and football context surrounding matches and teams.',
  },
  {
    title: 'Matches',
    description:
      'Fixtures and results connect teams and competitions while providing the core match timeline.',
  },
];

export default function NHTVFootballMenTeamsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Men
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Men’s Football.
              <br />
              Teams, Players & Competitions.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A dedicated men’s football information and media environment
              connecting teams, players, competitions, matches, news, and
              videos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
              >
                Back to Teams
              </Link>

              <Link
                href="/nhtv-football"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                NHTV Football
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Men’s Football Module
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A deeper football information layer.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Men module gives NHTV Football a dedicated environment for
                men’s football entities, information, and media.
              </p>

              <p>
                It sits beneath the main Teams context while providing its own
                navigation and deeper content structure. This allows the
                platform to grow without forcing every football concept into a
                single directory page.
              </p>

              <p>
                The architecture is designed so teams, players, competitions,
                matches, editorial coverage, and video can eventually be
                connected through a shared data model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Men’s Football
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything has a distinct place.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Men module separates football entities, match information,
              editorial content, and media while keeping them connected.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.number}
                href={module.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-[#5FC9E6] hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-[#1266B6]">
                    {module.number}
                  </span>

                  <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1266B6]">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {module.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {module.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6]">
                  {module.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORY PLACEHOLDER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Men’s Team Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Team records will appear here.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This is the primary destination for men’s football teams.
                Real team data can later populate this directory through the
                football data service and backend.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500">
              Directory ready
            </span>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
            <div className="flex min-h-[320px] items-center justify-center p-8 sm:p-12">
              <div className="max-w-2xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
                  <span className="text-3xl font-bold text-[#1266B6]">
                    T
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Men’s Teams
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  The live team directory will be connected here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Search, filtering, competition grouping, team profiles, and
                  team relationships can be introduced when the football data
                  layer is active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA MODEL */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Connected Football Data
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Men module is built around relationships.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
                The value of the module comes from connecting football
                entities and content rather than treating every page as an
                isolated record.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {dataRelationships.map((item) => (
                <article
                  key={item.title}
                  className="border-l border-white/15 pl-6"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE ENTITY ROUTES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Future Entity Pages
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Individual football entities can become their own hubs.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The next layer can introduce dynamic team, player, and
              competition profiles, each with their own connected information
              and media.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold text-[#1266B6]">TEAM</p>

              <h3 className="mt-3 text-2xl font-bold">
                Team Profile
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Overview, squad, players, fixtures, results, competitions,
                news, and videos.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold text-[#1266B6]">PLAYER</p>

              <h3 className="mt-3 text-2xl font-bold">
                Player Profile
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Identity, statistics, matches, team relationships, news, and
                videos.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold text-[#1266B6]">
                COMPETITION
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Competition Profile
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Overview, standings, fixtures, results, participating teams,
                news, and videos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Move through the wider football ecosystem.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-football/fixtures"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FOOTBALL FIXTURES
              </p>

              <h3 className="mt-3 text-xl font-bold">
                See the wider upcoming schedule.
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Fixtures →
              </span>
            </Link>

            <Link
              href="/nhtv-football/results"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                FOOTBALL RESULTS
              </p>

              <h3 className="mt-3 text-xl font-bold">
                See completed match results.
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                View Results →
              </span>
            </Link>

            <Link
              href="/nhtv-football/news"
              className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">NEWS</p>

              <h3 className="mt-3 text-xl font-bold">
                Read the latest football coverage.
              </h3>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                Read News →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
            NHTV Football · Teams · Men
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            One place for the teams, players, and competitions behind the
            game.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Build the football information layer first, then connect the
            content, statistics, matches, and media around it.
          </p>

          <Link
            href="/nhtv-football/teams"
            className="mt-8 inline-flex rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30] transition hover:opacity-90"
          >
            Back to Teams
          </Link>
        </div>
      </section>
    </main>
  );
}
