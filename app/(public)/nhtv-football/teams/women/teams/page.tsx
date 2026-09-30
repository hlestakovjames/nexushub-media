import Link from 'next/link';

const directoryFeatures = [
  {
    number: '01',
    title: 'Team Directory',
    description:
      'A centralized destination for discovering women’s football teams.',
  },
  {
    number: '02',
    title: 'Team Profiles',
    description:
      'Each team can have a dedicated profile connected to its squad, players, fixtures, results, news, and videos.',
  },
  {
    number: '03',
    title: 'Competition Relationships',
    description:
      'Teams can be connected to the competitions and seasons in which they participate.',
  },
  {
    number: '04',
    title: 'Match Relationships',
    description:
      'Fixtures and results can reference the same canonical team entity.',
  },
];

const profileModules = [
  'Overview',
  'Squad',
  'Players',
  'Fixtures',
  'Results',
  'News',
  'Videos',
];

export default function NHTVFootballWomenTeamsPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-football/teams/women"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]"
            >
              ← Women
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Women · Teams
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Discover the
              <br />
              women’s teams.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A dedicated women’s team directory connecting every team to its
              players, competitions, matches, news, and video coverage.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Women’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/women/players"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Women’s Players
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
                Women’s Team Directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Teams are the foundation of the Women’s football system.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The Women’s Team Directory provides the primary discovery layer
                for teams inside the Women subsystem.
              </p>

              <p>
                Each team can become a permanent football destination rather
                than simply appearing as a name inside a fixture or results
                table.
              </p>

              <p>
                This keeps the Women’s experience structurally aligned with the
                Men’s system while allowing its actual teams and competition
                data to remain independent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Directory Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Build discovery around real team entities.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {directoryFeatures.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {feature.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
                Women’s Team Registry
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Registered teams will populate this directory.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The interface is intentionally prepared for dynamic team
                records supplied by the future football backend.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500">
              Women’s team registry
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="grid min-h-[340px] place-items-center text-center">
              <div className="max-w-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                  <span className="text-3xl font-bold text-[#1266B6]">W</span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Women’s Teams
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Team records will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future service can populate the directory with team
                  names, identifiers, logos, status, squad relationships,
                  competition participation, and links to team profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
                Team Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every Women’s team can become a complete destination.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/65">
                A profile keeps identity, squad information, matches, media,
                and competition relationships together.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {profileModules.map((module, index) => (
                <article
                  key={module}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-sm font-semibold text-[#5FC9E6]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">{module}</h3>

                  <p className="mt-3 leading-7 text-white/60">
                    Dedicated team-level information and related football
                    content.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/nhtv-football/teams/women/players"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">PLAYERS</p>

              <h3 className="mt-3 text-2xl font-bold">
                Connect teams to players.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore the Women’s player directory and individual player
                entities.
              </p>
            </Link>

            <Link
              href="/nhtv-football/teams/women/competitions"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">
                COMPETITIONS
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Connect teams to competitions.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Discover the competitions and seasons in which Women’s teams
                participate.
              </p>
            </Link>

            <Link
              href="/nhtv-football/teams/women/fixtures"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1266B6]">FIXTURES</p>

              <h3 className="mt-3 text-2xl font-bold">
                Connect teams to matches.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Upcoming fixtures can reference the same canonical Women’s
                team records.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            NHTV Football · Women · Teams
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Every team should have a place of its own.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The Women’s Team Directory creates the foundation for complete
            team-level football experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
