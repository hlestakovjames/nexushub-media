import Link from 'next/link';

const areas = [
  {
    number: '01',
    title: 'Competition Directory',
    description:
      'Discover leagues, cups, tournaments, and other competitions within the Women’s football environment.',
  },
  {
    number: '02',
    title: 'Competition Profiles',
    description:
      'Each competition can become a dedicated destination for standings, fixtures, results, teams, news, and videos.',
  },
  {
    number: '03',
    title: 'Season Context',
    description:
      'Competition records can be organized by season to preserve both current and historical campaigns.',
  },
];

const modules = [
  {
    number: '01',
    title: 'Overview',
    description:
      'Competition identity, format, season, and primary information.',
  },
  {
    number: '02',
    title: 'Standings',
    description:
      'Ranking and table information supplied by the football data service.',
  },
  {
    number: '03',
    title: 'Fixtures',
    description:
      'Upcoming matches scheduled inside the competition.',
  },
  {
    number: '04',
    title: 'Results',
    description:
      'Completed matches and historical competition outcomes.',
  },
  {
    number: '05',
    title: 'Teams',
    description:
      'The teams participating in the competition.',
  },
  {
    number: '06',
    title: 'News',
    description:
      'Editorial coverage connected to the competition.',
  },
  {
    number: '07',
    title: 'Videos',
    description:
      'Visual media associated with the competition.',
  },
];

export default function NHTVFootballWomenCompetitionsPage() {
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
              NHTV Football · Teams · Women · Competitions
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Where the
              <br />
              Women’s game comes together.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              Explore women’s football competitions and connect their teams,
              standings, fixtures, results, news, and video coverage.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/women"
                className="rounded-md bg-[#5FC9E6] px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Women’s Football Home
              </Link>

              <Link
                href="/nhtv-football/teams/women/teams"
                className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Women’s Teams
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
                Women’s Competitions
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Competitions provide the structure behind the matches.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                A competition defines the environment in which Women’s teams
                meet, matches are scheduled, rankings are calculated, and
                results gain broader meaning.
              </p>

              <p>
                The Women’s Competitions module therefore acts as an entity
                layer alongside teams and players, while Fixtures, Results,
                News, and Videos remain connected content and data modules.
              </p>

              <p>
                The backend can later maintain canonical competition records
                and expose their relationships to teams, matches, seasons,
                standings, editorial content, and media.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Competition Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Build discovery around real competition entities.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {areas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
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
                Women’s Competition Registry
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Registered competitions will populate this directory.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The frontend is prepared for dynamic competition records from
                the future football backend.
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500">
              Women’s competition registry
            </span>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="grid min-h-[340px] place-items-center text-center">
              <div className="max-w-2xl">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-sm">
                  <span className="text-3xl font-bold text-[#1266B6]">C</span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#1266B6]">
                  Women’s Competitions
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Competition records will appear here.
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The future service can provide competition names,
                  identifiers, formats, seasons, participating teams,
                  standings, fixtures, results, and related editorial and
                  media content.
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
                Competition Profile
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One competition. Every important layer.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/65">
                Each competition can become a central destination for its
                participating teams, matches, standings, stories, and media.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {modules.map((module) => (
                <article
                  key={module.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-sm font-semibold text-[#5FC9E6]">
                    {module.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {module.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/60">
                    {module.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-6 md:grid-cols-4">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">TEAMS</p>
              <h3 className="mt-3 text-xl font-bold">Participants</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Women’s teams participating in the competition.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">MATCHES</p>
              <h3 className="mt-3 text-xl font-bold">Fixtures & Results</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Upcoming and completed competition matches.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">TABLE</p>
              <h3 className="mt-3 text-xl font-bold">Standings</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ranking and table data for the competition.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold text-[#1266B6]">MEDIA</p>
              <h3 className="mt-3 text-xl font-bold">News & Videos</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Editorial and visual coverage of the competition.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
            NHTV Football · Women · Competitions
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Discover the competitions behind the Women’s matches.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A connected competition system provides the structure behind
            Women’s teams, fixtures, results, standings, stories, and football
            history.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/nhtv-football/teams/women"
              className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
            >
              Women’s Football Home
            </Link>

            <Link
              href="/nhtv-football/teams/women/teams"
              className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30]"
            >
              Women’s Teams
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
