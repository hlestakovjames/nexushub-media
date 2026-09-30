import Link from 'next/link';

type CompetitionProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
      'Ranking and table information for the competition.',
  },
  {
    number: '03',
    title: 'Fixtures',
    description:
      'Upcoming matches scheduled within the competition.',
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
      'Men’s teams participating in the competition.',
  },
  {
    number: '06',
    title: 'News',
    description:
      'Editorial stories connected to the competition.',
  },
  {
    number: '07',
    title: 'Videos',
    description:
      'Visual media associated with the competition.',
  },
];

export default async function NHTVFootballMenCompetitionProfilePage({
  params,
}: CompetitionProfilePageProps) {
  const { slug } = await params;

  const displayName = slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <main className="bg-white text-[#050A30]">
      <section className="relative overflow-hidden bg-[#050A30] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(95,201,230,0.18),_transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/nhtv-football/teams/men/competitions"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]"
            >
              ← Men’s Competitions
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5FC9E6]">
              NHTV Football · Teams · Men · Competition Profile
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {displayName || 'Competition'}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              An entity-level destination for a Men’s football competition,
              connecting standings, teams, fixtures, results, news, and videos.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Competition Modules
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything connected to the competition.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The profile is designed to become the central destination for
              competition data and related media.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
              >
                <span className="text-sm font-semibold text-[#1266B6]">
                  {module.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{module.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1266B6]">
              Entity Ready
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for structured Men’s competition data.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              The slug currently identifies the competition route. Once the
              backend is connected, this page can resolve the canonical
              competition record, participating teams, seasons, standings,
              fixtures, results, news, and videos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/nhtv-football/teams/men/competitions"
                className="rounded-md bg-[#050A30] px-6 py-3 text-sm font-semibold text-white"
              >
                Men’s Competitions
              </Link>

              <Link
                href="/nhtv-football/teams/men/teams"
                className="rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-[#050A30]"
              >
                Men’s Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
