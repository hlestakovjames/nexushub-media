import Link from 'next/link';

const modules = [
  {
    number: '01',
    title: 'Teams',
    description:
      'Explore women’s football teams and their individual team profiles.',
    href: '/nhtv-football/teams/women/teams',
  },
  {
    number: '02',
    title: 'Players',
    description:
      'Discover women’s football players and their connected profiles.',
    href: '/nhtv-football/teams/women/players',
  },
  {
    number: '03',
    title: 'Competitions',
    description:
      'Explore competitions, seasons, standings, fixtures, and results.',
    href: '/nhtv-football/teams/women/competitions',
  },
  {
    number: '04',
    title: 'Fixtures',
    description:
      'Follow upcoming women’s football matches.',
    href: '/nhtv-football/teams/women/fixtures',
  },
  {
    number: '05',
    title: 'Results',
    description:
      'Review completed women’s football matches and outcomes.',
    href: '/nhtv-football/teams/women/results',
  },
  {
    number: '06',
    title: 'News',
    description:
      'Follow editorial coverage around women’s teams, players, and competitions.',
    href: '/nhtv-football/teams/women/news',
  },
  {
    number: '07',
    title: 'Videos',
    description:
      'Watch women’s football interviews, highlights, features, and analysis.',
    href: '/nhtv-football/teams/women/videos',
  },
];

export default function NHTVFootballWomenPage() {
  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-football/teams"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]"
            >
              ← Teams
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#5FC9E6]">
              NHTV Football · Teams · Women
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The home of
              <br />
              women’s football.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              A dedicated women’s football environment connecting teams,
              players, competitions, fixtures, results, news, and videos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women/teams"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Explore Women’s Teams
              </Link>

              <Link
                href="/nhtv-football/teams"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teams Home
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
                Women’s Football
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A complete football environment, not a secondary section.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Women’s football should have the same structural depth as the
                Men’s environment, with its own teams, players, competitions,
                fixtures, results, news, and videos.
              </p>

              <p>
                The Women subsystem therefore follows the same information
                architecture while remaining independently addressable and
                ready for its own football data.
              </p>

              <p>
                This allows the platform to serve both Men’s and Women’s
                football without mixing their schedules, entities, competition
                records, or editorial experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Women’s Modules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything needed for a complete women’s football experience.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each module has its own responsibility while remaining connected
              to the wider football entity model.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.number}
                href={module.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {module.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {module.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {module.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#1266B6] transition group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050A30] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              Connected Football System
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Women’s football remains part of the same football data model.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/65">
              Teams, players, competitions, matches, editorial content, and
              video remain connected through canonical football entities while
              preserving the Women context.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-[#5FC9E6]">TEAMS</p>
              <h3 className="mt-3 text-xl font-bold">Women’s Teams</h3>
              <p className="mt-3 leading-7 text-white/60">
                Dedicated team records and profiles.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-[#5FC9E6]">PLAYERS</p>
              <h3 className="mt-3 text-xl font-bold">Women’s Players</h3>
              <p className="mt-3 leading-7 text-white/60">
                Player identities and football relationships.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-[#5FC9E6]">MATCHES</p>
              <h3 className="mt-3 text-xl font-bold">Fixtures & Results</h3>
              <p className="mt-3 leading-7 text-white/60">
                Upcoming and completed women’s matches.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold text-[#5FC9E6]">MEDIA</p>
              <h3 className="mt-3 text-xl font-bold">News & Videos</h3>
              <p className="mt-3 leading-7 text-white/60">
                Editorial and visual coverage.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            NHTV Football · Teams · Women
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Build the Women’s side with the same depth as the Men’s side.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The frontend foundation is now ready for the Women subsystem to be
            developed module by module.
          </p>
        </div>
      </section>
    </main>
  );
}
